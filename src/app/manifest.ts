import { SITE_CONFIG } from "@/constants"
import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_CONFIG.name,
		short_name: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
		start_url: "/",
		display: "standalone",
		background_color: "#0a0a0a",
		theme_color: "#0a0a0a",
		icons: [
			{
				src: "/favicon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	}
}
