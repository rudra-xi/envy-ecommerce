import React from "react";
import { NewsLetterBox, Tittle } from "../Components";
import { assets, whatSetsUsApart } from "../Assets/assets";

function About() {
	return (
		<section>
			{/* Title Section */}
			<div className="text-2xl pt-8 text-center">
				<Tittle text1={"About"} text2={"Us"} />
			</div>

			{/* About Us Content */}
			<div className="my-10 flex flex-col md:flex-row gap-16">
				<img
					src={assets.about_img}
					alt="about image"
					className="w-full md:max-w-[450px]"
				/>
				<div className="flex flex-col justify-center gap-5 md:w-2/4 text-secondary/70">
					<p>
						{/* Company Description */}
						Founded in 2017, Envy has become a leading fashion
						brand specializing in luxury and comfortable
						clothing. Our mission is to create products that
						not only enhance your appearance but also make you
						feel comfortable and confident. Our team of
						experts has been working tirelessly to develop
						innovative designs and create products that are
						both stylish and functional. With a focus on
						customer satisfaction, we strive to deliver
						high-quality, comfortable, and stylish clothing
						that will captivate and inspire your senses. We
						believe that every piece of clothing should be a
						reflection of who you are and the experiences that
						have shaped you. Join us on this journey of
						creating beautiful, comfortable, and stylish
						clothing for everyone.
					</p>
					<h3 className="font-bold text-xl text-secondary">
						Our Mission
					</h3>
					<p>
						{/* Mission Statement */}
						At Envy, we strive to inspire and connect through
						fashion. Our dedication to sustainability and
						ethical practices ensures responsible sourcing and
						eco-friendly production methods. Embracing
						diversity and inclusivity, our designs cater to
						everyone, regardless of age, gender, or body type.
						Join us, and let Envy be part of your story,
						helping you make a bold statement with every
						outfit.
					</p>
				</div>
			</div>

			{/* What Sets Us Apart Section */}
			<div className="text-3xl py-4">
				<Tittle text1={"What Sets"} text2={"Us Apart"} />
			</div>

			{/* Unique Selling Points */}
			<div className="flex flex-col gap-3 text-sm mb-20">
				{whatSetsUsApart.map((item, idx) => (
					<div
						key={idx}
						className="border border-accent px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5"
					>
						<h4 className="font-bold text-xl underline underline-offset-2">
							{item.title}
						</h4>
						<p className="text-secondary/70">{item.text}</p>
					</div>
				))}
			</div>

			{/* Newsletter Subscription Box */}
			<NewsLetterBox />
		</section>
	);
}

export default About;
