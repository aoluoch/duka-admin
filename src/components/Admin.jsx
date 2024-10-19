import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [editProduct, setEditProduct] = useState(null);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dukaapp-3.onrender.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add a new product
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dukaapp-2.onrender.com/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', description: '', image: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Update a product
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://dukaapp-2.onrender.com/products/${editProduct.id}`, editProduct);
      setProducts(products.map(product => product.id === editProduct.id ? response.data : product));
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://dukaapp-2.onrender.com/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Admin Panel</h1>

      {/* Add Product Form */}
      <form onSubmit={addProduct} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 w-full"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 w-full"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="border p-2 w-full"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="border p-2 w-full"
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
      </form>

      {/* Products List */}
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            {editProduct && editProduct.id === product.id ? (
              <form onSubmit={updateProduct}>
                <input
                  type="text"
                  value={editProduct.name}
                  onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                  className="border p-2 w-full mb-2"
                />
                <input
                  type="number"
                  value={editProduct.price}
                  onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                  className="border p-2 w-full mb-2"
                />
                <textarea
                  value={editProduct.description}
                  onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                  className="border p-2 w-full mb-2"
                />
                <input
                  type="text"
                  value={editProduct.image}
                  onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                  className="border p-2 w-full mb-2"
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2">Save</button>
                <button onClick={() => setEditProduct(null)} className="bg-gray-500 text-white px-4 py-2 ml-2">Cancel</button>
              </form>
            ) : (
              <div>
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                <h2 className="font-bold">{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => setEditProduct(product)} className="bg-yellow-500 text-white px-4 py-2 mt-2">Edit</button>
                <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-4 py-2 mt-2 ml-2">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
