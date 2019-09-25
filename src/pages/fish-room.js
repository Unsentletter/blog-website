import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';

import styles from './styles/aquarium-blog.module.css';

const FishRoom = ({ data }) => {
  console.log('DATA', data);
  return (
    <div>
      <Layout>
        <div className={styles.body}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{' '}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default FishRoom;

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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
