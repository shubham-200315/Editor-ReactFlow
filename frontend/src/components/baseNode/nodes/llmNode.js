// LLMNode.js
import { BaseNode } from '../BaseNode'

export const LLMNode = ({ id, data }) => {
  const connections = [
    { id: `${id}-system`, type: 'target', position: 'left', style: { top: '33%' } },
    { id: `${id}-prompt`, type: 'target', position: 'left', style: { top: '66%' } },
    { id: `${id}-response`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="LLM" fields={[]} connections={connections} />;
};
