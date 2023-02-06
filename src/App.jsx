import React from "react";
import QrImage from "./img/image-qr-code.png";

const App = () => {
  return (
    <section className="w-screen min-h-screen bg-dark-blue px-10 flex justify-center items-center">
      {/* Card */}
      <div className="w-full lg:w-1/4 bg-white rounded-lg">
        <div className="flex flex-col justify-between gap-y-5 items-center p-3">
          <img className="rounded-lg" src={QrImage} alt="Image of a qr code" />
          <p className="font-outfit font-bold text-center text-xl px-5">
            Improve your front-end skills by building projects
          </p>
          <p className="text-grayish-blue text-center px-5 text-sm leading-4 mb-5">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;
