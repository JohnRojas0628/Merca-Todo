const API_URL = 'https://cryptic-headland-77186.herokuapp.com/productos/';

export const listproducts = async (newproduct) => {
    return await fetch(API_URL,{
        method: 'POST',
        headers :{
            'Content-Type':'application/json'
        },
        body : JSON.stringify({
            "pro_name":String(newproduct.pro_name).trim(),
            "pro_provider":String(newproduct.pro_provider).trim(),
            "pro_existences":String(newproduct.pro_existences).trim(),
            "pro_date":String(newproduct.pro_date).trim(),
            "pro_description":String(newproduct.pro_description).trim(),
            "pro_category":String(newproduct.pro_category).trim(),
        })
    });
};

