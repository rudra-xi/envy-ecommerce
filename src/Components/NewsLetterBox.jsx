import React from "react";

// Define the NewsLetterBox component
function NewsLetterBox() {
	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		// Section container with centered text
		<section className="text-center">
			{/* Promotional text */}
			<p className="text-2xl font-medium text-secondary/60">
				Join Today & Enjoy 20% Off
			</p>
			{/* Description text */}
			<p className="text-secondary mt-3">
				Sign up for our newsletter and receive exclusive offers,
				promotions, and updates.
			</p>
			{/* Form for email submission */}
			<form
				onSubmit={handleSubmit}
				className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
			>
				{/* Email input field */}
				<input
					type="email"
					placeholder="Enter your Email"
					className="w-full sm:flex-1 bg-primary outline-none"
					required
				/>
				{/* Submit button */}
				<button
					type="submit"
					className="bg-accent text-secondary text-sm px-10 py-4"
				>
					Sign Up
				</button>
			</form>
		</section>
	);
}

// Export the NewsLetterBox component as the default export
export default NewsLetterBox;
