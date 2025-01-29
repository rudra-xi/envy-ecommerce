import React, { useContext, useState } from "react";
import { CartTotal, Tittle } from "../Components";
import { assets } from "../Assets/assets";
import { ShopContext } from "../Context/ShopContext";

function PlaceOrder() {
	// Get navigate function from ShopContext
	const { navigate } = useContext(ShopContext);
	// State to manage selected payment method
	const [method, setMethod] = useState("cod");

	return (
		<section className="flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh] border-t">
			{/* Shipping Details Form */}
			<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
				<div className="text-xl sm:text-2xl my-3">
					<Tittle text1={"Shipping"} text2={"Details"} />
				</div>
				<div className="flex gap-3">
					{/* First Name and Last Name Inputs */}
					<input
						type="text"
						placeholder="First Name"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
					<input
						type="text"
						placeholder="Last Name"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
				</div>
				{/* Email Address Input */}
				<input
					type="email"
					placeholder="Email Address"
					className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
				/>
				{/* Street Input */}
				<input
					type="text"
					placeholder="Street"
					className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
				/>
				<div className="flex gap-3">
					{/* City and State Inputs */}
					<input
						type="text"
						placeholder="City"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
					<input
						type="text"
						placeholder="State"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
				</div>
				<div className="flex gap-3">
					{/* Pin Code and Country Inputs */}
					<input
						type="number"
						placeholder="Pin Code"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
					<input
						type="text"
						placeholder="Country"
						className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
					/>
				</div>
				{/* Phone Input */}
				<input
					type="number"
					placeholder="Phone"
					className="border border-accent rounded py-1.5 px-3.5 w-full outline-none focus:ring-[.5px] ring-accent"
				/>
			</div>

			<div className="mt-8">
				{/* Cart Total Component */}
				<div className="mt-8 min-w-80">
					<CartTotal />
				</div>

				<div className="mt-12">
					<Tittle text1={"Billing"} text2={"Method"} />

					{/* Payment Method Selection */}
					<div className="flex gap-3 flex-col lg:flex-row">
						<div
							onClick={() => setMethod("stripe")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer hover:scale-105 duration-300"
						>
							<span
								className={`min-w-3.5 border-accent border-[2px] rounded-full h-3.5 ${
									method === "stripe"
										? "bg-accent/40"
										: ""
								}`}
							/>
							<img
								src={assets.stripe_logo}
								alt=""
								className="h-4 mx-4"
							/>
						</div>
						<div
							onClick={() => setMethod("razorpay")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer hover:scale-105 duration-300"
						>
							<span
								className={`min-w-3.5 border-accent border-[2px] rounded-full h-3.5 ${
									method === "razorpay"
										? "bg-accent/40"
										: ""
								}`}
							/>
							<img
								src={assets.razorpay_logo}
								alt=""
								className="h-4 mx-4"
							/>
						</div>
						<div
							onClick={() => setMethod("cod")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer hover:scale-105 duration-300"
						>
							<span
								className={`min-w-3.5 border-accent border-[2px] rounded-full h-3.5 ${
									method === "cod"
										? "bg-accent/40"
										: ""
								}`}
							/>
							<p className="text-secondary/50 text-xs font-medium mx-4">
								Cash On Delivery
							</p>
						</div>
					</div>
					{/* Place Order Button */}
					<div
						onClick={() => navigate("./orders")}
						className="w-full text-end mt-8"
					>
						<button className="bg-secondary/30 text-secondary px-8 py-3 text-sm hover:bg-accent active:scale-105 transition-all duration-300">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PlaceOrder;
