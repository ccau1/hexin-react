import React from 'react';
import Layout from './Layout';
import Content from './Content';
import Image from '../../Components/common/Image';

export default ({ children }) => {
  return (
    <Layout>
      <Image
        background
        src={'https://isomorphic.redq.io/static/media/sign.adf5846b.jpg'}
      />
      <Content width={400} center>
        {children}
      </Content>
    </Layout>
  );
};
