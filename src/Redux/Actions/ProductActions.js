export const ProductAdd = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};

export const ProductDelete = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const ProductInfo = (id) => {
  return {
    type: "INFO_PRODUCT",
    payload: id,
  };
};

export const ProductUpdate = (data) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: data,
  };
};

export const DBUpdateProduct = (data) => {
  return {
    type: "DB_PRODUCT",
    payload: data,
  };
};

