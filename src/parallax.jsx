import { useState, useEffect } from "react";

export const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollX(window.scrollX);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[200vh]">
      {" "}
      <div
        className="top-20 left-10 fixed border-3 border-green-300 bg-blue-300 h-60 w-60"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="top-30 border-3 border-green-900 rounded-full left-5 fixed bg-blue-900 h-20 w-20"
        style={{ transform: `translateY(${scrollY * 0.7}px)` }}
      ></div>
      <div
        className="fixed border-4 border-green-300 top-15 left-35 bg-blue-200 h-10 w-10"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      ></div>
      <div
        className="fixed border-3 border-green-600 rounded-xl top-50 left-50 bg-blue-600 h-40 w-25"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      <div
        className="fixed text-blue-800 top-35 left-35 text-4xl"
        style={{ transform: `translateX(${scrollY * -0.2}px)` }}
      >H U G O</div>
    </div>
  );
};
