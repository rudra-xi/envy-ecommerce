import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
	// Destructure search and setSearch from ShopContext
	const { search, setSearch } = useContext(ShopContext);
	// State to control the visibility of the search bar
	const [visible, setVisible] = useState(false);

	// Get the current location
	const location = useLocation();
	// Effect to toggle visibility based on the current route
	useEffect(() => {
		if (location.pathname.includes("collection")) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [location]);

	// Render the search bar if visible is true
	return visible ? (
		<div className="bg-primary text-center">
			<div className="inline-flex items-center justify-center border border-accent px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="flex-1 outline-none bg-inherit text-sm"
				/>
				<img
					src={assets.search_icon}
					alt="search icon"
					className="w-4"
				/>
			</div>
		</div>
	) : null;
}

export default SearchBar;
