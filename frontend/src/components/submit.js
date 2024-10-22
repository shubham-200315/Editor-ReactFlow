// submit.js
import axios from 'axios';
import React from 'react';
import Alert from './alert'; 

export const SubmitButton = ({ pipeline }) => {
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/pipelines/parse', pipeline, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAlertMessage(`Nodes: ${response.data.num_nodes}, Edges: ${response.data.num_edges}, DAG: ${response.data.is_dag}`);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      setAlertMessage('Error submitting pipeline. Please try again.');
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage('');
  };

  return (
    <div style={styles.container}>
      {alertMessage && <Alert message={alertMessage} onClose={handleCloseAlert} />}
      <button type="button" onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
    </div>
  );
};

// Styles for SubmitButton component
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0', 
    color: '#333',
    fontSize: '15px', 
    fontWeight: 'bold', 
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(138, 43, 226, 0.3)', 
    transition: 'background-color 0.3s, transform 0.3s',
  },

  buttonHover: {
    backgroundColor: '#e0e0e0', 
    transform: 'translateY(-2px)', 
  },
};

styles.button[':hover'] = styles.buttonHover;
