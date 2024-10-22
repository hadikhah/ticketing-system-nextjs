"use client"

import { createContext, useEffect, useState } from "react"

import { useParams } from 'next/navigation'


export const TranslationContext = createContext()

export const TranslationProvider = ({ children }) => {

	const params = useParams()

	const [translations, setTranslations] = useState({})

	const dictionaries = {
		en: () => import('@/public/locales/en.json').then((module) => module.default),
		fa: () => import('@/public/locales/fa.json').then((module) => module.default),
	}

	const t = (key) => {

		return translations[key] ?? key
	}

	useEffect(() => {

		const fetchData = async () => {
			try {
				const result = await dictionaries[params?.lang ?? "fa"]();
				setTranslations(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData()
	}, [params.lang])



	return (
		<TranslationContext.Provider value={{ t }}>
			{children}
		</TranslationContext.Provider>
	)

} 
