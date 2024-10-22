// nodes/pipelineNode.js
import { BaseNode } from '../BaseNode';

export const PipelineNode = ({ id, data }) => {
  const fields = [
    { name: 'pipeline', label: 'Pipeline', defaultValue: '{{input}}' },
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Pipeline" fields={fields} connections={connections} />;
};