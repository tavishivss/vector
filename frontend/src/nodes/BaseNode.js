// BaseNode.js
// Abstraction for creating nodes with minimal boilerplate

import { useState, useEffect } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './nodes.css';

/**
 * BaseNode Component - A flexible abstraction for all node types
 * 
 * @param {Object} config - Node configuration
 * @param {string} config.title - Node title displayed at the top
 * @param {Array} config.handles - Array of handle configurations
 * @param {Array} config.fields - Array of field configurations (optional)
 * @param {Function} config.renderContent - Custom content renderer (optional)
 * @param {Object} config.style - Custom styles for the node container
 * @param {Object} config.defaultValues - Default values for fields
 */
export const createNode = (config) => {
  const {
    title,
    handles = [],
    fields = [],
    renderContent,
    style = {},
    defaultValues = {},
  } = config;

  return ({ id, data, selected }) => {
    const { deleteElements } = useReactFlow();
    
    // Initialize state for all fields
    const [fieldValues, setFieldValues] = useState(() => {
      const initialValues = {};
      fields.forEach(field => {
        const dataKey = field.dataKey || field.name;
        initialValues[field.name] = data?.[dataKey] || field.defaultValue || defaultValues[field.name] || '';
      });
      return initialValues;
    });

    // Generic handler for field changes
    const handleFieldChange = (fieldName, value) => {
      setFieldValues(prev => ({
        ...prev,
        [fieldName]: value
      }));
    };

    // Handle delete button click
    const handleDelete = (e) => {
      e.stopPropagation();
      deleteElements({ nodes: [{ id }] });
    };

    // Default node styles with customization
    const defaultStyle = {
      width: 220,
      minHeight: 100,
      border: '2px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-secondary)',
      padding: 'var(--spacing-md)',
      boxShadow: 'var(--shadow-md)',
      transition: 'all var(--transition-base)',
      color: 'var(--text-primary)',
      ...style
    };

    // Render handles based on configuration
    const renderHandles = () => {
      return handles.map((handle, index) => {
        const {
          type,
          position,
          id: handleId,
          style: handleStyle = {},
          label
        } = handle;

        const fullHandleId = `${id}-${handleId}`;
        
        return (
          <div key={fullHandleId} style={{ position: 'relative' }}>
            <Handle
              type={type}
              position={position}
              id={fullHandleId}
              style={{
                ...handleStyle,
                width: '12px',
                height: '12px',
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            {label && (
              <span style={{
                position: 'absolute',
                fontSize: '0.625rem',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                ...(position === Position.Left ? { left: '14px' } : { right: '14px' }),
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}>
                {label}
              </span>
            )}
          </div>
        );
      });
    };

    // Render fields based on configuration
    const renderFields = () => {
      return fields.map((field, index) => {
        const {
          name,
          label,
          type = 'text',
          options = [],
          placeholder = '',
          style: fieldStyle = {}
        } = field;

        const fieldValue = fieldValues[name];

        const labelStyle = {
          display: 'block',
          marginBottom: 'var(--spacing-sm)',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          ...fieldStyle
        };

        const inputStyle = {
          width: '100%',
          padding: 'var(--spacing-sm)',
          fontSize: '0.75rem',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          marginBottom: 'var(--spacing-sm)',
          transition: 'all var(--transition-fast)',
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--text-primary)',
          outline: 'none'
        };
        
        const inputFocusStyle = {
          borderColor: 'var(--accent-primary)',
          backgroundColor: 'var(--bg-secondary)',
          boxShadow: 'var(--shadow-purple)'
        };

        // Render different field types
        switch (type) {
          case 'select':
            return (
              <label key={name} style={labelStyle}>
                {label}:
                <select
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  style={inputStyle}
                >
                  {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            );

          case 'textarea':
            return (
              <label key={name} style={labelStyle}>
                {label}:
                <textarea
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                  style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                />
              </label>
            );

          case 'number':
            return (
              <label key={name} style={labelStyle}>
                {label}:
                <input
                  type="number"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                  style={inputStyle}
                />
              </label>
            );

          case 'checkbox':
            return (
              <label key={name} style={{ ...labelStyle, display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.checked)}
                  style={{ marginRight: '5px' }}
                />
                {label}
              </label>
            );

          case 'text':
          default:
            return (
              <label key={name} style={labelStyle}>
                {label}:
                <input
                  type="text"
                  value={fieldValue}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  placeholder={placeholder}
                  style={inputStyle}
                />
              </label>
            );
        }
      });
    };

    return (
      <div style={defaultStyle} className="custom-node">
        {renderHandles()}
        
        {/* Delete button - only visible when node is selected */}
        {selected && (
          <button
            onClick={handleDelete}
            className="node-delete-button"
            title="Delete node"
            style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              width: '24px',
              height: '24px',
              background: 'var(--error)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-fast)',
              zIndex: 1000,
              lineHeight: 1,
              padding: 0
            }}
          >
            ×
          </button>
        )}
        
        <div style={{ 
          marginBottom: 'var(--spacing-md)', 
          paddingBottom: 'var(--spacing-sm)',
          borderBottom: '2px solid var(--border-color)'
        }}>
          <span style={{ 
            fontWeight: '700', 
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.025em'
          }}>
            {title}
          </span>
        </div>
        
        <div>
          {renderContent ? renderContent({ id, data, fieldValues, handleFieldChange }) : renderFields()}
        </div>
      </div>
    );
  };
};

/**
 * Helper function to create common handle configurations
 */
export const HandleConfig = {
  // Source handle on the right
  sourceRight: (id, top = '50%') => ({
    type: 'source',
    position: Position.Right,
    id,
    style: { top }
  }),

  // Target handle on the left
  targetLeft: (id, top = '50%') => ({
    type: 'target',
    position: Position.Left,
    id,
    style: { top }
  }),

  // Source handle on the bottom
  sourceBottom: (id, left = '50%') => ({
    type: 'source',
    position: Position.Bottom,
    id,
    style: { left }
  }),

  // Target handle on the top
  targetTop: (id, left = '50%') => ({
    type: 'target',
    position: Position.Top,
    id,
    style: { left }
  }),
};
