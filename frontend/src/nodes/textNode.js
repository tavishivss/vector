import { useState, useEffect, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

export const TextNode = ({ id, data, selected }) => {
  const { deleteElements } = useReactFlow();
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 240, height: 'auto' });
  const textareaRef = useRef(null);

  useEffect(() => {
    const variablePattern = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
    const matches = [...text.matchAll(variablePattern)];
    const uniqueVars = [...new Set(matches.map((match) => match[1].trim()))];
    setVariables(uniqueVars);
  }, [text]);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const contentHeight = Math.max(52, textarea.scrollHeight);
      const contentWidth = Math.max(240, Math.min(480, textarea.value.length * 7.5 + 48));
      setDimensions({
        width: contentWidth,
        height: contentHeight + 90,
      });
      textarea.style.height = `${contentHeight}px`;
    }
  }, [text]);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteElements({ nodes: [{ id }] });
  };

  const getHandlePosition = (index, total) => {
    if (total === 1) return '50%';
    const spacing = 80 / (total + 1);
    return `${spacing * (index + 1)}%`;
  };

  return (
    <div
      className={`custom-node${selected ? ' selected' : ''}`}
      data-node-type="text"
      style={{
        width: dimensions.width,
        minHeight: dimensions.height,
      }}
    >
      <button
        onClick={handleDelete}
        className="node-delete-button"
        title="Delete node"
      >
        ×
      </button>

      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: getHandlePosition(index, variables.length) }}
        >
          <span
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '0.5625rem',
              color: 'var(--text-secondary)',
              fontWeight: '600',
              background: 'var(--bg-surface)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--glass-border)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {variable}
          </span>
        </Handle>
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />

      <div className="node-header">
        <span className="node-icon">📝</span>
        <span className="node-title">Text</span>
        {variables.length > 0 && (
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '0.5625rem',
              color: 'var(--text-secondary)',
              background: 'var(--bg-tertiary)',
              padding: '2px 7px',
              borderRadius: 'var(--radius-full)',
              fontWeight: '600',
              border: '1px solid var(--glass-border)',
            }}
          >
            {variables.length} var{variables.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div>
        <label className="node-field-label">Content</label>
        <textarea
          ref={textareaRef}
          className="node-field-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter text or use {{variableName}} for dynamic values...'
          style={{
            resize: 'none',
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)',
            lineHeight: '1.6',
            minHeight: '52px',
            fontSize: '0.75rem',
          }}
        />

        {variables.length === 0 && (
          <div
            style={{
              marginTop: '4px',
              fontSize: '0.625rem',
              color: 'var(--text-tertiary)',
            }}
          >
            Use {'{{'}variableName{'}}'} to create input handles
          </div>
        )}

        {variables.length > 0 && (
          <div
            style={{
              marginTop: 'var(--spacing-sm)',
              padding: 'var(--spacing-sm)',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div
              style={{
                fontSize: '0.5625rem',
                fontWeight: '600',
                color: 'var(--text-tertiary)',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Variables
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {variables.map((variable) => (
                <span
                  key={variable}
                  style={{
                    fontSize: '0.625rem',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-tertiary)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--glass-border)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {variable}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
