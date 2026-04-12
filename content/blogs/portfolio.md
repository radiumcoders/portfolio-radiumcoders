---
title: "Building My Developer Portfolio"
summary: "A deep dive into how I built my interactive portfolio using React, TanStack Router, and Content Collections."
date: "2026-04-12"
---

# Building My Developer Portfolio

Welcome to my very first blog post! In this post, I'll walk you through the process of building a modern developer portfolio.

## The Tech Stack

When deciding on the tools for my portfolio, I wanted something fast, reliable, and easy to maintain. Here is what I chose:

- **Framework**: `TanStack Start` powered by `Vite` under the hood.
- **Routing**: `TanStack Router` for type-safe routing.
- **Content**: `Content Collections` to manage Markdown blogs with full type-safety.
- **Styling**: `Tailwind CSS` and `shadcn/ui`.

## Why TanStack Start instead of Next.js?
I decided to go with **TanStack Start**. Because it uses `TanStack Router` for routing, it provides a fast and performant experience with incredible DX (Developer Experience). For me, it was the best choice for a modern web app.

I have used `Next.js` before, but I wanted to try something new this time—and I highly recommend stepping out of your comfort zone. The DX with TanStack Start is mind-blowing: it's fast, predictable, and highly effective.

## Why Content Collections?

Managing Markdown files can sometimes be tedious. However, with `@content-collections/markdown`, the process is seamless. It compiles Markdown to HTML during the build process, making the site incredibly fast and type-safe.

Just run:
`pnpx content-collections install`

That's it! Now you can start writing blogs in the content folder; it handles the entire setup for you by default. :D

## Why Tailwind and shadcn/ui?

**Why not?** It’s 2026, not 2014!