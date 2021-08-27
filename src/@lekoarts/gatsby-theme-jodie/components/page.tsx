/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "./layout"
import Seo from "./seo"

type DataProps = {
  page: {
    title: string
    slug: string
    excerpt: string
    body: string
    color: string
    custom: boolean
    cover: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
  images: {
    nodes: {
      name: string
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }[]
  }
}

const Page: React.FC<PageProps<DataProps>> = ({ data: { page, images }, location }) => {
  return (
    <Layout color={page.color || undefined}>
      <Seo
        title={page.title}
        description={page.excerpt}
        pathname={location.pathname}
        image={page.cover.childImageSharp.resize.src}
      />
      <div
        sx={{
          variant: page.custom ? `content.custom` : `content.page`,
        }}
        data-testid="page-content"
      >
        <MDXRenderer>{page.body}</MDXRenderer>
      </div>
      {images?.nodes.length > 0 && <div sx={{ variant: `content.imageList` }}>
        {images.nodes.map((image) => (
          <GatsbyImage key={image.name} alt={image.name} image={image.childImageSharp.gatsbyImageData} />
        ))}
      </div>}
    </Layout>
  )
}

export default Page
