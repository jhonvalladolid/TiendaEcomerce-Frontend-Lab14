import axios from 'axios';

// Configuración base de axios
const clienteAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
});

// Funciones CRUD para Categorías
const obtenerCategorias = async () => {
  try {
    const { data } = await clienteAPI.get('categorias/');
    return data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

const crearCategoria = async (categoria) => {
  try {
    const { data } = await clienteAPI.post('categorias/', categoria);
    return data;
  } catch (error) {
    console.error('Error al crear categoría:', error);
    throw error;
  }
};

const actualizarCategoria = async (id, categoria) => {
  try {
    const { data } = await clienteAPI.put(`categorias/${id}/`, categoria);
    return data;
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    throw error;
  }
};

const eliminarCategoria = async (id) => {
  try {
    await clienteAPI.delete(`categorias/${id}/`);
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    throw error;
  }
};

// Funciones CRUD para Productos
const obtenerProductos = async () => {
  try {
    const { data } = await clienteAPI.get('productos/');
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

const crearProducto = async (producto) => {
  try {
    const { data } = await clienteAPI.post('productos/', producto);
    return data;
  } catch (error) {
    console.error('Error al crear producto:', error);
    throw error;
  }
};

const actualizarProducto = async (id, producto) => {
  try {
    const { data } = await clienteAPI.put(`productos/${id}/`, producto);
    return data;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
  }
};

const eliminarProducto = async (id) => {
  try {
    await clienteAPI.delete(`productos/${id}/`);
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    throw error;
  }
};

// Exportación de todas las funciones para ser usadas en otros componentes
export {
  obtenerCategorias, crearCategoria, actualizarCategoria, eliminarCategoria,
  obtenerProductos, crearProducto, actualizarProducto, eliminarProducto
};
