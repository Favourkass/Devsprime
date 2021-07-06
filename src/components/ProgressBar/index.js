import ProgressBar from "./style";
import { useState } from "react";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <ProgressBar>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
      <div className="complete">
        {done}% {done !== 100 ? "complete" : "completed"}{" "}
      </div>
    </ProgressBar>
  );
};

export default Progress;
