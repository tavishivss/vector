// textNode.js
// Advanced Text Node with dynamic sizing and variable detection

import { useState, useEffect, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';

export const TextNode = ({ id, data, selected }) => {
  const { deleteElements } = useReactFlow();
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 220, height: 'auto' });
  const textareaRef = useRef(null);

  // Extract variables from text (e.g., {{variableName}})
  useEffect(() => {
    // Regular expression to match {{variableName}}
    const variablePattern = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
    const matches = [...text.matchAll(variablePattern)];
    
    // Extract unique variable names
    const uniqueVars = [...new Set(matches.map(match => match[1].trim()))];
    setVariables(uniqueVars);
  }, [text]);

  // Update node dimensions based on content
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      
      // Reset height to get accurate scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate new dimensions
      const contentHeight = Math.max(60, textarea.scrollHeight);
      const contentWidth = Math.max(220, Math.min(500, textarea.value.length * 8 + 40));
      
      setDimensions({
        width: contentWidth,
        height: contentHeight + 80 // Add space for header and padding
      });
      
      // Set the textarea height
      textarea.style.height = `${contentHeight}px`;
    }
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle delete button click
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteElements({ nodes: [{ id }] });
  };

  // Calculate handle positions for variables
  const getHandlePosition = (index, total) => {
    if (total === 1) return '50%';
    const spacing = 80 / (total + 1);
    return `${spacing * (index + 1)}%`;
  };

  return (
    <div
      style={{
        width: dimensions.width,
        minHeight: dimensions.height,
        border: '2px solid #06b6d4',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-secondary)',
        padding: 'var(--spacing-md)',
        boxShadow: 'var(--shadow-md)',
        transition: 'all var(--transition-base)',
        position: 'relative'
      }}
      className="custom-node"
    >
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

      {/* Variable Handles (Left side - inputs) */}
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: getHandlePosition(index, variables.length),
            width: '12px',
            height: '12px',
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            background: '#06b6d4'
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '0.625rem',
              color: 'var(--text-primary)',
              fontWeight: '600',
              background: 'var(--bg-elevated)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {variable}
          </span>
        </Handle>
      ))}

      {/* Output Handle (Right side) */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: '50%',
          width: '12px',
          height: '12px',
          border: '2px solid white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          background: '#06b6d4'
        }}
      />

      {/* Header */}
      <div
        style={{
          marginBottom: 'var(--spacing-md)',
          paddingBottom: 'var(--spacing-sm)',
          borderBottom: '2px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span
          style={{
            fontWeight: '700',
            fontSize: '0.875rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.025em'
          }}
        >
          📝 Text
        </span>
        {variables.length > 0 && (
          <span
            style={{
              fontSize: '0.625rem',
              color: 'white',
              background: 'var(--accent-primary)',
              padding: '2px 6px',
              borderRadius: 'var(--radius-full)',
              fontWeight: '600',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {variables.length} {variables.length === 1 ? 'variable' : 'variables'}
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-sm)',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}
        >
          Content:
        </label>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text or use {{variableName}} for dynamic values..."
          style={{
            width: '100%',
            padding: 'var(--spacing-sm)',
            fontSize: '0.75rem',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            outline: 'none',
            resize: 'none',
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)',
            lineHeight: '1.5',
            transition: 'all var(--transition-fast)',
            minHeight: '60px'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--accent-primary)';
            e.target.style.backgroundColor = 'var(--bg-secondary)';
            e.target.style.boxShadow = 'var(--shadow-purple)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--border-color)';
            e.target.style.backgroundColor = 'var(--bg-tertiary)';
            e.target.style.boxShadow = 'none';
          }}
        />
        
        {/* Helper text */}
        {variables.length === 0 && (
          <div
            style={{
              marginTop: 'var(--spacing-sm)',
              fontSize: '0.625rem',
              color: 'var(--text-secondary)',
              fontStyle: 'italic'
            }}
          >
            Tip: Use {'{{'} variableName {'}}'}  to create input handles
          </div>
        )}
        
        {/* Variable preview */}
        {variables.length > 0 && (
          <div
            style={{
              marginTop: 'var(--spacing-sm)',
              padding: 'var(--spacing-sm)',
              background: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div
              style={{
                fontSize: '0.625rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-xs)'
              }}
            >
              Detected Variables:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)' }}>
              {variables.map((variable) => (
                <span
                  key={variable}
                  style={{
                    fontSize: '0.625rem',
                    color: 'white',
                    background: 'var(--accent-primary)',
                    padding: '2px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--accent-secondary)',
                    fontFamily: 'var(--font-mono)'
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
