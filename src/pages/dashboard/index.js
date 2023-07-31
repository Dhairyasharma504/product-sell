import { useState, useEffect } from 'react';
import LayoutDashboard from '../../components/DashboardLayout';
import ProductsList from '../../components/ProductsList';
import { getProducts } from '../../utils/client';

// const products = [
//   {
//     id: '1',
//     name: 'Pipe',
//     status: 'active',
//     price: 500,
//     updatedAt: '20-11-2022',
//   },
//   {
//     id: '1',
//     name: 'Tanki',
//     status: 'active',
//     price: 500,
//     updatedAt: '20-11-2022',
//   },
//   {
//     id: '1',
//     name: 'Moter',
//     status: 'active',
//     price: 500,
//     updatedAt: '20-11-2022',
//   },
// ];
// const stats = [
//   {
//     id: 1,
//     label: 'Total Orders',
//     value: 300,
//   },
//   {
//     id: 2,
//     label: 'Today Orders',
//     value: 14,
//   },
//   {
//     id: 3,
//     label: 'Pending Orders',
//     value: 10,
//   },
//   {
//     id: 4,
//     label: 'Cancelled Orders',
//     value: 3,
//   },
// ];
export default function Home() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(products || []);
  const handleSearch = (value) => {
    console.log('value', value);
    if (value === '' || !value) {
      setData(products);
    } else if (value?.length > 0) {
      const result = products.filter((item) =>
        item?.name?.toLowerCase().includes(value?.toLowerCase()),
      );
      console.log('result', result);

      setData(result || []);
    }
  };
  console.log(products, 'products');
  const getAllProducts = async () => {
    const res = await getProducts();
    setProducts(res);
    setData(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <LayoutDashboard onSearch={handleSearch}>
      {/* <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <div className="shadow-lg px-3 py-5 rounded-md text-center bg-primary hover:bg-brand cursor-pointer">
            <Heading className="text-white">{item.label}</Heading>
            <Heading size="4xl" className="text-white">
              {item.value}
            </Heading>
          </div>
        ))}
      </div> */}
      <div className="mt-8">
        <h3 className="mb-4 capitalize">All product</h3>
        <ProductsList products={data} />
      </div>
    </LayoutDashboard>
  );
}
