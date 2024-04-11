import { useState } from "react";
import fakeImage from "../assets/fakePerson.svg";
const Navbar = () => {
  const [active, setActive] = useState("Home");

  const getCurrentValue = (e) => {
    console.log(e.currentTarget.textContent);
    setActive(e.currentTarget.textContent);
  };

  return (
    <nav className="flex items-center mx-2 my-9 justify-between">
      <div className="w-28 h-28 ">
        <img className="object-cover" src={fakeImage} alt="logo" />
      </div>
      <div>
        <ul className="flex justify-between gap-2 text-center font-bold">
          <li>
            <a
              className={
                active === "Home"
                  ? "px-8 bg-zinc-300 py-2 text-white cursor-pointer"
                  : "px-8 bg-gray-200 py-2 cursor-pointer"
              }
              onClick={getCurrentValue}
              href="#Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                active === "Projects"
                  ? "px-8 bg-zinc-300 py-2 text-white cursor-pointer"
                  : "px-8 bg-gray-200 py-2 cursor-pointer"
              }
              onClick={getCurrentValue}
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={
                active === "LinkedIn"
                  ? "px-8 bg-zinc-300 py-2 text-white cursor-pointer"
                  : "px-8 bg-gray-200 py-2 cursor-pointer"
              }
              onClick={getCurrentValue}
              href="https://www.linkedin.com/in/long-borum-048458156"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={
                active === "Contact"
                  ? "px-8 bg-zinc-300 py-2 text-white cursor-pointer"
                  : "px-8 bg-gray-200 py-2 cursor-pointer"
              }
              onClick={getCurrentValue}
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
