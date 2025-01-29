import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Assets/assets";
import { ProductItem, Tittle } from "../Components";

function Collection() {
	// Destructure products, search, and showSearch from ShopContext
	const { products, search, showSearch } = useContext(ShopContext);
	// State to manage filter visibility
	const [showFilter, setShowFilter] = useState(false);
	// State to manage filtered products
	const [filterProducts, setFilterProducts] = useState([]);
	// State to manage selected categories and subcategories
	const [category, setCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);
	// State to manage sorting option
	const [sort, setSort] = useState("relevant");

	// Toggle category selection
	const toggleCategory = (e) => {
		if (category.includes(e.target.value)) {
			setCategory((prev) =>
				prev.filter((item) => item !== e.target.value)
			);
		} else {
			setCategory((prev) => [...prev, e.target.value]);
		}
	};

	// Toggle subcategory selection
	const toggleSubCategory = (e) => {
		if (subCategory.includes(e.target.value)) {
			setSubCategory((prev) =>
				prev.filter((item) => item !== e.target.value)
			);
		} else {
			setSubCategory((prev) => [...prev, e.target.value]);
		}
	};

	// Apply filters to products
	const applyFilter = () => {
		let productCopy = products.slice();

		// Filter by search term if search is active
		if (showSearch && search) {
			productCopy = productCopy.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		}

		// Filter by selected categories
		if (category.length > 0) {
			productCopy = productCopy.filter((item) =>
				category.includes(item.category)
			);
		}
		setFilterProducts(productCopy);

		// Filter by selected subcategories
		if (subCategory.length > 0) {
			productCopy = productCopy.filter((item) =>
				subCategory.includes(item.subCategory)
			);
		}
		setFilterProducts(productCopy);
	};

	// Sort products based on selected sorting option
	const sortProducts = () => {
		let fpCopy = filterProducts.slice();

		switch (sort) {
			case "low-high":
				setFilterProducts(fpCopy.sort((l, h) => l.price - h.price));
				break;
			case "high-low":
				setFilterProducts(fpCopy.sort((l, h) => h.price - l.price));
				break;
			default:
				applyFilter();
				break;
		}
	};

	// Apply filters when category, subcategory, search, or showSearch changes
	useEffect(() => {
		applyFilter();
	}, [category, subCategory, search, showSearch, products]);

	// Sort products when sorting option changes
	useEffect(() => {
		sortProducts();
	}, [sort]);

	return (
		<section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
			<div className="min-w-60">
				<p
					onClick={() => setShowFilter(!showFilter)}
					className="my-2 text-xl flex items-center cursor-pointer gap-2"
				>
					Filters
					<img
						className={`h-6 sm:hidden ${
							showFilter ? "-rotate-90" : ""
						}`}
						src={assets.dropdown_icon}
						alt="dropdown menu"
					/>
				</p>
				<div
					className={`border border-accent pl-5 py-3 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">Categories</p>
					<div className="flex flex-col gap-2 text-sm font-light text-secondary">
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"men"}
								onChange={toggleCategory}
							/>
							Men
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"women"}
								onChange={toggleCategory}
							/>
							Women
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"kids"}
								onChange={toggleCategory}
							/>
							Kids
						</p>
					</div>
				</div>

				<div
					className={`border border-accent pl-5 py-3 my-5 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">Type</p>
					<div className="flex flex-col gap-2 text-sm font-light text-secondary">
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"top"}
								onChange={toggleSubCategory}
							/>
							Top Wear
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"bottom"}
								onChange={toggleSubCategory}
							/>
							Bottom Wear
						</p>
						<p className="flex gap-2">
							<input
								type="checkbox"
								className="w-3"
								value={"winter"}
								onChange={toggleSubCategory}
							/>
							Winter Wear
						</p>
					</div>
				</div>
			</div>

			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Tittle text1={"Complete"} text2={"Range"} />

					<select
						onChange={(e) => setSort(e.target.value)}
						className="border outline-none border-accent bg-primary text-sm px-2"
					>
						<option value="relevant">Relevant</option>
						<option value="low-high">Low - High</option>
						<option value="high-low">High - Low</option>
					</select>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
					{filterProducts.map((item, idx) => (
						<ProductItem
							key={idx}
							id={item.id}
							name={item.name}
							image={item.image[0]}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Collection;
