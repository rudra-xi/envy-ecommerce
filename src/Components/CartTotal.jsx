import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Tittle } from "./index";

function CartTotal() {
	// Destructure necessary values from ShopContext
	const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

	return (
		<div className="w-full">
			<div className="text-2xl">
				{/* Render the title component */}
				<Tittle text1={"Cart"} text2={"Totals"} />
			</div>

			<div className="flex flex-col ga2 mt2 text-sm">
				{/* Display the subtotal */}
				<div className="flex justify-between">
					<p>Subtotal</p>
					<p>
						{currency}
						{getCartAmount()}.00
					</p>
				</div>
				<hr />
				{/* Display the shipping fee */}
				<div className="flex justify-between">
					<p>Shipping Fee</p>
					<p>
						{currency}
						{delivery_fee}.00
					</p>
				</div>
				<hr />
				{/* Display the total amount */}
				<div className="flex justify-between">
					<b>Total</b>
					<b>
						{currency}
						{getCartAmount() === 0
							? 0
							: getCartAmount() + delivery_fee}
						.00
					</b>
				</div>
			</div>
		</div>
	);
}

export default CartTotal;
