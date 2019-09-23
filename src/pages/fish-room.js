import React from 'react';
import Layout from '../components/layout';

import styles from './styles/aquarium-blog.module.css';

class FishRoom extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Layout>
          <div className={styles.body}>
            <h1>This will be where all my fun aquarium stuff will go</h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default FishRoom;
