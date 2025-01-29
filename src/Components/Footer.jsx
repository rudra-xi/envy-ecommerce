import React from "react";
import { assets } from "../Assets/assets";

function Footer() {
	return (
		<footer>
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-24 mb-10 text-sm">
				<div className="">
					{/* Display the logo */}
					<img
						src={assets.logo}
						alt="logo"
						className="mb-5 w-28"
					/>
					{/* Company description */}
					<p className="w-full md:w-2/3 text-secondary/60">
						At Envy, we bring you the finest in fashion,
						merging timeless elegance with modern trends. Our
						commitment to quality ensures that each piece you
						wear is crafted to perfection. With a strong focus
						on sustainability, we prioritize eco-friendly
						practices throughout our production process. From
						casual wear to statement pieces, Envy offers
						styles that empower you to express your
						individuality and confidence.
					</p>
				</div>
				<div>
					{/* Company links */}
					<p className="text-xl font-medium mb-5">Company</p>
					<ul className="flex flex-col gap-1 text-secondary/60">
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div>
					{/* Contact information */}
					<p className="text-xl font-medium mb-5">
						Get In Touch
					</p>
					<ul className="flex flex-col gap-1 text-secondary/60">
						<li>+91-800-888-ENVY</li>
						<li>support@envyfashion.com</li>
					</ul>
				</div>
			</div>
			<div>
				{/* Footer bottom line */}
				<span className="border-none h-[1px] bg-accent" />
				{/* Footer copyright text */}
				<p className="py-5 text-sm text-center">
					© 2025 Rudra-Xi - All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
