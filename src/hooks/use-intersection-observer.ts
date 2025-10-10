import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
	threshold?: number | number[]
	root?: Element | null
	rootMargin?: string
	freezeOnceVisible?: boolean
}

/**
 * Custom hook to detect when an element enters the viewport
 * @param options - Intersection Observer options
 * @returns Tuple with [ref, isIntersecting]
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 })
 * <div ref={ref}>{isVisible ? "Visible" : "Hidden"}</div>
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
	options: UseIntersectionObserverOptions = {},
): [React.RefObject<T | null>, boolean] {
	const { threshold = 0, root = null, rootMargin = "0px", freezeOnceVisible = false } = options

	const ref = useRef<T | null>(null)
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const element = ref.current
		if (!element) return

		// If already visible and freeze option is enabled, don't observe
		if (freezeOnceVisible && isIntersecting) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting)
			},
			{ threshold, root, rootMargin },
		)

		observer.observe(element)

		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting])

	return [ref, isIntersecting]
}
