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

const gridSize = 24;
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
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: `${type}` };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData('application/reactflow')) {
        const appData = JSON.parse(
          event.dataTransfer.getData('application/reactflow')
        );
        const type = appData?.nodeType;

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
    [addNode, getNodeID, reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="pipeline-ui-container">
      <div className="pipeline-canvas-wrapper">
        <div className="pipeline-canvas-header">
          <div className="canvas-header-left">
            <span className="canvas-title">Pipeline Canvas</span>
          </div>
          <div className="canvas-header-center">
            <SubmitButton />
          </div>
          <div className="canvas-header-right">
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
            nodeTypes={nodeTypes}
            proOptions={proOptions}
            snapGrid={[gridSize, gridSize]}
            snapToGrid
            connectionLineType="smoothstep"
            deleteKeyCode={['Delete', 'Backspace']}
          >
            <Background
              variant="dots"
              gap={gridSize}
              size={1}
            />
            <Controls />
            <MiniMap
              nodeColor={() => '#ffffff'}
              maskColor="rgba(255, 255, 255, 0.04)"
              style={{ width: 210, height: 138, borderRadius: 10 }}
            />
          </ReactFlow>

          {nodes.length === 0 && (
            <div className="pipeline-empty-state">
              <div className="empty-state-glow">⚡</div>
              <div className="empty-state-text">
                Build your pipeline
              </div>
              <div className="empty-state-hint">
                Drag nodes from the sidebar onto the canvas
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
