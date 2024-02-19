import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <div className="h-screen header__section">
        {/* wrapper */}
        <div className="h-screen p-4 flex flex-col items-center  md:flex-row    gap-4 justify-around">
          {/* header left  */}
          <div className="h-1/2 w-1/2 text-red-500 ">
            <h1 className="text-7xl">Hey, I'm Mohammad Haolader</h1>
            <h1 className="text-2xl">web developer Based In Bangladesh.</h1>
            <p>
              I'm developer focused on crafting user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
          </div>
          {/* header right  */}

          <div className="h-1/2 ">
            <h1 className="text-3xl">right</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
