import * as React from "react"
import { PageProps } from "gatsby"
import Page from "../../../components/page"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"

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

export default function JodieCorePage({ children, ...props }: PageProps<DataProps>) {
  return <Page {...props}>{children}</Page>
}
