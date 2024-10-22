// BaseNode.js
import { Handle, Position } from "reactflow";
import { useState } from "react";
import { getIconByLabel } from '../../assets/iconProviderNode'
import styles from '../../styles/nodeStyles'

export const BaseNode = ({ id, data, label, fields, connections }) => {
  const [nodeData, setNodeData] = useState(data);
  const [dynamicConnections, setDynamicConnections] = useState(connections);

  const handleInputChange = (field, value) => {
    setNodeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    const regex = /{{\s*([^{}]+)\s*}}/g;
    const matches = value.match(regex);

    if (matches) {
      const newConnections = matches.map((match, index) => ({
        id: `${id}-${match}-${index}`,
        type: "target",
        position: Position.Left,
        style: { top: 50 + index * 20 },
        label: match.replace(/{{|}}/g, "").trim(),
      }));

      setDynamicConnections([...connections, ...newConnections]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.icon}>{getIconByLabel(label)}</span>
        <span style={styles.label}>{label}</span>
      </div>
      <div style={styles.subheading}></div>
      <div style={styles.inputContainer}>
        {fields.map((field, index) => (
          <div key={`${field.name}-${index}`} style={styles.fieldContainer}>
            <label style={styles.fieldLabel}>
              {field.label}:
              {field.name === "text" ? (
                <textarea
                  value={nodeData[field.name] || field.defaultValue}
                  onChange={(e) => {
                    handleInputChange(field.name, e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  style={styles.textarea}
                  rows={1}
                />
              ) : field.type === "select" ? (
                <select
                  value={nodeData[field.name] || field.defaultValue}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  style={styles.select}
                >
                  {field.options && field.options.length > 0 ? (
                    field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))
                  ) : (
                    <option value="">No options available</option>
                  )}
                </select>
              ) : (
                <input
                  type="text"
                  value={nodeData[field.name] || field.defaultValue}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  style={styles.input}
                />
              )}
            </label>
          </div>
        ))}
      </div>
      {[...connections, ...dynamicConnections].map((conn, index) => (
        <Handle
          key={`${conn.id}-${index}`} 
          type={conn.type}
          position={conn.position}
          id={conn.id}
          style={conn.style}
          title={conn.label} 
        />
      ))}
    </div>
  );
};
