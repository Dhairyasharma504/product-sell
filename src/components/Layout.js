import Header from './global/Header';
import Footer from './global/Footer';

const Layout = ({ children }) => (
  <div className=" mx-auto min-h-screen">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
