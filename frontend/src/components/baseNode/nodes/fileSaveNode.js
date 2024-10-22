// nodes/fileSaveNode.js
import { BaseNode } from '../BaseNode';

export const FileSaveNode = ({ id, data }) => {
  const fields = [
    { name: 'fileSave', label: 'File Save', defaultValue: 'Save file here' },
  ];

  const connections = [
    { id: `${id}-output`, type: 'source', position: 'right' },
  ];

  return <BaseNode id={id} data={data} label="File Save" fields={fields} connections={connections} />;
};