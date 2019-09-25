import React from 'react';
import Layout from '../components/layout';

class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <style>
          {`
            .body {
              height: 100vh;
              background-color: #f5f5f5;
            }
          `}
        </style>
        <Layout>
          <div className="body">
            <h1>
              This will be where my contact form will go so people can contact
              me
            </h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default ContactForm;
