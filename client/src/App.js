import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [isContent, setContnet] = useState("연결됐니?");

  const isToggle = () => {
    axios.get("http://localhost:80/hello").then((res) => {
      // console.log(res.data.data);
      setContnet(res.data.data);
    });
  };
  return (
    <div>
      <button onClick={isToggle}>{isContent}</button>
    </div>
  );
};

export default App;
