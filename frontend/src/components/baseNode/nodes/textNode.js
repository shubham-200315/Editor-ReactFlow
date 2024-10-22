import { BaseNode } from '../BaseNode';

export const TextNode = ({ id, data }) => {
  const fields = [
    { name: 'text', label: 'Text', defaultValue: '{{input}}' }, 
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Text" fields={fields} connections={connections} />;
};
