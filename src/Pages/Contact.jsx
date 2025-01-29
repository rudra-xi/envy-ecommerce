import React from "react";
import { NewsLetterBox, Tittle } from "../Components";
import { assets } from "../Assets/assets";

// Contact component
function Contact() {
	return (
		<section>
			{/* Page title */}
			<div className="text-center text-2xl pt-10">
				<Tittle text1={"Contact"} text2={"Us"} />
			</div>

			{/* Contact details and image */}
			<div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
				{/* Contact image */}
				<img
					src={assets.contact_img}
					alt="contact image"
					className="w-full md:max-w-[480px]"
				/>
				{/* Contact information */}
				<div className="flex flex-col justify-center items-start gap-5">
					<h2 className="text-xl font-bold">Our Store</h2>
					<p className="text-secondary/70">
						Plot 13, Ground Floor, Block M, Vishwas Park,
						Sector 4,
						<br /> Dwarka, New Delhi, India
					</p>
					<p className="text-secondary/70">
						+91 20 1234 5678 <br />
						admin@envy.com
					</p>
					<h3 className="text-xl font-bold">Careers at Envy</h3>
					<p className="text-secondary/70">
						Explore our teams and discover exciting career
						opportunities at Envy.
					</p>
					{/* Careers button */}
					<button className="bg-secondary/30 text-secondary px-8 py-3 text-sm hover:bg-accent active:scale-105 transition-all duration-300">
						Find Opportunities
					</button>
				</div>
			</div>
			{/* Newsletter subscription box */}
			<NewsLetterBox />
		</section>
	);
}

export default Contact;
