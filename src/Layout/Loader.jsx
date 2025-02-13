import React, { useEffect, useState } from "react";
import "../Styles/Loader.css";

const Loader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish(); 
    }, 2500); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null; 

  return (
    <div className="loading-message">
      <div className="word">
        <span className="letter">G</span>
        <span className="letter">A</span>
        <span className="letter">M</span>
        <span className="letter">E</span>
      </div>
      <div className="word">
        <span className="letter">O</span>
        <span className="letter">N</span>
      </div>
      {/* <div className="word">
        <span className="letter">9</span>
        <span className="letter">.</span>
        <span className="letter">0</span>
      </div> */}
    </div>
  );
};

export default Loader;
