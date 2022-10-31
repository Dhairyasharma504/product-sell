import LayoutDashboard from '../../components/DashboardLayout';
import TableHead from '../../components/elements/TableHead';
import Heading from '../../components/elements/Heading';

const orders = [
  { id: 'sodal', status: 'failed', amount: 500, userName: 'dhairya' },
  { id: 'reeru', status: 'canceled', amount: 300, userName: 'bobby' },
  { id: 'ORDER76770', status: 'pending', amount: 280, userName: 'rimple' },
];
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
              tableHead={['Order Id', 'User Name', 'Amount', 'Status']}
            />
            <tbody>
              {orders.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="py-4 px-6">{item.userName}</td>
                  <td className="py-4 px-6">$ {item.amount}</td>
                  <td className="py-4 px-6 capitalize">
                    {item.status === 'canceled' && (
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        {item.status}
                      </span>
                    )}
                    {item.status === 'complete' && (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        {item.status}
                      </span>
                    )}
                    {item.status === 'pending' && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                        {item.status}
                      </span>
                    )}
                    {item.status === 'failed' && (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                        {item.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutDashboard>
  );
}
