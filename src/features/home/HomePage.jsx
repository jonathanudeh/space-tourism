import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat py-3 pl-5 sm:bg-[url('/assets/home/background-home-tablet.jpg')] md:bg-[url('/assets/home/background-home-desktop.jpg')] md:py-5">
      <main className="mx-auto flex h-full w-full flex-col items-center justify-center space-y-5 text-blue-200 md:flex-row md:justify-around md:space-y-0 md:space-x-0">
        {/*  */}
        <div className="max-w-md space-y-5 text-center md:px-0 md:text-start">
          <h1 className="mb-5 uppercase">So, you want to travel to</h1>
          <h1 className="mb-5 text-7xl font-medium tracking-widest text-blue-50 uppercase md:text-9xl">
            Space
          </h1>
          <p className="px-5 leading-relaxed md:px-0 md:text-lg">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-50 w-50 rounded-full transition-all duration-300 hover:cursor-pointer hover:bg-blue-50/10 md:h-96 md:w-96">
            <NavLink
              to="/destination"
              className="m-auto flex h-36 w-36 items-center justify-center rounded-full bg-blue-100 text-center text-xl font-bold text-blue-950 uppercase md:h-68 md:w-68 md:text-3xl"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
