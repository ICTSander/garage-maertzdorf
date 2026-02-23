import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const routes = [
    "",
    "/diensten",
    "/prijzen",
    "/cases",
    "/over-ons",
    "/contact",
    "/privacy"
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6
  }));
}

