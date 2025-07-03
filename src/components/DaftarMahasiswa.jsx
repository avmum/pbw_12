function DaftarMahasiswa({ data, onEdit }) {
  return (
    <ul className="space-y-3 text-left max-w-xl mx-auto">
      {data.map((mhs, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition duration-300 border border-gray-200"
        >
          <span className="text-gray-800 font-medium">
            {mhs.nama} <span className="text-sm text-gray-500">({mhs.nim})</span>
          </span>
          <button
            onClick={() => onEdit(index)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarMahasiswa;
