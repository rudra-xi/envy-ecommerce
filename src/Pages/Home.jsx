import React from "react";
// Importing components used in the Home page
import {
	Hero,
	LatestCollection,
	Bestseller,
	Policy,
	NewsLetterBox,
} from "../Components";

function Home() {
	return (
		<>
			{/* Hero section */}
			<Hero />
			{/* Latest collection section */}
			<LatestCollection />
			{/* Bestseller section */}
			<Bestseller />
			{/* Policy section */}
			<Policy />
			{/* Newsletter subscription box */}
			<NewsLetterBox />
		</>
	);
}

export default Home;
