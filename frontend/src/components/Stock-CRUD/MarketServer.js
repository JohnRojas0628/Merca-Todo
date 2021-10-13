const API_URL = "https://cryptic-headland-77186.herokuapp.com/productos/";

export const listProduct = async () => {
  return await fetch(API_URL);
};

export const registerProduct = async (newProducto) => {
  return await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "pro_name": String(newProducto.pro_name).trim(),
      "pro_provider": String(newProducto.pro_provider),
      "pro_existences": parseInt(newProducto.pro_existences).tri(),
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
      "pro_provider": parseInt(updateProduct.pro_provider),
      "pro_existences": String(updateProduct.pro_existences),
      "pro_description": String(updateProduct.pro_description),
      "pro_category": String(updateProduct.pro_category).trim(),


    })
  });
};





/* export const getProduct = async (productosId) => {
  return await fetch(`${API_URL}${productosId}`);
}; */