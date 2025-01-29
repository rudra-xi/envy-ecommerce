import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Assets/assets";
import { RelatedProducts } from "../Components";

function Product() {
	// Get the productId from the URL parameters
	const { productId } = useParams();
	// Get products, currency, and addToCart function from the ShopContext
	const { products, currency, addToCart } = useContext(ShopContext);
	// State to store the product data
	const [productData, setProductData] = useState(false);
	// State to store the selected image and size
	const [image, setImage] = useState("");
	const [size, setSize] = useState("");

	// Function to fetch the product data based on the productId
	const fetchProducts = async () => {
		products.map((item) => {
			if (item.id === productId) {
				setProductData(item);
				setImage(item.image[0]);
				return null;
			}
		});
	};

	// Fetch the product data when the component mounts or when productId or products change
	useEffect(() => {
		fetchProducts();
	}, [productId, products]);

	return productData ? (
		<section className="pt-10 transition-all ease-in duration-500 opacity-100">
			<div className="flex gap-12 sm:gap12 flex-col sm:flex-row">
				<div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
					<div className="flex flex-col overflow-x-auto sm:overflow-y-scroll pt-2 justify-between sm:justify-normal w-full sm:w-[18.7%]">
						{/* Render product image */}
						{productData.image.map((item, idx) => (
							<img
								onClick={() => setImage(item)}
								src={item}
								alt="product image"
								key={idx}
								className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
							/>
						))}
					</div>
					<div className="w-full sm:w-[80%]">
						{/* Render the selected image */}
						<img
							src={image}
							alt="large product image"
							className="w-full h-auto"
						/>
					</div>
				</div>

				<div className="flex-1 ">
					<h2 className="font-medium text-2xl mt-2">
						{productData.name}
					</h2>
					<div className="flex items-center gap-1 mt-2">
						{/* Render star ratings */}
						<img
							src={assets.star_icon}
							alt="star"
							className="w-3.5"
						/>
						<img
							src={assets.star_icon}
							alt="star"
							className="w-3.5"
						/>
						<img
							src={assets.star_icon}
							alt="star"
							className="w-3.5"
						/>
						<img
							src={assets.star_icon}
							alt="star"
							className="w-3.5"
						/>
						<img
							src={assets.star_dull_icon}
							alt="star"
							className="w-3.5"
						/>
						<p className="pl-2">(122)</p>
					</div>
					<p className="mt-5 text-3xl font-medium">
						{currency}
						{productData.price}
					</p>
					<p className="mt-5 text-secondary/60 md:w-4/5">
						{productData.description}
					</p>
					<div className="flex flex-col gap-4 my-8">
						<p>Select Size</p>
						<div className="flex gap-2">
							{/* Render size options */}
							{productData.size.map((item, idx) => (
								<button
									onClick={() => setSize(item)}
									key={idx}
									className={`py-2.5 px-5 bg-accent/50 border-[1.6px]  text-xs transition-all duration-300 ${
										item === size
											? "border-accent scale-110"
											: ""
									}`}
								>
									{item}
								</button>
							))}
						</div>
					</div>

					{/* Add to Cart button */}
					<button
						onClick={() => addToCart(productData.id, size)}
						className="bg-secondary/30 text-secondary px-8 py-3 text-sm hover:bg-accent active:scale-105 transition-all duration-300"
					>
						Add to Cart
					</button>

					<span className="mt-8 sm:w-4/5 h-[1.5px] bg-accent" />
					<div className="text-sm text-gray-500 flex flex-col mt-5 gap-1">
						<p>Genuine Product Guarantee</p>
						<p>Cash on Delivery Available</p>
						<p>
							Hassle-Free Returns and Exchanges within 7
							Days
						</p>
					</div>
				</div>
			</div>

			<div className="mt-20">
				<div className="flex ">
					<b className="border px-5 py-3 text-sm">Description</b>
					<p className="border px-5 py-3 text-sm">
						Reviews (122)
					</p>
				</div>
				<div className="flex flex-col gap-4 border p-6 text-sm text-secondary/60">
					<p>
						Introducing the Ultimate Wardrobe Essential –
						designed to fit every lifestyle, age, and style
						preference. Made with high-quality, breathable
						fabric, this timeless piece offers unparalleled
						comfort and durability. Whether you're dressing up
						for a special occasion or keeping it casual for a
						day out, this versatile item seamlessly
						transitions to meet your needs.
					</p>
					<p>
						Available in a wide range of size and colors, it
						complements every body type and personality. With
						its classic design and modern touches, it's
						perfect for layering or wearing on its own.
						Experience effortless style and embrace
						inclusivity with this must-have addition to your
						wardrobe.
					</p>
				</div>
			</div>

			<div className="mt-20">
				{/* Render related products */}
				<RelatedProducts
					category={productData.category}
					subCategory={productData.subCategory}
				/>
			</div>
		</section>
	) : (
		<section className="opacity-0">Product</section>
	);
}

export default Product;
