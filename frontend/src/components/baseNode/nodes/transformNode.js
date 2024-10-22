
// nodes/transformNode.js
import { BaseNode } from '../BaseNode';

export const TransformNode = ({ id, data }) => {
  const fields = [
    { name: 'transform', label: 'Transform', defaultValue: '{{data}}' },
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Transform" fields={fields} connections={connections} />;
};