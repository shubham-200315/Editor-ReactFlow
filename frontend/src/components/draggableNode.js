// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
      const appData = { nodeType };
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
  };

  return (
      <div
          className={type}
          onDragStart={(event) => onDragStart(event, type)}
          onDragEnd={(event) => (event.target.style.cursor = 'grab')}
          style={{ 
              cursor: 'grab', 
              width: '80px', 
              height: '65px',
              display: 'flex', 
              alignItems: 'center', 
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              justifyContent: 'center', 
              flexDirection: 'column',
              border: '1px solid #D0D0D0',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
          }} 
          draggable
      >
          <span style={{ fontSize: '24px', color: '#B0B0B0' }}>{icon}</span>
          <span style={{ marginTop: '8px', color: '#4B4B4B', fontWeight: 'bold' }}>{label}</span>
      </div>
  );
};
