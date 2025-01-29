import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</BrowserRouter>
);
