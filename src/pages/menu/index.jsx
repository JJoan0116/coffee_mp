import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Banner from './components/banner';
import List from './components/list';
import styles from './index.module.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={styles.wrap}>
        <Banner />
        <List />
      </View>
    );
  }
}
