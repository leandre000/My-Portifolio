"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'profile'
}

export default function SEOOptimizer({
  title,
  description,
  keywords = [],
  image = '/myportifolio.jpg',
  type = 'website'
}: SEOOptimizerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords && keywords.length > 0) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description)
    }

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage && image) {
      ogImage.setAttribute('content', `https://leandre-portfolio.vercel.app${image}`)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://leandre-portfolio.vercel.app${pathname}`)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage && image) {
      twitterImage.setAttribute('content', `https://leandre-portfolio.vercel.app${image}`)
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://leandre-portfolio.vercel.app${pathname}`)
    }

    // Add structured data for breadcrumbs
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://leandre-portfolio.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title || "Page",
          "item": `https://leandre-portfolio.vercel.app${pathname}`
        }
      ]
    }

    // Remove existing breadcrumb script if any
    const existingBreadcrumb = document.querySelector('script[data-breadcrumb]')
    if (existingBreadcrumb) {
      existingBreadcrumb.remove()
    }

    // Add new breadcrumb script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb', 'true')
    script.textContent = JSON.stringify(breadcrumbData)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [title, description, keywords, image, pathname])

  return null
}
