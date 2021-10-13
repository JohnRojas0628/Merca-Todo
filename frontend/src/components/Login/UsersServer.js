const API_URL = 'https://cryptic-headland-77186.herokuapp.com/usuarios/';

export const listUsers = async () => {
    return await fetch(API_URL);
};

