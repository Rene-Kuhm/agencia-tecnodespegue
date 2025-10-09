"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [isPointer, setIsPointer] = useState(false)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })

			const target = e.target as HTMLElement
			setIsPointer(
				window.getComputedStyle(target).cursor === "pointer" ||
					target.tagName === "A" ||
					target.tagName === "BUTTON",
			)
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [])

	return (
		<>
			{/* Main cursor */}
			<div
				className="pointer-events-none fixed z-50 transition-transform duration-100"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
				}}
			>
				<div className="w-8 h-8 rounded-full border-2 border-blue-500/50 backdrop-blur-sm" />
			</div>

			{/* Trailing dot */}
			<div
				className="pointer-events-none fixed z-50 transition-all duration-500 ease-out"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
			</div>

			{/* Ambient glow */}
			<div
				className="pointer-events-none fixed z-40 transition-all duration-700 ease-out opacity-30"
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />
			</div>
		</>
	)
}
