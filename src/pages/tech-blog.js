import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import styles from "./styles/tech-blog.module.css"

class TechBlog extends React.Component {
  render() {
    console.log(
      this.props.data.allMarkdownRemark.edges[0].node.frontmatter.title
    )
    return (
      <div>
        <Layout>
          <div className={styles.body}>
            {this.props.data.allMarkdownRemark.edges[0].node.frontmatter.title}
            {this.props.data.allMarkdownRemark.edges[0].node.html}
          </div>
        </Layout>
      </div>
    )
  }
}

export default TechBlog

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
