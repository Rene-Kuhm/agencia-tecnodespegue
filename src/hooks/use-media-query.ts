import { useEffect, useState } from "react"

/**
 * Custom hook to detect media query matches
 * @param query - CSS media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the media query matches
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)")
 * const isDesktop = useMediaQuery("(min-width: 1024px)")
 */
export function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		const media = window.matchMedia(query)

		// Set initial value
		setMatches(media.matches)

		// Create event listener
		const listener = (event: MediaQueryListEvent) => {
			setMatches(event.matches)
		}

		// Add listener
		media.addEventListener("change", listener)

		// Cleanup
		return () => media.removeEventListener("change", listener)
	}, [query])

	return matches
}
