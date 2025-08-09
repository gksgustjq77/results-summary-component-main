import React from "react";

interface ResultProps {
  score: number;
}

const Result: React.FC<ResultProps> = ({ score }) => {
  return (
    <div className="flex h-full flex-col gap-0 rounded-b-3xl bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] p-6 text-center font-semibold text-[hsl(0,0%,100%)] md:rounded-2xl lg:gap-6">
      <h2 className="text-lg font-semibold">Your Result</h2>

      <div className="mx-auto my-6 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)]">
        <span className="text-6xl font-extrabold">{score}</span>
        <span className="text-sm text-[hsl(241,100%,89%)]">of 100</span>
      </div>

      <h3 className="text-xl font-extrabold">Great</h3>

      <p className="mt-2 text-sm text-[hsl(241,100%,89%)]">
        Your performance is higher than 65% of the people who have taken these
        tests.
      </p>
    </div>
  );
};

export default Result;
