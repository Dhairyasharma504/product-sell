import LayoutDashboard from '../../components/DashboardLayout';
import ProductsList from '../../components/ProductsList';

const products = [
  {
    id: '1',
    name: 'Pipe',
    status: 'active',
    price: 500,
    updatedAt: '20-11-2022',
  },
  {
    id: '1',
    name: 'Pipe',
    status: 'active',
    price: 500,
    updatedAt: '20-11-2022',
  },
  {
    id: '1',
    name: 'Pipe',
    status: 'active',
    price: 500,
    updatedAt: '20-11-2022',
  },
];

export default function Home() {
  return (
    <LayoutDashboard>
      <div className="mt-8 container mx-auto">
        <h3 className="mb-4">All Products</h3>
        <ProductsList products={products} />
      </div>
    </LayoutDashboard>
  );
}
