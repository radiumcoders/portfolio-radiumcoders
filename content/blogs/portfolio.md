---
title: "Building My Developer Portfolio"
summary: "A deep dive into how I built my interactive portfolio using React, TanStack Router, and Content Collections."
date: "2024-05-15"
---

# Building My Developer Portfolio [ DEMO PAGE ]

Welcome to my very first blog post! In this post, I'll walk you through the process of building a modern developer portfolio.

## The Tech Stack

When deciding on the tools for my portfolio, I wanted something fast, reliable, and easy to maintain. Here is what I chose:

- **Framework**: React with Vite for lightning-fast HMR and building.
- **Routing**: TanStack Router for type-safe routing.
- **Content**: Content Collections to easily write and manage markdown blogs.
- **Styling**: Tailwind CSS and shadcn/ui.

## Why Content Collections?

Managing markdown files can sometimes be tedious. However, with `@content-collections/markdown`, the process is seamless. It compiles markdown to HTML during the build process, making the site incredibly fast and type-safe.

```typescript
// Example from my configuration
import { defineCollection } from "@content-collections/core"

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
  }),
})
```

## Conclusion

Building this portfolio has been a fantastic learning experience. Stay tuned for more posts about web development, tooling, and best practices!