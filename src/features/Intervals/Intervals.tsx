import { useState } from 'react';

export default function Intervals() {
  const [selectedIntervalIdx, setSelectedIntervalIdx] = useState(0);
  const labels = ['work', 'short break', 'long break'];
  const content = ['25:00', '5:00', '15:00'];

  return (
    <>
      <div
        className="flex gap-2 mb-4 text-sm text-center uppercase border-b border-gray-200 sm:gap-4 sm:text-2xl text-slate-200"
        role="tablist"
        aria-label="intervals"
      >
        {labels.map((label, idx) => (
          <button
            key={idx}
            id={`tab-${label}`}
            className={`inline-block sm:tracking-wide p-4 border-b-4 rounded-t-lg uppercase transition-all ${
              idx === selectedIntervalIdx
                ? 'border-inherit font-bold text-white'
                : 'border-transparent'
            }`}
            type="button"
            role="tab"
            aria-controls={`tabpanel-${label}`}
            aria-selected={idx === selectedIntervalIdx}
            tabIndex={idx === selectedIntervalIdx ? -1 : 0}
            onClick={() => setSelectedIntervalIdx(idx)}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={`rounded-full bg-yellow-200 h-2 w-2 ${
                  idx === selectedIntervalIdx ? 'opacity-80' : 'opacity-0'
                }`}
              />
              {label}
            </div>
          </button>
        ))}
      </div>

      <section
        id={`tabpanel-${labels[selectedIntervalIdx]}`}
        role="tabpanel"
        aria-labelledby={`tab-${labels[selectedIntervalIdx]}`}
        className="flex gap-4 text-white place-content-center"
      >
        <h1 className="text-7xl sm:text-9xl">
          <Timer duration={content[selectedIntervalIdx]} />
        </h1>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium tracking-wide text-yellow-200 sm:text-2xl dark:text-yellow-300">
            Up next
          </p>
          <p className="text-4xl font-light text-slate-200 sm:text-6xl">
            <Timer duration={'5:00'} />
          </p>
        </div>
      </section>
    </>
  );
}

function Timer({ duration }: { duration: string }) {
  return <>{duration}</>;
  // 05<span className="text-xl">m</span> 00
  // <span className="text-xl">s</span>
}

// https://react.dev/learn/scaling-up-with-reducer-and-context
