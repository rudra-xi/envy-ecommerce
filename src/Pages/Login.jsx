import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";

function Login() {
	// State to toggle between "Sign Up" and "Login"
	const [currentState, setCurrentState] = useState("Login");

	const { token, navigate } = useContext(ShopContext);

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-secondary"
			>
				<div className="inline-flex items-center gap-2 mb-2 mt-10">
					<h2 className="text-3xl">{currentState}</h2>
					<span className="w-8 md:w-11 h-[2px] bg-accent" />
				</div>

				{/* Conditionally render the Name input field for Sign Up */}
				{currentState === "Login" ? (
					""
				) : (
					<input
						onChange={(e) => setName(e.target.value)}
						value={name}
						type="text"
						placeholder="Name"
						required
						className="w-full px-3 py-2 border border-accent "
					/>
				)}

				{/* Email input field */}
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					placeholder="Email"
					required
					className="w-full px-3 py-2 border border-accent "
				/>
				{/* Password input field */}
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					placeholder="Password"
					required
					className="w-full px-3 py-2 border border-accent "
				/>
				<div className="w-full flex justify-between text-sm text-secondary/50 underline underline-offset-2">
					<p className="cursor-pointer">Forgot Your Password?</p>
					{/* Toggle between Login and Sign Up */}
					{currentState === "Login" ? (
						<p
							onClick={() => setCurrentState("Sign Up")}
							className="cursor-pointer"
						>
							Create Account
						</p>
					) : (
						<p
							onClick={() => setCurrentState("Login")}
							className="cursor-pointer"
						>
							Login Here
						</p>
					)}
				</div>
				{/* Submit button */}
				<button className="bg-secondary/30 text-secondary px-8 py-3 text-sm hover:bg-accent active:bg-secondary active:text-accent transition-all duration-300">
					{currentState === "Login" ? "Login" : "Sign Up"}
				</button>
			</form>
		</section>
	);
}

export default Login;
