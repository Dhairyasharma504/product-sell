import LayoutDashboard from '../../components/DashboardLayout';
import TableHead from '../../components/elements/TableHead';
import Heading from '../../components/elements/Heading';

const stats = [
  {
    id: 1,
    label: 'Total Orders',
    value: 300,
  },
  {
    id: 2,
    label: 'Today Orders',
    value: 14,
  },
  {
    id: 3,
    label: 'Pending Orders',
    value: 10,
  },
  {
    id: 4,
    label: 'Cancelled Orders',
    value: 3,
  },
];
export default function Home() {
  return (
    <LayoutDashboard>
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <div className="shadow-lg px-3 py-5 rounded-md text-center bg-primary hover:bg-brand cursor-pointer">
            <Heading className="text-white">{item.label}</Heading>
            <Heading size="4xl" className="text-white">
              {item.value}
            </Heading>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="mb-4">Latest Orders</h3>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHead
              tableHead={['Product name', 'Color', 'Category', 'Price']}
            />
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  burger
                </th>
                <td className="py-4 px-6">Sliver</td>
                <td className="py-4 px-6">Laptop</td>
                <td className="py-4 px-6">$2999</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
              </tr>{' '}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
              </tr>{' '}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
              </tr>{' '}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutDashboard>
  );
}
