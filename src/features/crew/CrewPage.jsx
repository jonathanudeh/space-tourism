import { useState } from "react";
import data from "../../data.json";

function CrewPage() {
  const crew = data.crew;
  const [current, setCurrent] = useState(crew[0]);
  // console.log(current);

  return (
    <div className="h-dvh bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      <div className="flex h-full flex-col p-6 md:flex-row">
        <div className="flex h-1/2 flex-col items-center justify-around px-6 py-4 text-white md:h-full md:items-start">
          <p className="space-x-2 text-xl font-medium text-blue-100/80 uppercase md:m-6 md:self-start md:text-2xl">
            <span className="font-bold text-blue-100/50">02</span>
            <span>Meet your crew</span>
          </p>

          <div>
            <p className="text-xl font-semibold text-blue-100/80 uppercase">
              {current.role}
            </p>
            <h1 className="text-2xl font-bold uppercase">{current.name}</h1>
            <p className="max-w-sm md:max-w-lg lg:max-w-2xl">{current.bio}</p>
          </div>

          <ul className="flex gap-4">
            {crew.map((member) => (
              <li
                key={member.role}
                onClick={() => setCurrent(member)}
                className="h-3 w-3 cursor-pointer rounded-full bg-amber-300"
              ></li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="flex h-1/2 basis-1/2 flex-col items-center justify-center md:h-full">
          <img
            className="mask-gradient h-40 w-40 md:h-120 md:w-120"
            src={current.images.webp}
            alt={`The image of ${current.name}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
