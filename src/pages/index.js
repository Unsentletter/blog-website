import React from 'react';

import Layout from '../components/layout';

import styles from './styles/index.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* Bit of SEO here when I work out how it works*/}
        <Layout>
          <div className={styles.body}>
            <div className={styles.textWrapper}>
              <h1 className={styles.mainHeader}>
                I like to write code and play with fish tanks
              </h1>
              <h4 className={styles.subHeader}>
                This is a blog where I can write about both
              </h4>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

// {posts.map(({ node }) => {
//   const title = node.frontmatter.title || node.fields.slug
//   return (
//     <article key={node.fields.slug}>
//       <header>
//         <h3
//           style={{
//             marginBottom: rhythm(1 / 4),
//           }}
//         >
//           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//             {title}
//           </Link>
//         </h3>
//         <small>{node.frontmatter.date}</small>
//       </header>
//       <section>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: node.frontmatter.description || node.excerpt,
//           }}
//         />
//       </section>
//     </article>
//   )
// })}
