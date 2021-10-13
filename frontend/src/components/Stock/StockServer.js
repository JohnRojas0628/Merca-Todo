const API_URL = 'https://cryptic-headland-77186.herokuapp.com/productos/';

export const listProducts = async () => {
    return await fetch(API_URL);
};

