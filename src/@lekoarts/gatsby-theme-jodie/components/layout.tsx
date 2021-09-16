/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Global } from "@emotion/react"
import Wrapper from "./layout-wrapper"
import Sidebar from "./sidebar"
import Footer from "./footer"
import Seo from "./seo"
import { SkipNavTarget, SkipNavTrigger } from "./skip-nav"

type LayoutProps = { children: React.ReactNode; color?: string }

const Layout = ({ children, color = `white` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*,*:after,*:before": {
          boxSizing: `border-box`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
          scrollBehavior: `smooth`,
        },
        img: {
          borderStyle: `none`,
        },
        ".icon": {
          width: `1em`,
          height: `1em`,
          margin: `0 .25em`,
          verticalAlign: `middle`,
        },
        "ul > li": {
          listStyleType: `square`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: theme.colors.primary,
          color: theme.colors.white,
        },
        "ul > li > code, ol > li > code, p > code": {
          color: `#393A34`,
          background: `#f6f8fa`,
          padding: 2,
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
          table: {
            width: '100%',
          },
          ".row": {
            flexDirection: "column",
          },
        },
        ".row": {
          display: "flex",
          alignItems: "flex-start",
        },
        table: {
          minWidth: '50%',
          maxWidth: 'calc(100% - 2rem)',
        },
        "table tr td": {
          borderTop: "1px solid",
          verticalAlign: "top",
        },
        "table th": {
          textAlign: "left",
        },
        h2: {
          textTransform: 'uppercase',
        },
        "h4 > small": {
          fontSize: '.7em',
          display: 'block',
          textTransform: 'uppercase',
          fontWeight: 'normal',
          // opacity: .5,
        },
        "h4 > small > em": {
          display: 'inline-block',
          backgroundColor: '#eee',
          padding: '.125em .5em',
          marginLeft: '-.5em',
          marginBottom: '.25em',
          borderRadius: '.25em',
        },
        ".skill-level": {
          textAlign: 'right',
          display: 'block',
        },
        "@media print": {
          ".screen-only": {
            display: "none",
          },
        },
      })}
    />
    <Seo />
    <SkipNavTrigger />
    <Wrapper>
      <Sidebar bg={color} />
      <main sx={{ gridColumnStart: [1, 1, 1, 2] }}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer bg={color} />
    </Wrapper>
  </React.Fragment>
)

export default Layout
