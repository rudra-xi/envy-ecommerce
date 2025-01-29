import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
	const { currency } = useContext(ShopContext);
	return (
		<section>
			<Link
				to={`/product/${id}`}
				className="text-secondary cursor-pointer"
			>
				<div className="overflow-hidden border-[1px] border-secondary/60/20 rounded-xl h-[375px]">
					<img
						src={image}
						alt="product image"
						className="hover:scale-105 object-contain transition-all ease-in-out duration-500"
					/>
					<p className="pt-3 pb-1 px-3 py-2 text-sm font-semibold">{name}</p>
					<p className="px-3 font-medium text-sm">
						{currency}
						{price}
					</p>
				</div>
			</Link>
		</section>
	);
}

export default ProductItem;
