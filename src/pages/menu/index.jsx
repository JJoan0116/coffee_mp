import React, { Component } from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';
import Banner from './components/banner';
import styles from './index.module.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    console.log(1111, styles);
    return (
      <View className={styles.wrap}>
        <Banner />
      </View>
    );
  }
}
