function DaftarMahasiswa({ data, onEdit }) {
  return (
    <ul className="space-y-3 text-left max-w-xl mx-auto">
      {data.map((mhs, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 rounded-lg bg-white border border-purple-200 shadow-md hover:shadow-lg transition duration-300"
        >
          <span className="text-gray-800 font-medium">
            {mhs.nama}{' '}
            <span className="text-sm text-gray-500">({mhs.nim})</span>
          </span>
          <button
            onClick={() => onEdit(index)}
            className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarMahasiswa;
