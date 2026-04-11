import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMarkdown } from "@content-collections/markdown"
import rehypePrettyCode from "rehype-pretty-code"
import { z } from "zod"

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document, {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: {
              light: "min-light",
              dark: "vesper",
            },
          },
        ],
      ],
    })
    return {
      ...document,
      html,
    }
  },
})

export default defineConfig({
  collections: [blogs],
})
