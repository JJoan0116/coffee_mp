import React, { useCallback } from 'react';
import { View, Image } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { AtInputNumber } from 'taro-ui';

import { actions } from '../../redux/cart/index';
import styles from './index.module.scss';

const App = () => {
  const { cartList } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const onNumChange = useCallback(
    (num, item) => {
      console.log(1111, num, item);
      dispatch(actions.addNum({ ...item, cartNum: num }));
    },
    [dispatch],
  );

  return (
    <View className={styles.wrap}>
      {(Object.keys(cartList) || []).map((key) => {
        const item = cartList[key];
        return (
          <View className={styles.item} key={key}>
            <Image src={item.imageUrl} className={styles.image} />
            <View className={styles.info} key={item}>
              <View className={styles.title}>{item.title}</View>
              <View className={styles.label}>冰/不另外加冰</View>
              <View className={styles.price}>¥{item.handPrice}</View>
            </View>
            <View className={styles.inputNum}>
              <AtInputNumber
                onChange={(num) => onNumChange(num, item)}
                min={0}
                max={10}
                step={1}
                value={item.cartNum}
                width={60}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default App;
