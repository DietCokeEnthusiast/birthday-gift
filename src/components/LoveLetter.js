import React, { useState } from "react";
import "./LoveLetter.css";

function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="envelope-container" onClick={() => setOpen(!open)}>
      <div className={`envelope ${open ? "open" : ""}`}>
        <div className="flap" />
        <div className="seal">💌 Click to open</div>
        <div className="letter">
          <p>
            Dear Kaitlyn,  
            <br /><br />
            I wanted to give you something a little different for your birthday.  
            A site made just for you — because you're one of a kind.  
            Thank you for being the most beautiful part of my life. 💖  
            <br /><br />
            Love,  
            <br />Nathan
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;
