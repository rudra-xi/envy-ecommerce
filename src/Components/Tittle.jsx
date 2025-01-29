import React from "react";

function Tittle({ text1, text2 }) {
	return (
		<div className="inline-flex gap-2 text-4xl items-center mb-3 libre-text">
			<p className="text-secondary font-bold">
				{text1}{" "}
				<span className="text-secondary/70 font-medium">
					{text2}
				</span>
			</p>
			<span className="w-8 md:w-11 h-[2px] bg-accent" />
		</div>
	);
}

export default Tittle;
