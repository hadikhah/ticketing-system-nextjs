import 'server-only'

const dictionaries = {
	en: () => import('@/public/locales/en.json').then((module) => module.default),
	fa: () => import('@/public/locales/fa.json').then((module) => module.default),
}

export const getDir = (locale) => {
	const localeDir = { "fa": "rtl", "en": "ltr" }
	return localeDir[locale]
};

export const getDictionary = async (locale) => {

	const file = await dictionaries[locale]();

	const t = (key) => {

		if (!file.hasOwnProperty(key))
			return key


		return file[key]
	}

	return t
} 
