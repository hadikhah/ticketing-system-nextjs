import { NextResponse } from "next/server";

const locales = ['fa', 'en']
const defaultLocale = 'fa'

const cookieName = 'locale'; // Example cookie name

function getLocale(request) {
	// Get locale from cookie
	if (request.cookies.has(cookieName))
		return request.cookies.get(cookieName).value;

	return defaultLocale;
}

export function middleware(request) {

	request.hello = "hello"
	// Check if there is any supported locale in the pathname
	if (request.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();

	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};