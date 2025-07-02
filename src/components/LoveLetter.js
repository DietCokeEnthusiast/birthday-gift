import React, { useState, useEffect, useRef } from "react";
import "./LoveLetter.css";
import { Typewriter } from "react-simple-typewriter";

const letterText = `Dear Kaitlyn,

I wanted to give you something a little different for your birthday.
A site made just for you, because you're one of a kind.

You are my everything and I love you more every day.

Thank you for being the most beautiful part of my life.
I
Love
You
💖

-Nathan
`;

export default function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    let index = 0;
    let currentText = "";

    const typeNext = () => {
      if (index < letterText.length) {
        currentText += letterText[index];
        setTypedText(currentText);
        index++;

        setTimeout(typeNext, 25);
      }
    };

    typeNext();
  }, [open]);

  // 🔁 Scroll to bottom when typedText changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [typedText]);

  return (
    <div className="envelope-wrapper">
      <div className={`envelope ${open ? "open" : ""}`} onClick={() => setOpen(true)}>
        <div className="flap" />
        {!open && <div className="seal">💌 Tap to open</div>}
        <div className="letter">
          <div className="letter-content">
            {typedText}
            <span ref={scrollRef} />
          </div>
        </div>
      </div>
    </div>
  );
}