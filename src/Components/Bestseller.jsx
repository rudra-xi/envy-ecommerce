import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Tittle, ProductItem } from "./index";

function Bestseller() {
	// Get products from the ShopContext
	const { products } = useContext(ShopContext);
	// State to hold the bestseller products
	const [bestseller, setBestseller] = useState([]);

	// useEffect to filter and set the bestseller products
	useEffect(() => {
		// Filter products to get only those marked as bestseller
		const bestProduct = products.filter((item) => item.bestseller);
		// Set the first 5 bestseller products
		setBestseller(bestProduct.slice(0, 5));
	}, [products]);

	return (
		<section className="my-10">
			<div className="text-center text-3xl py-8">
				{/* Title component */}
				<Tittle text1={"Hot"} text2={"Picks"} />
				{/* Description paragraph */}
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-secondary/60">
					Discover Envy’s top picks that have captured the hearts
					of fashion enthusiasts everywhere! These best-selling
					pieces embody timeless style and exceptional quality.
					Don't miss out on the outfits everyone is talking
					about—add these must-have wardrobe essentials to your
					collection today.
				</p>
			</div>

			{/* Grid to display bestseller products */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4">
				{bestseller.map((item, idx) => (
					<ProductItem
						key={idx}
						id={item.id}
						image={item.image[0]}
						name={item.name}
						price={item.price}
					/>
				))}
			</div>
		</section>
	);
}

export default Bestseller;
