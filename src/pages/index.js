import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import ProductList from '../components/product/ProductList';
import config from '../utils/config';

function Index() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <ProductList />
      <p>Show all products components here</p>
    </Layout>
  );
}

export default Index;
