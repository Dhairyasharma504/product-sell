import Swal from 'sweetalert2';
import LayoutDashboard from '../../components/DashboardLayout';
import TableHead from '../../components/elements/TableHead';

const Orders = () => {
  const handleRemove = () => {
    Swal.fire({
      title: 'Do you want to delete the product?',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Success!',
          'Your product is deleted successfully.',
          'success',
        );
      }
    });
  };
  return (
    <LayoutDashboard>
      <div className="mt-8">
        <h3 className="mb-4">Orders</h3>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHead
              tableHead={[
                'customer',
                'Address',
                'Menu',
                'Quantity',
                'Status',
                'Actions',
              ]}
            />
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-2 text-left ">
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="portraits"
                    />

                    <span className="font-medium">Rimple</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center">
                    <span>24-saraba nagar</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-left">
                  <div className="">Fresh salad bowl</div>
                </td>
                <td className="py-3 px-3 text-left">
                  <div className="pl-4">2</div>
                </td>
                <td className="py-3 px-3 text-left">
                  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Deilvering
                  </span>
                </td>
                <td className="py-3 px-3 text-left ">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>

                    <button onClick={handleRemove} type="button" className="">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutDashboard>
  );
};
export default Orders;
