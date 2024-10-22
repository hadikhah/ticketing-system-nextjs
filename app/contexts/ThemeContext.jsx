"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

	// const savedTheme = localStorage.getItem("theme");

	const [theme, setTheme] = useState("");

	useEffect(() => {
		// Check localStorage for saved theme
		const savedTheme = localStorage.getItem("theme");

		console.log(savedTheme, theme)

		document?.documentElement.setAttribute('data-theme', savedTheme || theme);

		if (savedTheme) {
			console.log("second", savedTheme, theme)
			setTheme(savedTheme);
		}
	}, []);

	const changeTheme = () => {
		setTheme((prev) => {
			const nextTheme = prev === "light" ? "dark" : "light"

			document?.documentElement.setAttribute('data-theme', nextTheme);

			localStorage.setItem("theme", nextTheme)

			console.log(prev, nextTheme)

			return nextTheme
		}
		);

	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};