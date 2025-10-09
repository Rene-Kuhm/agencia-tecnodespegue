"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
	children: React.ReactNode
	className?: string
	delay?: number
	direction?: "up" | "down" | "left" | "right" | "fade"
}

export function ScrollReveal({
	children,
	className = "",
	delay = 0,
	direction = "up",
}: ScrollRevealProps) {
	const [isVisible, setIsVisible] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setIsVisible(true), delay)
				}
			},
			{ threshold: 0.1 },
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [delay])

	const getInitialTransform = () => {
		switch (direction) {
			case "up":
				return "translateY(50px)"
			case "down":
				return "translateY(-50px)"
			case "left":
				return "translateX(50px)"
			case "right":
				return "translateX(-50px)"
			case "fade":
				return "translateY(0)"
			default:
				return "translateY(50px)"
		}
	}

	return (
		<div
			ref={ref}
			className={className}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translate(0)" : getInitialTransform(),
				transition:
					"opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
			}}
		>
			{children}
		</div>
	)
}
