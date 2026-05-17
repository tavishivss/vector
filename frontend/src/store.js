import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';

const initialNodes = [
  {
    id: 'transform-1',
    type: 'transform',
    position: { x: 120, y: 300 },
    data: { id: 'transform-1', nodeType: 'transform' },
  },
  {
    id: 'llm-1',
    type: 'llm',
    position: { x: 384, y: 132 },
    data: { id: 'llm-1', nodeType: 'llm' },
  },
  {
    id: 'filter-1',
    type: 'filter',
    position: { x: 684, y: 276 },
    data: { id: 'filter-1', nodeType: 'filter' },
    selected: true,
  },
];

const initialEdges = [
  {
    id: 'transform-1-output-llm-1-input',
    source: 'transform-1',
    target: 'llm-1',
    sourceHandle: 'transform-1-output',
    targetHandle: 'llm-1-input',
    type: 'smoothstep',
    animated: true,
  },
  {
    id: 'llm-1-response-filter-1-input',
    source: 'llm-1',
    target: 'filter-1',
    sourceHandle: 'llm-1-response',
    targetHandle: 'filter-1-input',
    type: 'smoothstep',
    animated: true,
  },
];

export const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  nodeIDs: {
    transform: 1,
    llm: 1,
    filter: 1,
  },
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: 'smoothstep',
          animated: true,
        },
        get().edges
      ),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }
        return node;
      }),
    });
  },
}));
