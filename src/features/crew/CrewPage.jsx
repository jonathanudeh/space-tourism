import { useState } from "react";
import data from "../../data.json";

function CrewPage() {
  const crew = data.crew;
  const [current, setCurrent] = useState(crew[0]);

  return (
    <div className="h-dvh bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
      {/*  */}

      {/*  */}
      <div className="flex h-full flex-col p-6 md:flex-row">
        <div className="flex h-1/2 flex-col items-center justify-center space-y-6 px-6 py-4 text-white md:h-full md:items-start">
          <p className="space-x-2 text-xl font-medium text-blue-100/80 uppercase md:self-start md:text-2xl">
            <span className="font-bold text-blue-100/50">02</span>
            <span>Meet your crew</span>
          </p>

          <div className="space-y-5 text-center md:text-start">
            <p className="text-xl font-semibold text-blue-100/70 uppercase">
              {current.role}
            </p>
            <h1 className="text-3xl font-bold text-blue-50 uppercase md:text-5xl">
              {current.name}
            </h1>
            <p className="max-w-sm text-blue-100/80 md:max-w-md md:pr-3 lg:max-w-lg">
              {current.bio}
            </p>
          </div>

          <ul className="flex gap-4">
            {crew.map((member) => (
              <li
                key={member.role}
                onClick={() => setCurrent(member)}
                className={`h-3 w-3 cursor-pointer rounded-full bg-blue-100/30 hover:bg-blue-50 ${current.role === member.role ? "bg-white" : ""}`}
              ></li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="flex h-1/2 basis-1/2 flex-col items-center justify-end md:h-full md:items-end">
          <img
            className="mask-gradient h-60 w-60 md:h-120 md:w-120"
            src={current.images.webp}
            alt={`The image of the ${current.role}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
