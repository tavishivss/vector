// toolbar.js

import { DraggableNode } from './draggableNode';
import './toolbar.css';

export const PipelineToolbar = () => {
    return (
        <div className="pipeline-toolbar">
            <div className="toolbar-header">
                <h2 className="toolbar-title">
                    🎨 Nodes
                </h2>
            </div>
            
            <div className="nodes-grid">
                <DraggableNode type='customInput' icon='📥' />
                <DraggableNode type='customOutput' icon='📤' />
                <DraggableNode type='llm' icon='🤖' />
                <DraggableNode type='text' icon='📝' />
                <DraggableNode type='filter' icon='🔍' />
                <DraggableNode type='transform' icon='✨' />
                <DraggableNode type='conditional' icon='🔀' />
                <DraggableNode type='aggregator' icon='📊' />
                <DraggableNode type='delay' icon='⏱️' />
            </div>
        </div>
    );
};
