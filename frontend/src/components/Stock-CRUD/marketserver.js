const API_URL = "https://cryptic-headland-77186.herokuapp.com/productos/";

export const listProduct = async () => {
  return await fetch(API_URL);
};
export const getProduct = async (productId) => {
  return await fetch(`${API_URL}${productId}`);
};

export const registerProduct = async (newProducto) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "pro_name": String(newProducto.pro_name).trim(),
      "pro_provider": String(newProducto.pro_provider).trim(),
      "pro_existences": String(newProducto.pro_existences).trim(),
      "pro_date": String(newProducto.pro_date).trim(),
      "pro_description": String(newProducto.pro_description).trim(),
      "pro_category": String(newProducto.pro_category).trim(),
    })
  });
};



export const deleteProduct = async (productosId) => {
  return await fetch(`${API_URL}${productosId}`, {
    method: 'DELETE'
  });
};

export const updateProduct = async (productosId, updatedProduct) => {
  return await fetch(`${API_URL}${productosId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "pro_name": String(updateProduct.pro_name).trim(),
      "pro_provider": String(updateProduct.pro_provider),
      "pro_existences": String(updateProduct.pro_existences),
      "pro_date": String(updateProduct.pro_date),
      "pro_description": String(updateProduct.pro_description),
      "pro_category": String(updateProduct.pro_category).trim(),


    })
  });
};










/* export const getProduct = async (productosId) => {
  return await fetch(`${API_URL}${productosId}`);
}; */


