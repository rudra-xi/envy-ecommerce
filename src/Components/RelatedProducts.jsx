import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { ProductItem, Tittle } from "./index";

function RelatedProducts({ category, subCategory }) {
	const { products } = useContext(ShopContext);
	const [related, setRelated] = useState([]);

	useEffect(() => {
		if (products.length > 0) {
			let productsCopy = products.slice();
			productsCopy = productsCopy.filter(
				(item) => category === item.category
			);
			productsCopy = productsCopy.filter(
				(item) => subCategory === item.subCategory
			);

			setRelated(productsCopy.slice(1, 6));
		}
	}, [products]);

	return (
		<section className="my-24">
			<div className="text-center text-3xl py-2">
				<Tittle text1={"Recommended"} text2={"Items"} />
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{related.map((item, idx) => (
					<ProductItem
						key={idx}
						id={item.id}
						name={item.name}
						price={item.price}
						image={item.image[0]}
					/>
				))}
			</div>
		</section>
	);
}

export default RelatedProducts;
