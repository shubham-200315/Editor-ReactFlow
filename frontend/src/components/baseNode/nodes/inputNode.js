// InputNode.js
import { BaseNode } from '../BaseNode'

export const InputNode = ({ id, data }) => {
  const fields = [
    { name: 'inputName', label: 'Name', defaultValue: id.replace('customInput-', 'input_') },
    { name: 'inputType', label: 'Type', type: 'select', defaultValue: 'Text', options: ['Text', 'File'] },
  ];

  const connections = [
    { id: `${id}-value`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Input" fields={fields} connections={connections} />;
};
