"use client"

import { Moon, Sun } from "react-feather"
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

function ChangeThemeToggler() {
	const { changeTheme, theme } = useContext(ThemeContext);
	const { t } = useContext(TranslationContext)

	return (
		<div>
			{t("Next.js i18n Demo")}
			<label className="swap swap-rotate space-x-4">
			{/* swap class works based on checkbox checked condition 
				if checkbox is checked swap on will shown and if not checked
				 swap off will be shown
			 */}
				<input type="checkbox" checked={theme == "light" ? true : false} onChange={changeTheme} />

				<Sun className="swap-on fill-current w-6 h-6" />

				<Moon className='swap-off fill-current w-6 h-6' />

			</label>
		</div>
	)
}

export default ChangeThemeToggler