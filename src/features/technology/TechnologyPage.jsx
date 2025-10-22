import { useState } from "react";
import data from "../../data.json";
import { motion, AnimatePresence } from "framer-motion";

function TechnologyPage() {
  const technology = data.technology;
  const [current, setCurrent] = useState(technology[0]);
  console.log(typeof motion);

  return (
    <div className="h-dvh bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] md:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      {/* launch 101 and the rest */}

      <div className="flex h-full flex-col items-center justify-center px-6 pt-15 pb-4 md:px-20">
        <h1 className="mb-4 space-x-2 text-2xl font-medium text-blue-100/80 uppercase md:mb-0 md:self-start md:text-3xl">
          <span className="font-bold text-blue-100/50">03</span>
          <span>space launch 101</span>
        </h1>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row-reverse">
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.picture
                key={current.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <source
                  media="(min-width: 768px)"
                  srcSet={current.images.portrait}
                />

                <img
                  src={current.images.landscape}
                  alt={current.name}
                  className="aspect-video h-50 w-full sm:h-auto md:aspect-auto md:object-cover"
                />
              </motion.picture>
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 md:w-1/2 md:flex-row md:gap-10">
            {/* numbers and data */}
            <ul className="flex items-center justify-center gap-4 md:flex-col">
              {technology.map((item, i) => (
                <li
                  key={item.name}
                  onClick={() => setCurrent(item)}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-blue-50 text-base font-bold text-blue-50 transition-all duration-300 hover:bg-blue-50 hover:text-blue-950 md:h-20 md:w-20 md:text-2xl ${current.name === item.name ? "bg-blue-50 text-blue-950" : "border-blue-50 "}`}
                >
                  {i + 1}
                </li>
              ))}
            </ul>

            {/*  */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex min-h-[250px] flex-col items-center justify-between space-y-5 text-center text-blue-100/80 md:items-start md:text-start"
                >
                  <p className="text-2xl font-bold uppercase">
                    The Terminologies...
                  </p>
                  <h1 className="text-3xl font-bold text-blue-50 uppercase md:text-5xl">
                    {current.name}
                  </h1>
                  <p className="max-w-sm text-base md:max-w-md md:text-lg lg:max-w-lg">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
