import React, { useEffect } from "react";
import anime from "animejs";

export const Animation = () => {
	useEffect(() => {
		anime({
			targets: ".circle",
			translateY: 250,
			rotate: "1turn",
			scale: 1.5,
			easing: "easeInOutQuad",
			duration: 2000,
			loop: true,
			direction: "alternate",
		});
	}, []);

	return (
		<div className="flex justify-center flex-col min-h-screen">
			<div className="text-center text-6xl font-bold text-yellow-400">
				Glad påsk!
			</div>
			<div className="flex justify-center pt-6 gap-x-10 flex-row items-center mt-6">
				<div className="circle w-26 h-35 bg-green-500 shadow-xl rounded-full relative"></div>
				<div className="circle w-26 h-35 bg-pink-200 shadow-xl rounded-full relative"></div>
				<div className="circle w-26 h-35 bg-amber-300 shadow-xl rounded-full relative"></div>
				<div className="circle w-26 h-35 bg-blue-400 shadow-xl rounded-full relative"></div>
			</div>
		</div>
	);
};
