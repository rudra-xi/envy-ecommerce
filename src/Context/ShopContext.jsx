import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { products } from "../Assets/assets";

// Create a context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	// Define constants for currency, delivery fee and backendURL
	const currency = "₹";
	const delivery_fee = 40;

	const navigate = useNavigate();

	// State for search functionality
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(true);

	// State for cart items
	const [cartItems, setCartItems] = useState({});

	// Function to add items to the cart
	const addToCart = async (itemId, size) => {
		if (!size) {
			toast.warn("Select Product Size");
			return;
		}
		let cartData = structuredClone(cartItems);
		if (cartData[itemId]) {
			if (cartData[itemId][size]) {
				cartData[itemId][size] += 1;
			} else {
				cartData[itemId][size] = 1;
			}
		} else {
			cartData[itemId] = {};
			cartData[itemId][size] = 1;
		}
		setCartItems(cartData);
	};

	// Function to get the total count of items in the cart
	const getCartCount = () => {
		let count = 0;
		for (const item in cartItems) {
			for (const size in cartItems[item]) {
				try {
					if (cartItems[item][size]) {
						count += cartItems[item][size];
					}
				} catch (error) {}
			}
		}
		return count;
	};

	// Function to update the quantity of a specific item in the cart
	const updateQuantity = async (itemId, size, quantity) => {
		let cartData = structuredClone(cartItems);

		cartData[itemId][size] = quantity;

		setCartItems(cartData);
	};

	// Function to calculate the total amount of the cart
	const getCartAmount = () => {
		let amount = 0;
		for (const item in cartItems) {
			let itemInfo = products.find((product) => product.id === item);
			if (itemInfo) {
				for (const size in cartItems[item]) {
					try {
						if (cartItems[item][size] > 0) {
							amount +=
								cartItems[item][size] * itemInfo.price;
						}
					} catch (error) {
						console.error(error);
					}
				}
			}
		}
		return amount;
	};

	// Define the value to be provided by the context
	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		setCartItems,
		addToCart,
		getCartCount,
		updateQuantity,
		getCartAmount,
		navigate,
	};

	// Return the context provider with the defined value
	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
