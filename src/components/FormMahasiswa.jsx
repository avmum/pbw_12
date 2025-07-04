function FormMahasiswa({ form, onChange, onSubmit, isEdit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-8 space-y-4 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border border-purple-200"
    >
      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        {isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
      </h2>

      <input
        type="text"
        name="nama"
        placeholder="Nama Lengkap"
        value={form.nama}
        onChange={onChange}
        className="w-full border border-purple-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />

      <input
        type="text"
        name="nim"
        placeholder="NIM"
        value={form.nim}
        onChange={onChange}
        className="w-full border border-purple-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition duration-300"
      >
        {isEdit ? "Update" : "Tambah"}
      </button>
    </form>
  );
}

export default FormMahasiswa;
