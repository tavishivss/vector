export const DraggableNode = ({ type, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.currentTarget.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="draggable-node"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.currentTarget.style.cursor = 'grab')}
      draggable
      title={type}
    >
      <div className="draggable-node-icon">
        {icon}
      </div>
    </div>
  );
};
