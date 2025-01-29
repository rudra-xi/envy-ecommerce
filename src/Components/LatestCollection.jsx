import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { ProductItem, Tittle } from "./index";

function LatestCollection() {
	// Get products from the ShopContext
	const { products } = useContext(ShopContext);
	// State to hold the latest products
	const [latestProducts, setLatestProducts] = useState([]);

	// useEffect to set the latest products when the component mounts
	useEffect(() => {
		setLatestProducts(products.slice(0, 10));
	}, [products]);

	return (
		<section className="my-10 ">
			<div className="text-center py-8 text-3xl">
				{/* Title component */}
				<Tittle text1={"Trending"} text2={"Now"} />
				{/* Description paragraph */}
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-secondary/60">
					Explore Envy’s newest collection! Embrace bold colors
					and sleek designs, staying ahead with this season's
					hottest trends. Discover captivating pieces that
					elevate your style. Your fashion-forward journey begins
					here.
				</p>
			</div>

			{/* Grid of product items */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-4">
				{latestProducts.map((item, idx) => (
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

export default LatestCollection;
