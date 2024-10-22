// App.js
import { useState } from 'react';
import { PipelineToolbar } from './components/toolbar';
import { PipelineUI } from './components/ui';
import { SubmitButton } from './components/submit';

function App() {
  const [pipeline, setPipeline] = useState({ nodes: [], edges: [] });

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI setPipeline={setPipeline} />
      <SubmitButton pipeline={pipeline} />
    </div>
  );
}

export default App;
