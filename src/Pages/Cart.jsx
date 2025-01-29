import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { CartTotal, Tittle } from "../Components";
import { assets } from "../Assets/assets";

function Cart() {
	// Destructure context values
	const { products, currency, cartItems, updateQuantity, navigate } =
		useContext(ShopContext);
	const [cartData, setCartData] = useState([]);

	// Update cart data when cartItems change
	useEffect(() => {
		const tempData = [];
		for (const item in cartItems) {
			for (const size in cartItems[item]) {
				if (cartItems[item][size] > 0) {
					tempData.push({
						id: item,
						size: size,
						quantity: cartItems[item][size],
					});
				}
			}
		}
		setCartData(tempData);
	}, [cartItems]);

	return (
		<section className="pt-14">
			<div className="text-2xl mb-3">
				<Tittle text1={"Your"} text2={"Cart"} />
			</div>
			<div className="">
				{cartData.map((item, idx) => {
					// Find product data by ID
					const productData = products.find(
						(product) => product.id === item.id
					);

					return (
						<div
							className="py-4 border-y text-secondary/60 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
							key={idx}
						>
							<div className="flex items-start gap-6">
								<img
									src={productData.image[0]}
									alt="cart product image"
									className="w-16 sm:w-20"
								/>
								<div>
									<p className="text-sm sm:text-base font-medium">
										{productData.name}
									</p>
									<div className="flex items-center gap-5 mt-2">
										<p>
											{currency}
											{productData.price}
										</p>
										<p className="px-3 sm:px-4 sm:py-1 text-secondary bg-accent/60">
											{item.size}
										</p>
									</div>
								</div>
							</div>
							<input
								onChange={(e) => {
									e.target.value === "" ||
									e.target.value === "0"
										? null
										: updateQuantity(
												item.id,
												item.size,
												Number(
													e.target.value
												)
										  );
								}}
								type="number"
								min={1}
								defaultValue={item.quantity}
								className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
							/>
							<img
								onClick={() =>
									updateQuantity(
										item.id,
										item.size,
										0
									)
								}
								src={assets.bin_icon}
								alt="bin icon"
								className="w-6 mr-4 sm:w-7 cursor-pointer"
							/>
						</div>
					);
				})}
			</div>
			<div className="flex justify-end my-20">
				<div className="w-full sm:w-[450px]">
					<CartTotal />

					<div className="w-full text-end pt-5">
						<button
							onClick={() => navigate("./place-order")}
							className="bg-secondary/30 text-secondary px-8 py-3 text-sm hover:bg-accent active:scale-105 transition-all duration-300"
						>
							Continue to Payment
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;
