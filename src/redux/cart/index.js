export const types = {
  add: 'CART_ADD',
  delete: 'CART_DELETE',
};

const initialState = {
  // --------  购物车列表 --------
  cartList: [],
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case types.add:
      const { cartList } = state;
      // const { data } = payload;
      console.log('reducer', cartList, payload);

      return {
        ...state,
        cartList: [...cartList, payload],
      };
    case types.delete:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export const actions = {
  addCart(data) {
    console.log('actions', data);

    return {
      type: types.add,
      payload: data,
    };
  },
  delete() {
    return (dispatch) => {
      //
    };
  },
};
