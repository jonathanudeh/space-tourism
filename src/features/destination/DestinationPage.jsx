import { useState } from "react";
import data from "../../data.json";
import { AnimatePresence, motion } from "framer-motion";

function DestinationPage() {
  const destination = data.destinations;
  const [current, setCurrent] = useState(destination[0]);
  console.log(typeof motion);

  return (
    <div className="h-dvh bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
      {/*  */}
      <div className="flex h-full flex-col items-center justify-center gap-1 px-2 py-6 md:flex-row md:px-5">
        {/*  */}
        <div className="flex basis-1/2 flex-col items-center justify-end py-5">
          <p className="mb-2 space-x-2 text-xl font-medium text-blue-100/80 uppercase md:m-6 md:self-start md:text-2xl">
            <span className="font-bold text-blue-100/50">01</span>
            <span>pick your destination</span>
          </p>
          <AnimatePresence mode="wait">
            <motion.img
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-40 w-40 md:h-120 md:w-120"
              src={current.images.png}
              alt={`The image of ${current.name}`}
            />
          </AnimatePresence>
        </div>

        {/*  */}
        <div className="flex basis-1/2 flex-col items-center justify-center px-8 text-center sm:px-30 md:items-start">
          <div className="mb-4 flex gap-4 text-sm text-blue-50">
            {destination.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setCurrent(dest)}
                className={`cursor-pointer border-b-2 py-2 tracking-widest uppercase hover:border-blue-100 ${
                  current.name === dest.name
                    ? " border-blue-50 "
                    : " border-transparent opacity-70"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-white md:text-start"
            >
              <div className="mb-2 text-5xl font-medium uppercase md:mb-8 md:text-7xl">
                {current.name}
              </div>
              <div className="mb-2 min-h-[110px] border-b border-blue-50/40 py-2 pb-4 text-sm text-blue-100/80 md:mb-8 md:min-h-[140px] md:text-lg">
                {current.description}
              </div>
              <div className="flex flex-col items-center justify-around uppercase sm:flex-row md:justify-start md:gap-10">
                <div className="mb-2 md:mb-0">
                  <span className="text-sm font-light text-blue-100/70">
                    AVG. Distance
                  </span>
                  <br />
                  <span className="text-2xl">{current.distance}</span>
                </div>

                <div className="text-sm font-light">
                  <span className="font-light text-blue-100/70">
                    Est. Travel Time
                  </span>
                  <br />
                  <span className="text-2xl">{current.travel}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
