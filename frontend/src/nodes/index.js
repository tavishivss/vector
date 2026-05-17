// index.js
// Central export point for all nodes

// Original nodes (refactored)
export { InputNode } from './inputNode';
export { OutputNode } from './outputNode';
export { LLMNode } from './llmNode';
export { TextNode } from './textNode';

// New nodes (demonstrating abstraction)
export { FilterNode } from './filterNode';
export { TransformNode } from './transformNode';
export { ConditionalNode } from './conditionalNode';
export { AggregatorNode } from './aggregatorNode';
export { DelayNode } from './delayNode';

// Base abstraction exports
export { createNode, HandleConfig } from './BaseNode';
