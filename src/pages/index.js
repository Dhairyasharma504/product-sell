import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import config from '../utils/config';

function Index() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <p>Hero components here</p>
      <p>Show all products components here</p>
    </Layout>
  );
}

export default Index;
