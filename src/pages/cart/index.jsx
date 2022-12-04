import React, { Component, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useSelector } from 'react-redux';
import './index.module.scss';

const App = () => {
  const { cartList } = useSelector(({ cart }) => {
    console.log(1111, cart);
    return cart;
  });
  return <View>1111</View>;
};

export default App;
