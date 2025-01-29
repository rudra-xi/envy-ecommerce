import React from "react";
import { policy } from "../Assets/assets";

// Define the Policy component
const Policy = () => {
	return (
		// Create a section with flexbox layout
		<section className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm md:text-base text-secondary/60">
			{/* Iterate over the policy array and render each item */}
			{policy.map((item, idx) => (
				<div key={idx}>
					{/* Render the image for the policy item */}
					<img
						src={item.image}
						alt="exchange icon"
						className="w-12 m-auto mb-5"
					/>
					{/* Render the title of the policy item */}
					<h2 className="font-semibold">{item.title}</h2>
					{/* Render the text of the policy item */}
					<p className="text-secondary">{item.text} </p>
				</div>
			))}
		</section>
	);
};

export default Policy;
