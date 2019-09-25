import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import styles from "./styles/tech-blog.module.css"

class TechBlog extends React.Component {
  render() {
    console.log(this.props.data.allMarkdownRemark.edges[0].node)
    return (
      <div>
        <Layout>
          <div className={styles.body}>
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <div>
                <div>
                  {node.frontmatter.title} - {node.frontmatter.date}
                </div>
                <div>{node.excerpt}</div>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    )
  }
}

export default TechBlog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
