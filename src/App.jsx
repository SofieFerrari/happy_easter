import React, { useEffect } from "react";
import anime from "animejs";

const App = () => {
useEffect(() => {
	anime({
		targets: ".circle",
		translateY: [100, -100, 100],
		easing: "easeInOutSine",
		duration: 2000,
		loop: true,
		direction: "alternate",
		delay: anime.stagger(600),
	});

anime({
	targets: ".bunny",
	translateY: [0, -80, 0],
	easing: "easeInOutSine",
	duration: 7000,
	direction: "alternate",
	loop: true,
	delay: anime.stagger(2000),
});
}, []);

	return (
		<>
			<div className="flex justify-center flex-col min-h-screen">
				<div className="text-center text-9xl font-bold text-yellow-400">
					Glad påsk!
				</div>
				<div className="text-center text-3xl font-bold text-pink-300">
					önskar <span className="text-blue-400">Sofie</span> som provar{" "}
					<span className="text-green-500">anime.js</span>
				</div>
				<div className="flex justify-center gap-x-10 flex-row items-center mt-6">
					<div className="circle w-26 h-35 bg-green-500 shadow-xl rounded-full relative"></div>
					<div className="circle w-26 h-35 bg-pink-200 shadow-xl rounded-full relative"></div>
					<div className="circle w-26 h-35 bg-amber-300 shadow-xl rounded-full relative"></div>
					<div className="circle w-26 h-35 bg-blue-400 shadow-xl rounded-full relative"></div>
				</div>
			</div>
			<div className="relative overflow-hidden w-full h-24">
				<div className="absolute bottom-0 right-0 w-24 h-24">
					<img className="bunny h-24" src="/bunny-8716426.svg" alt="Bunny" />
				</div>
			</div>
		</>
	);
};

export default App;
