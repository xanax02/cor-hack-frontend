import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const TerminalInput = () => {
  //   const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  //   return (
  //     <div className="p-4 h-screen bg-black text-white">
  //       <div className="border border-gray-700 rounded-lg overflow-hidden">
  //         <div className="h-40 bg-black p-2 font-mono text-sm text-green-400">
  //           {output}
  //         </div>
  //         <div className="flex p-2 bg-black">
  //           <span className="text-green-400">$</span>
  //           <TextAreaEditor
  //             value={input}
  //             onChange={handleInputChange}
  //             onKeyPress={handleEnterKeyPress}
  //             className="flex-1 bg-black ml-2 font-mono text-green-400 outline-none resize-none"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <CodeEditor
      //   value={code}
      language="shell"
      placeholder="Please enter commands."
      data-color-mode="dark"
      minHeight={60}
      //   onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 14,
        backgroundColor: "#121212",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
};

export default TerminalInput;
