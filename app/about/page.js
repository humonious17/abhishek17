/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function About() {
  return (
    <main className="mt-20 min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-normal">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8 gap-8">
          <img src="/profile.jpg" alt="Profile" className="w-full md:w-60 h-auto md:h-80 mt-4" />
          <div>
            <p className="text-gray-200 mt-4 text-justify">
              My journey started with curiosity and a terminal window, and
              turned into a full-blown passion for creating things on the web.
              Over the past few years, I've been learning by doing — building
              real-world projects, experimenting with new stacks, and turning
              ideas into deployable, scalable apps.
            </p>
            <p className="text-gray-200 mt-4 text-justify">
              I have experience in various programming languages and frameworks,
              including JavaScript, React, Node.js, and Python. I enjoy working
              on both the front-end and back-end of web applications. I am
              always looking for new challenges and opportunities to grow as a  
              developer. I believe that continuous learning is essential in the
              tech industry, and I strive to stay up-to-date with the latest
              trends and best practices.
            </p>
            <p className="text-gray-200 mt-4 text-justify">
              {" "}
              When I'm not coding, you can find me exploring the latest
              technology trends or listing to Vance Joy.
            </p>
            <p className="text-gray-200 mt-4 text-justify">
              I'm also a proud user of language models and a big believer in
              vibe coding — headphones on, tabs stacked, and in the zone.
            </p>
            <p className="text-gray-200 mt-4 text-justify">
              I'm excited to share my journey with you and hope to inspire
              others to pursue their passions in technology.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
