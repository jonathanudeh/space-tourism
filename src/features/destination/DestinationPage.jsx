import { useState } from "react";
import data from "../../data.json";

function DestinationPage() {
  const destination = data.destinations;
  const [current, setCurrent] = useState(destination[0]);

  return (
    <div className="h-dvh bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-4 flex gap-4 text-blue-50">
          {destination.map((dest) => (
            <button
              key={dest.name}
              onClick={() => setCurrent(dest)}
              className={`tracking-widest uppercase ${
                current.name === dest.name
                  ? "border-b-2 border-white py-2"
                  : "opacity-70"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <div className="text-white">
          <div className="text-6xl">{current.name}</div>
          <div className="divide divide-y-4 divide-amber-300">
            {current.description}
          </div>
          <div>
            <div>
              <span>AVG. Distance</span>
              <span>{current.distance}</span>
            </div>
            <div>
              <span>Est. Travel Time</span>
              <span>{current.travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
