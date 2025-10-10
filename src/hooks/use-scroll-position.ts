import { useEffect, useState } from "react"

interface ScrollPosition {
	x: number
	y: number
}

/**
 * Custom hook to track scroll position
 * @returns Object with x and y scroll coordinates
 *
 * @example
 * const { y } = useScrollPosition()
 * const isScrolled = y > 100
 */
export function useScrollPosition(): ScrollPosition {
	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
		x: 0,
		y: 0,
	})

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition({
				x: window.scrollX,
				y: window.scrollY,
			})
		}

		// Set initial position
		handleScroll()

		// Add scroll listener
		window.addEventListener("scroll", handleScroll, { passive: true })

		// Cleanup
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return scrollPosition
}
