// alert.js
import React from 'react';

// Alert Component
const Alert = ({ message, onClose }) => {
  return (
    <div style={styles.alert}>
      <span style={styles.alertMessage}>{message}</span>
      <button onClick={onClose} style={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

// Styles for Alert component
const styles = {
  alert: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0', 
    color: '#333', 
    boxShadow: '0 4px 8px rgba(138, 43, 226, 0.3)', 
    width: '250px', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000, 
  },
  alertMessage: {
    flexGrow: 1,
    textAlign: 'center',
    marginRight: '10px', 
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#888', 
  },
};

export default Alert;
