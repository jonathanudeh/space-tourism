import { useState } from "react";
import data from "../../data.json";
import { AnimatePresence, motion } from "framer-motion";

function CrewPage() {
  const crew = data.crew;
  const [current, setCurrent] = useState(crew[0]);

  return (
    <div className="h-dvh bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      {/*  */}

      {/*  */}
      <div className="flex h-full flex-col items-center justify-end gap-5 px-6 py-3 md:flex-row md:justify-around md:gap-8">
        {/*  */}
        <div className="flex flex-col items-center justify-center gap-2 px-6 text-white md:h-full md:items-start md:justify-between md:py-20">
          <p className="space-x-2 text-xl font-medium text-blue-100/80 uppercase md:self-start md:text-2xl">
            <span className="font-bold text-blue-100/50">02</span>
            <span>Meet your crew</span>
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex min-h-[280px] flex-col items-center justify-center py-4 text-center md:items-start md:text-start"
            >
              <p className="text-xl font-semibold text-blue-100/70 uppercase md:mb-3">
                {current.role}
              </p>
              <h1 className="mb-6 text-3xl font-bold text-blue-50 uppercase md:text-5xl">
                {current.name}
              </h1>
              <p className="max-w-sm text-base text-blue-100/80 md:max-w-md md:pr-3 md:text-xl lg:max-w-lg">
                {current.bio}
              </p>
            </motion.div>
          </AnimatePresence>

          <ul className="flex gap-4">
            {crew.map((member) => (
              <li
                key={member.role}
                onClick={() => setCurrent(member)}
                className={`h-4 w-4 cursor-pointer rounded-full hover:bg-blue-50 md:h-6 md:w-6 ${current.role === member.role ? "bg-white" : "bg-blue-100/30"}`}
              ></li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="flex flex-col items-center justify-end md:h-full md:items-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mask-gradient h-60 w-60 md:h-120 md:w-120"
              src={current.images.webp}
              alt={`The image of the ${current.role}`}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
