/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Home() {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const phrases = [
    "I am a software engineer.",
    "I build web applications.",
    "I love learning new technologies.",
  ];

  React.useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopNum % phrases.length];

    const handleTyping = () => {
      setText((current) => {
        const fullText = currentPhrase;

        if (!isDeleting) {
          // Typing
          setTypingSpeed(150);
          const newText = fullText.substring(0, current.length + 1);
          if (newText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(1000); // Pause at end
          }
          return newText;
        } else {
          // Deleting
          setTypingSpeed(50);
          const newText = fullText.substring(0, current.length - 1);
          if (newText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
          return newText;
        }
      });
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <main className="mt-20 min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-normal">Hi, My name is Abhishek.</h1>
        <span className="text-gray-200 mt-4 block">
          I am a 21yo software engineer based in India.
          <br />
          <span className="inline-block min-h-[1.5em]">
            {text}
            <span className="animate-blink">|</span>
          </span>
        </span>
      </div>
    </main>
  );
}
