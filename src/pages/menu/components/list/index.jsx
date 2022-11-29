import React, { useState, useCallback } from 'react';
import { View, Text, Image } from '@tarojs/components';
import { AtIcon, AtTabsPane } from 'taro-ui';
import styles from './index.module.scss';
import { mockMenu, mockList } from './mockData';

const List = () => {
  const [current, setCurrent] = useState(0);
  const [menuList, setMenuList] = useState(mockMenu);
  const [list, setList] = useState(mockList);

  const handleClick = useCallback((v) => {
    setCurrent(v);
  }, []);

  return (
    <View className={styles.wrap}>
      <View className={styles.left}>
        {menuList.map((item, index) => (
          <View className={styles.leftItem} key={index}>
            <View className={styles.leftContent}>{item.title}</View>
          </View>
        ))}
      </View>
      <View className={styles.right}>
        <View className={styles.rightContent}>
          {list.map((item, index) => (
            <View className={styles.rightItem} key={index}>
              <Image src={item.imageUrl} className={styles.image} />
              <View className={styles.info}>
                <View>
                  <Text className={styles.title}>{item.title}</Text>
                </View>
                <View style={{ margin: '2px 0' }}>
                  <Text className={styles.desc}>{item.desc}</Text>
                </View>
                <View>
                  <Text className={styles.originalPrice}>¥{item.originalPrice}&nbsp;&nbsp;</Text>
                  <Text className={styles.discountPrice}>¥{item.discountPrice}</Text>
                </View>
                {/* <Text className={styles.handPrice}>{item.handPrice}</Text> */}
              </View>
              <View className={`at-icon at-icon-add ${styles.icon}`}></View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default List;
