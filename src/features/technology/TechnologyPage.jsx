import { useState } from "react";
import data from "../../data.json";

function TechnologyPage() {
  const technology = data.technology;
  const [current, setCurrent] = useState(technology[0]);

  return (
    <div className="h-dvh bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] md:bg-[url('/assets/technology/background-technology-desktop.jpg')]">
      {/* container */}
      {/* launch 101 and the rest */}

      <div className="flex h-full flex-col items-center justify-center px-6 md:px-20">
        <h1 className="space-x-2 text-xl font-medium text-blue-100/80 uppercase md:self-start md:text-2xl">
          <span className="font-bold text-blue-100/50">03</span>
          <span>space launch 101</span>
        </h1>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row-reverse">
          <div className="">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={current.images.portrait}
              />

              <img
                src={current.images.landscape}
                alt={current.name}
                className="h-50 w-full object-cover sm:h-auto"
              />
            </picture>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:w-1/2 md:flex-row">
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
            <div className="flex flex-col items-center justify-between space-y-5 text-center text-blue-100/80 md:items-start md:text-start">
              <p className="text-2xl font-bold uppercase">
                The Terminlogies...
              </p>
              <h1 className="text-3xl font-bold text-blue-50 uppercase md:text-5xl">
                {current.name}
              </h1>
              <p className="text-md max-w-sm md:max-w-md md:text-lg lg:max-w-lg">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
