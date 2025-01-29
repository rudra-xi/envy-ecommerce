import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Tittle } from "../Components";

function Orders() {
	// Get products and currency from ShopContext
	const { products, currency } = useContext(ShopContext);

	return (
		<section className="pt-16">
			<div className="text-2xl">
				{/* Render the title component */}
				<Tittle text1={"Purchase"} text2={"Records"} />
			</div>

			<div className="">
				{/* Map through a slice of products to display order items */}
				{products.slice(1, 4).map((item, idx) => (
					<div
						key={idx}
						className="py-4 border-b border-accent/50 text-secondary/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
					>
						<div className="flex items-start gap-6 text-sm">
							{/* Display product image */}
							<img
								src={item.image[0]}
								alt="order item image"
								className="w-16 sm:w-20"
							/>
							<div>
								{/* Display product name */}
								<p className="sm:text-base font-medium">
									{item.name}
								</p>
								<div className="flex items-center gap-3 mt-2 text-base text-secondary">
									{/* Display product price */}
									<p>
										{currency}
										{item.price}
									</p>
									{/* Display quantity and size */}
									<p>Quantity: 1</p>
									<p>Size: M</p>
								</div>
								{/* Display order date */}
								<p>
									Date:{" "}
									<span className="text-accent/80">
										10 Jan 2025
									</span>
								</p>
							</div>
						</div>
						<div className="md:w-1/2 flex justify-between">
							<div className="flex items-center gap-2">
								{/* Display shipping status */}
								<span className="min-w-2 h-2 rounded-full bg-accent/60" />
								<p className="text-sm md:text-base">
									Prepared for Shipping
								</p>
							</div>
							{/* Button to check shipment status */}
							<button className="border border-accent px-4 py-2 text-sm font-medium rounded-sm">
								Shipment Status
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Orders;
