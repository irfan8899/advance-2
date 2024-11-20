import axios from "axios";

// URL MockAPI
const BASE_URL = "https://6738ca244eb22e24fca8ffe8.mockapi.io/products";

// Ambil semua produk
export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Kembalikan data produk
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Tambahkan produk baru
export const addProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL, product);
    return response.data; // Kembalikan produk yang baru ditambahkan
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Perbarui produk berdasarkan ID
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedProduct);
    return response.data; // Kembalikan produk yang telah diperbarui
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Hapus produk berdasarkan ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; // Kembalikan produk yang telah dihapus
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
