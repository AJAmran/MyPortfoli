import React, { useState } from 'react';

const Editor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const runCode = () => {
    try {
      const iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      iframe.contentDocument.open();
      iframe.contentDocument.write(code);
      iframe.contentDocument.close();
      setOutput(iframe.contentDocument.body.innerHTML);
      document.body.removeChild(iframe);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
  };

  const handleNew = () => {
    setCode('');
    setOutput('');
  };

  const handleSave = () => {
    // Add your save functionality here
    // For example, you can save the code to a file or send it to a server
    console.log('Code saved:', code);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <div className="flex justify-between p-2">
        <div>
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleNew}
          >
            New
          </button>
          <button
            className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={runCode}
          >
            Run
          </button>
          <button
            className="px-4 py-2 ml-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={clearCode}
          >
            Clear
          </button>
        </div>
      </div>
      <textarea
        className="flex-grow p-2 bg-gray-800 border border-gray-700 rounded-md resize-none text-white"
        value={code}
        onChange={handleCodeChange}
        placeholder="Start coding HTML and JavaScript..."
      />
      {output && (
        <div className="mt-4 p-2 bg-gray-800 border border-gray-700 rounded-md text-white">
          Output:
          <iframe
            title="output"
            className="w-full h-32 mt-2 bg-gray-900"
            srcDoc={output}
          />
        </div>
      )}
    </div>
  );
};

export default Editor;
