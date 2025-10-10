import { SITE_CONFIG } from "@/constants"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = SITE_CONFIG.url

	// Define all your routes here
	const routes = ["", "/servicios", "/nosotros", "/portafolio", "/contacto"]

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "daily" : "weekly",
		priority: route === "" ? 1 : 0.8,
	}))
}
