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

const obtenerProductosPorCategoria = async (categoriaId) => {
  try {
    const { data } = await clienteAPI.get(`productos/?categoria=${categoriaId}`);
    return data;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    throw error;
  }
};

const obtenerProductoPorId = async (id) => {
  try {
    const { data } = await clienteAPI.get(`productos/${id}/`);
    return data;
  } catch (error) {
    console.error('Error al obtener producto por id:', error);
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

// Funciones CRUD para Clientes
const obtenerClientes = async () => {
  try {
    const { data } = await clienteAPI.get('clientes/');
    return data;
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    throw error;
  }
};

const crearCliente = async (cliente) => {
  try {
    const { data } = await clienteAPI.post('clientes/', cliente);
    return data;
  } catch (error) {
    console.error('Error al crear cliente:', error);
    throw error;
  }
};

const actualizarCliente = async (id, cliente) => {
  try {
    const { data } = await clienteAPI.put(`clientes/${id}/`, cliente);
    return data;
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    throw error;
  }
};

const eliminarCliente = async (id) => {
  try {
    await clienteAPI.delete(`clientes/${id}/`);
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    throw error;
  }
};

// Funciones CRUD para Ventas
const obtenerVentas = async () => {
  try {
    const { data } = await clienteAPI.get('ventas/');
    return data;
  } catch (error) {
    console.error('Error al obtener ventas:', error);
    throw error;
  }
};

const crearVenta = async (venta) => {
  try {
    const { data } = await clienteAPI.post('ventas/', venta);
    return data;
  } catch (error) {
    console.error('Error al crear venta:', error);
    throw error;
  }
};

const actualizarVenta = async (id, venta) => {
  try {
    const { data } = await clienteAPI.put(`ventas/${id}/`, venta);
    return data;
  } catch (error) {
    console.error('Error al actualizar venta:', error);
    throw error;
  }
};

const eliminarVenta = async (id) => {
  try {
    await clienteAPI.delete(`ventas/${id}/`);
  } catch (error) {
    console.error('Error al eliminar venta:', error);
    throw error;
  }
};

// Exportación de todas las funciones para ser usadas en otros componentes
export {
  obtenerCategorias, crearCategoria, actualizarCategoria, eliminarCategoria,
  obtenerProductos, obtenerProductosPorCategoria, obtenerProductoPorId, crearProducto, actualizarProducto, eliminarProducto,
  obtenerClientes, crearCliente, actualizarCliente, eliminarCliente,
  obtenerVentas, crearVenta, actualizarVenta, eliminarVenta
};
