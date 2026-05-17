import { useState } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './nodes.css';

/**
 * createNode — Declarative factory for glassmorphic pipeline nodes.
 *
 * @param {Object} config
 * @param {string} config.nodeType  — identifier used for CSS accent theming
 * @param {string} config.title     — display name shown in the header
 * @param {string} config.icon      — emoji/icon for the header badge
 * @param {Array}  config.handles   — HandleConfig entries
 * @param {Array}  config.fields    — field descriptors (text/number/select/textarea/checkbox)
 * @param {Function} config.renderContent — optional custom renderer
 * @param {Object} config.defaultValues
 * @param {number} config.width     — override default 240px width
 */
export const createNode = (config) => {
  const {
    nodeType = 'default',
    title,
    icon = '',
    handles = [],
    fields = [],
    renderContent,
    defaultValues = {},
    width = 240,
  } = config;

  return ({ id, data, selected }) => {
    const { deleteElements } = useReactFlow();

    const [fieldValues, setFieldValues] = useState(() => {
      const initial = {};
      fields.forEach((field) => {
        const dataKey = field.dataKey || field.name;
        initial[field.name] =
          data?.[dataKey] || field.defaultValue || defaultValues[field.name] || '';
      });
      return initial;
    });

    const handleFieldChange = (fieldName, value) => {
      setFieldValues((prev) => ({ ...prev, [fieldName]: value }));
    };

    const handleDelete = (e) => {
      e.stopPropagation();
      deleteElements({ nodes: [{ id }] });
    };

    const renderHandles = () =>
      handles.map((handle) => {
        const { type, position, id: handleId, style: handleStyle = {}, label } = handle;
        const fullHandleId = `${id}-${handleId}`;

        return (
          <div key={fullHandleId} style={{ position: 'relative' }}>
            <Handle
              type={type}
              position={position}
              id={fullHandleId}
              style={handleStyle}
            />
            {label && (
              <span
                className={`handle-label ${position === Position.Left ? 'handle-label-left' : 'handle-label-right'}`}
              >
                {label}
              </span>
            )}
          </div>
        );
      });

    const renderFields = () =>
      fields.map((field) => {
        const {
          name,
          label,
          type = 'text',
          options = [],
          placeholder = '',
        } = field;

        const fieldValue = fieldValues[name];

        switch (type) {
          case 'select':
            return (
              <label key={name} className="node-field-label">
                {label}
                <select
                  className="node-field-input"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            );

          case 'textarea':
            return (
              <label key={name} className="node-field-label">
                {label}
                <textarea
                  className="node-field-input"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                />
              </label>
            );

          case 'number':
            return (
              <label key={name} className="node-field-label">
                {label}
                <input
                  type="number"
                  className="node-field-input"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                />
              </label>
            );

          case 'checkbox':
            return (
              <label
                key={name}
                className="node-field-label"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <input
                  type="checkbox"
                  checked={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.checked)}
                />
                {label}
              </label>
            );

          case 'text':
          default:
            return (
              <label key={name} className="node-field-label">
                {label}
                <input
                  type="text"
                  className="node-field-input"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                />
              </label>
            );
        }
      });

    return (
      <div
        className={`custom-node${selected ? ' selected' : ''}`}
        data-node-type={nodeType}
        style={{ width }}
      >
        {renderHandles()}

        <button
          onClick={handleDelete}
          className="node-delete-button"
          title="Delete node"
        >
          ×
        </button>

        <div className="node-header">
          {icon && <span className="node-icon">{icon}</span>}
          <span className="node-title">{title}</span>
        </div>

        <div>
          {renderContent
            ? renderContent({ id, data, fieldValues, handleFieldChange })
            : renderFields()}
        </div>
      </div>
    );
  };
};

/**
 * HandleConfig — shorthand helpers for common handle placements.
 */
export const HandleConfig = {
  sourceRight: (id, top = '50%') => ({
    type: 'source',
    position: Position.Right,
    id,
    style: { top },
  }),

  targetLeft: (id, top = '50%') => ({
    type: 'target',
    position: Position.Left,
    id,
    style: { top },
  }),

  sourceBottom: (id, left = '50%') => ({
    type: 'source',
    position: Position.Bottom,
    id,
    style: { left },
  }),

  targetTop: (id, left = '50%') => ({
    type: 'target',
    position: Position.Top,
    id,
    style: { left },
  }),
};
