// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { SubmitButton } from './submit';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { FilterNode } from './nodes/filterNode';
import { TransformNode } from './nodes/transformNode';
import { ConditionalNode } from './nodes/conditionalNode';
import { AggregatorNode } from './nodes/aggregatorNode';
import { DelayNode } from './nodes/delayNode';

import 'reactflow/dist/style.css';
import './ui.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  filter: FilterNode,
  transform: TransformNode,
  conditional: ConditionalNode,
  aggregator: AggregatorNode,
  delay: DelayNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    // Handle node deletion with Delete/Backspace key
    const onNodesDelete = useCallback(
        (deleted) => {
            console.log('Nodes deleted:', deleted);
        },
        []
    );

    const onEdgesDelete = useCallback(
        (deleted) => {
            console.log('Edges deleted:', deleted);
        },
        []
    );

    return (
        <div className="pipeline-ui-container">
            <div className="pipeline-canvas-wrapper">
                <div className="pipeline-canvas-header">
                    <div className="canvas-header-left">
                        <div className="canvas-title">
                            <span className="canvas-title-icon">🎯</span>
                            Pipeline Canvas
                        </div>
                        <div className="canvas-stats">
                            <div className="canvas-stat">
                                <span>Nodes:</span>
                                <span className="canvas-stat-value">{nodes.length}</span>
                            </div>
                            <div className="canvas-stat">
                                <span>Connections:</span>
                                <span className="canvas-stat-value">{edges.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="canvas-header-right">
                        <SubmitButton />
                    </div>
                </div>
                
                <div ref={reactFlowWrapper} className="react-flow-wrapper">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onInit={setReactFlowInstance}
                        onNodesDelete={onNodesDelete}
                        onEdgesDelete={onEdgesDelete}
                        nodeTypes={nodeTypes}
                        proOptions={proOptions}
                        snapGrid={[gridSize, gridSize]}
                        connectionLineType='smoothstep'
                        deleteKeyCode="Delete"
                    >
                        <Background color="#ddd" gap={gridSize} />
                        <Controls />
                        <MiniMap 
                            nodeColor={(node) => {
                                const colors = {
                                    customInput: '#10b981',
                                    customOutput: '#f59e0b',
                                    llm: '#8b5cf6',
                                    text: '#06b6d4',
                                    filter: '#3b82f6',
                                    transform: '#eab308',
                                    conditional: '#ef4444',
                                    aggregator: '#22c55e',
                                    delay: '#a855f7'
                                };
                                return colors[node.type] || '#6b7280';
                            }}
                        />
                    </ReactFlow>
                    
                    {nodes.length === 0 && (
                        <div className="pipeline-empty-state">
                            <div className="empty-state-icon">🎨</div>
                            <div className="empty-state-text">Start building your pipeline</div>
                            <div className="empty-state-hint">Drag nodes from the left palette</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
