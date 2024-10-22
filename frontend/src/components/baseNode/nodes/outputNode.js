// OutputNode.js
import { BaseNode } from '../BaseNode'

export const OutputNode = ({ id, data }) => {
  const fields = [
    { name: 'outputName', label: 'Name', defaultValue: id.replace('customOutput-', 'output_') },
    { name: 'outputType', label: 'Type', type: 'select', defaultValue: 'Text', options: ['Text', 'Image'] },
  ];

  const connections = [
    { id: `${id}-value`, type: 'target', position: 'left' },
  ];

  return <BaseNode id={id} data={data} label="Output" fields={fields} connections={connections} />;
};
