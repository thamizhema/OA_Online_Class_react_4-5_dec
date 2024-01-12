import React, { useEffect, useRef } from "react";

export default function MyUseRef() {
  const helpRef = useRef();

  const changeStyleButton = () => {
    helpRef.current.style.color = "red";
  };

  useEffect(() => {}, []);
  return (
    <div>
      <span ref={helpRef} className="help">
        Help
      </span>
      <button onClick={changeStyleButton}>ChangeStyle</button>
    </div>
  );
}
