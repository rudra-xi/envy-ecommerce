import React from "react";
import { assets } from "../Assets/assets";

// Hero component definition
function Hero() {
	return (
		// Section container with flex layout
		<section className="flex flex-col sm:flex-row border-x border-b border-accent">
			{/* Text container */}
			<div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
				<div className="text-secondary">
					{/* Customer Favorite label */}
					<div className="flex items-center gap-2">
						<span className="w-8 md:w-11 h-[1px] bg-accent" />
						<p className="libre-text font-medium uppercase text-sm md:text-xl">
							Customer Favorite
						</p>
					</div>
					{/* Main heading */}
					<h1 className="text-4xl sm:py-3 lg:text-6xl leading-relaxed uppercase text-center libre-text">
						Fresh Finds
					</h1>
					{/* Get Yours Today label */}
					<div className="flex items-center gap-2">
						<p className="libre-text font-semibold uppercase text-sm md:text-xl">
							Get Yours Today
						</p>
						<span className="w-8 md:w-11 h-[1px] bg-accent" />
					</div>
				</div>
			</div>

			{/* Hero image */}
			<img
				src={assets.hero_img}
				alt="hero image"
				className="w-full sm:w-1/2"
			/>
		</section>
	);
}

export default Hero;
