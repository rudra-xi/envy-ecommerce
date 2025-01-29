import React, { useContext, useState } from "react";
import { assets } from "../Assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
	// State to manage the visibility of the mobile menu
	const [visible, setVisible] = useState(false);
	// Get the cart count from the ShopContext
	const { getCartCount, navigate, setCartItems } = useContext(ShopContext);

	const logout = () => {
		navigate("/login");
		setCartItems({});
	};

	return (
		<nav className="flex items-center justify-between py-5 font-medium border-b border-accent">
			{/* Logo */}
			<Link to={"/"}>
				<img src={assets.logo} alt="logo" className="w-28" />
			</Link>

			{/* Navigation Links for larger screens */}
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
				{/* Home Link */}
				<NavLink
					to={"/"}
					className="flex flex-col items-center gap-1"
				>
					<p>Home</p>
					<span className="w-2/4 border-none h-[1.5px] bg-accent hidden" />
				</NavLink>
				{/* Collection Link */}
				<NavLink
					to={"/collection"}
					className="flex flex-col items-center gap-1"
				>
					<p>Collection</p>
					<span className="w-2/4 border-none h-[1.5px] bg-accent hidden" />
				</NavLink>
				{/* About Link */}
				<NavLink
					to={"/about"}
					className="flex flex-col items-center gap-1"
				>
					<p>About</p>
					<span className="w-2/4 border-none h-[1.5px] bg-accent hidden" />
				</NavLink>
				{/* Contact Link */}
				<NavLink
					to={"/contact"}
					className="flex flex-col items-center gap-1"
				>
					<p>Contact</p>
					<span className="w-2/4 border-none h-[1.5px] bg-accent hidden" />
				</NavLink>
			</ul>

			{/* Profile and Cart Icons */}
			<div className="flex items-center gap-6">
				{/* Profile Icon with Dropdown Menu */}
				<div
					onClick={() => navigate("/login")}
					className="group relative"
				>
					<img
						src={assets.profile_icon}
						className="w-5 cursor-pointer"
						alt="profile icon"
					/>

					<div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
						<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-accent text-secondary rounded-lg">
							<p className="cursor-pointer hover:text-secondary/50 transition-all duration-300">
								Profile
							</p>
							<span className="bg-secondary/30 w-full h-[1px]" />
							<p
								onClick={() => navigate("/orders")}
								className="cursor-pointer hover:text-secondary/50 transition-all duration-300"
							>
								Orders
							</p>
							<span className="bg-secondary/30 w-full h-[1px]" />
							<p
								onClick={logout}
								className="cursor-pointer hover:text-secondary/50 transition-all duration-300"
							>
								Logout
							</p>
						</div>
					</div>
				</div>
				{/* Cart Icon with Cart Count */}
				<Link to="/cart" className="relative">
					<img
						src={assets.cart_icon}
						alt="cart icon"
						className="w-6 cursor-pointer"
					/>
					<p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-accent rounded-full aspect-square text-[8px]">
						{getCartCount()}
					</p>
				</Link>

				{/* Mobile Menu Icon */}
				<img
					onClick={() => {
						setVisible(true);
					}}
					src={assets.menu_icon}
					alt="menu icon"
					className="w-5 rotate-90 cursor-pointer sm:hidden"
				/>
			</div>

			{/* Mobile Menu */}
			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-accent transition-all duration-500 ${
					visible ? "w-full" : "w-0"
				}`}
			>
				<div className="flex flex-col text-secondary">
					{/* Back Button */}
					<div
						onClick={() => {
							setVisible(false);
						}}
						className="flex items-center gap-2 p-5 cursor-pointer"
					>
						<img
							src={assets.dropdown_icon}
							alt="dropdown icon"
							className="h-8"
						/>
						<p>Back</p>
					</div>
					<span className="border-none h-[1px] bg-secondary" />
					{/* Mobile Navigation Links */}
					<NavLink
						onClick={() => {
							setVisible(false);
						}}
						className="py-2 text-center font-bold text-2xl pl-6"
						to={"/"}
					>
						Home
					</NavLink>
					<span className="border-none h-[1px] bg-secondary" />
					<NavLink
						onClick={() => {
							setVisible(false);
						}}
						className="py-2 text-center font-bold text-2xl pl-6"
						to={"/collection"}
					>
						Collection
					</NavLink>
					<span className="border-none h-[1px] bg-secondary" />
					<NavLink
						onClick={() => {
							setVisible(false);
						}}
						className="py-2 text-center font-bold text-2xl pl-6"
						to={"/about"}
					>
						About
					</NavLink>
					<span className="border-none h-[.5px] bg-secondary" />
					<NavLink
						onClick={() => {
							setVisible(false);
						}}
						className="py-2 text-center font-bold text-2xl pl-6"
						to={"/contact"}
					>
						Contact
					</NavLink>
					<span className="border-none h-[.5px] bg-secondary" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
