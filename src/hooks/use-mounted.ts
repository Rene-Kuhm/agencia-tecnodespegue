import { useEffect, useState } from "react"

/**
 * Custom hook to check if component is mounted
 * Useful for preventing hydration errors with client-only features
 * @returns boolean indicating if component is mounted
 *
 * @example
 * const mounted = useMounted()
 * if (!mounted) return null
 * return <ClientOnlyComponent />
 */
export function useMounted(): boolean {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return mounted
}
