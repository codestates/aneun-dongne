import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [isContent, setContnet] = useState("연결됐니?");

  const isToggle = () => {
    axios
      .get("http://tenten-deploy.s3-website.ap-northeast-2.amazonaws.com/hello")
      .then((res) => {
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
