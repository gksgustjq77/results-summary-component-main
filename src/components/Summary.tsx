import React from "react";

interface SummaryItem {
  category: string;
  score: number;
  icon: string;
  bgColor: string;
  textColor: string;
}

interface SummaryProps {
  data: SummaryItem[];
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <div className="p-6">
      <h2 className="mb-4 text-left text-lg font-bold text-black">Summary</h2>
      <ul className="flex flex-col gap-4 space-y-3">
        {data.map((item) => (
          <li
            key={item.category}
            style={{ backgroundColor: item.bgColor }}
            className={`flex items-center justify-between rounded-lg p-4`}
          >
            <div className="flex items-center gap-2">
              <img src={item.icon} alt={item.category} className="h-5 w-5" />
              <span className="font-medium" style={{ color: item.textColor }}>
                {item.category}
              </span>
            </div>
            <span className="flex gap-2 font-bold text-black">
              {item.score}
              <span>/</span> <span className="text-gray-500">100</span>
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-full bg-[hsl(224,30%,27%)] py-3 text-white hover:bg-indigo-700">
        Continue
      </button>
    </div>
  );
};

export default Summary;
