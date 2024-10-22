// nodes/noteNode.js
import { BaseNode } from '../BaseNode';

export const NoteNode = ({ id, data }) => {
  const fields = [
    { name: 'note', label: 'Note', defaultValue: 'Write your note here' },
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="Note" fields={fields} connections={connections} />;
};
