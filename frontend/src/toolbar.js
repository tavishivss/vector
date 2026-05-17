import { DraggableNode } from './draggableNode';
import './toolbar.css';

const IconSvg = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const IconInput = () => (
  <IconSvg>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </IconSvg>
);

const IconOutput = () => (
  <IconSvg>
    <path d="M12 15V3" />
    <path d="m7 8 5-5 5 5" />
    <path d="M5 21h14" />
  </IconSvg>
);

const IconLLM = () => (
  <IconSvg>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z" />
  </IconSvg>
);

const IconText = () => (
  <IconSvg>
    <path d="M8 4h8" />
    <path d="M9 2h6v4H9z" />
    <path d="M16 4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M8 11h8" />
    <path d="M12 11v6" />
  </IconSvg>
);

const IconFilter = () => (
  <IconSvg>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" />
  </IconSvg>
);

const IconTransform = () => (
  <IconSvg>
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06L2.37 12.48a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0l1.58 6.13a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0L9.94 15.5Z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </IconSvg>
);

const IconConditional = () => (
  <IconSvg>
    <path d="M6 3v12" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </IconSvg>
);

const IconAggregator = () => (
  <IconSvg>
    <path d="M19 5 5 19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </IconSvg>
);

const IconDelay = () => (
  <IconSvg>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </IconSvg>
);

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <div className="toolbar-header">
        <h2 className="toolbar-title">Nodes</h2>
      </div>

      <div className="nodes-grid">
        <DraggableNode type='customInput' icon={<IconInput />} description='Input' />
        <DraggableNode type='customOutput' icon={<IconOutput />} description='Output' />
        <DraggableNode type='llm' icon={<IconLLM />} description='LLM' />
        <DraggableNode type='text' icon={<IconText />} description='Text' />
        <DraggableNode type='filter' icon={<IconFilter />} description='Filter' />
        <DraggableNode type='transform' icon={<IconTransform />} description='Transform' />
        <DraggableNode type='conditional' icon={<IconConditional />} description='Branch' />
        <DraggableNode type='aggregator' icon={<IconAggregator />} description='Merge' />
        <DraggableNode type='delay' icon={<IconDelay />} description='Delay' />
      </div>
    </div>
  );
};
