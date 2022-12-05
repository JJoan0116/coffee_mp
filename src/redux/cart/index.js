import coffeePng from '../../assets/images/coffee.png';

export const types = {
  add: 'CART_ADD',
  addNum: 'CART_ADD_NUM',
  delete: 'CART_DELETE',
};

const initialState = {
  // --------  购物车列表 --------
  cartList: {
    14: {
      cartNum: 2,
      id: 14,
      title: '丝绒拿铁',
      desc: '2022拿铁冠军',
      originalPrice: 32,
      discountPrice: 28,
      handPrice: 15,
      imageUrl: coffeePng,
    },
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case types.add:
      const { cartList } = state;
      console.log('reducer', cartList, payload);

      let product = cartList[payload.id];

      if (product) {
        product.cartNum += 1;
      } else {
        product = {
          cartNum: 1,
          ...payload,
        };
      }

      return {
        ...state,
        cartList: { ...cartList, [payload.id]: product },
      };

    case types.addNum:
      const { id } = payload;
      return {
        ...state,
        cartList: { ...cartList, [id]: payload },
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
    return {
      type: types.add,
      payload: data,
    };
  },
  addNum(data) {
    return {
      type: types.addNum,
      payload: data,
    };
  },
  // delete() {},
};
