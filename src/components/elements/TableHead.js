export default function TableHead({ tableHead }) {
  return (
    <thead className="min-w-max w-full table-auto">
      <tr className="bg-black text-white uppercase text-sm leading-normal">
        {tableHead &&
          tableHead.map((item) => (
            <th
              key={item.id ? item.id : item}
              className={`${item.className} px-6 py-3 border-b-2 border-primary text-xs font-semibold tracking-wider `}
            >
              {item.value ? item.value : item}
            </th>
          ))}
      </tr>
    </thead>
  );
}
