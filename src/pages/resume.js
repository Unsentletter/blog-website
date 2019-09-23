import React from 'react';
import Layout from '../components/layout';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <style jsx>
          {`
            .body {
              height: 100vh;
              background-color: #f5f5f5;
            }
          `}
        </style>
        <Layout>
          <div className="body">
            <h1>This will be where my resume will go</h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Resume;
