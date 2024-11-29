import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    price: "",
    mentor: "",
    roleMentor: "",
    photoUrl: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const apiURL = "https://6738ca244eb22e24fca8ffe8.mockapi.io/products";

  // Ambil daftar produk dari MockAPI
  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiURL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error Mengambil Data Produk",
        text: error.message,
      });
    }
  };

  // Tangani pengiriman formulir (Tambah/Edit produk)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Perbarui produk yang ada
        const response = await axios.put(`${apiURL}/${editId}`, formData);
        Swal.fire({
          icon: "success",
          title: "Produk berhasil diperbarui!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Produk diperbarui:", response.data);
      } else {
        // Tambah produk baru
        const response = await axios.post(apiURL, formData);
        Swal.fire({
          icon: "success",
          title: "Produk berhasil ditambahkan!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Produk ditambahkan:", response.data);
      }

      // Reset formulir
      setFormData({
        title: "",
        subtitle: "",
        price: "",
        mentor: "",
        roleMentor: "",
        photoUrl: "",
        description: "",
      });
      setIsEditing(false);
      setEditId(null);
      fetchProducts(); // Segarkan daftar produk
    } catch (error) {
      console.error("Error submitting form:", error.message);
      Swal.fire({
        icon: "error",
        title: isEditing ? "Gagal memperbarui produk" : "Gagal menambahkan produk",
        text: error.message,
      });
    }
  };

  // Tangani penghapusan produk
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Produk yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`${apiURL}/${id}`);
        Swal.fire({
          icon: "success",
          title: "Produk berhasil dihapus!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Produk dihapus:", response.data);
        fetchProducts(); // Segarkan daftar produk
      } catch (error) {
        console.error("Error deleting product:", error.message);
        Swal.fire({
          icon: "error",
          title: "Gagal menghapus produk",
          text: error.message,
        });
      }
    }
  };

  // Tangani pengeditan produk
  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
    setEditId(product.id);
    Swal.fire({
      icon: "info",
      title: "Mode Edit Diaktifkan",
      text: "Silakan ubah data dan klik Update Product",
      showConfirmButton: true,
    });
  };

  // Ambil produk saat komponen pertama kali dimuat
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Dashboard Admin
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Mentor"
            value={formData.mentor}
            onChange={(e) =>
              setFormData({ ...formData, mentor: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Role Mentor"
            value={formData.roleMentor}
            onChange={(e) =>
              setFormData({ ...formData, roleMentor: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className={`bg-${isEditing ? "yellow" : "blue"}-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-md hover:bg-${isEditing ? "yellow" : "blue"}-600 transition`}
          >
            {isEditing ? "Update Produk" : "Tambah Produk"}
          </button>
        </form>
      </div>

      <table className="w-full mt-8 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4 text-left">No</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Subtitle</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Mentor</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-100 transition-colors">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.subtitle}</td>
              <td className="p-4">Rp {product.price}</td>
              <td className="p-4">{product.mentor}</td>
              <td className="p-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
