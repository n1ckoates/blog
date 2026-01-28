import type { MetadataRoute } from 'next'
import { origin } from '@/lib/origin';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}