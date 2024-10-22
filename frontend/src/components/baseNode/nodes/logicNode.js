// nodes/logicNode.js
import { BaseNode } from '../BaseNode';

export const LogicNode = ({ id, data }) => {
  const fields = [
    { name: 'logic', label: 'Logic', defaultValue: '{{condition}}' },
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Logic" fields={fields} connections={connections} />;
};