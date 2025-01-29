import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	Home,
	Cart,
	Product,
	Collection,
	About,
	Contact,
	Login,
	PlaceOrder,
	Orders,
} from "./Pages";
import { Footer, Navbar, SearchBar } from "./Components";

function App() {
	return (
		<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
			{/* ToastContainer for displaying toast notifications */}
			<ToastContainer
				autoClose={3000}
				position="top-center"
				theme="light"
				newestOnTop={true}
				pauseOnFocusLoss={false}
				pauseOnHover={false}
				transition={Slide}
			/>
			{/* Navbar component */}
			<Navbar />
			{/* SearchBar component */}
			<SearchBar />
			{/* Routes for different pages */}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/collection" element={<Collection />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/place-order" element={<PlaceOrder />} />
				<Route path="/orders" element={<Orders />} />
			</Routes>
			{/* Footer component */}
			<Footer />
		</div>
	);
}

export default App;
