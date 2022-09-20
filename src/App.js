import React, { createRef } from "react";

import Deployment from "./components/Deployment";

function App() {
  const formRef = createRef();
  const nameInputRef = createRef();
  const descInputRef = createRef();
  const DEPLOYMENT = {
    header: {
      title: "creaon deploy smart contract on polygon! 😀",
    },
    btnName: "Deploy",
    formRef: formRef,
    inputItems: [
      { name: "name", inputRef: nameInputRef },
      { name: "description", inputRef: descInputRef },
    ],
  };

  function onSubmit(event) {
    event.preventDefault();
    formRef.current.reset();
  }

  return (
    <div>
      <Deployment deployment={DEPLOYMENT} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
