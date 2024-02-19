import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-slate-600 text-white p-2">
      <h2 className="text-6xl text-center mt-8">About</h2>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 36 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default About;
