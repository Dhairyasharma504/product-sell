import { NextSeo } from 'next-seo';
import Banner from '../components/Banner';
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
      <Banner />
      <ProductList />
    </Layout>
  );
}

export default Index;
