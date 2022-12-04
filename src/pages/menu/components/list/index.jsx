import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import { AtIcon, AtTabsPane } from 'taro-ui';
import styles from './index.module.scss';
import { mockMenu, mockList } from './mockData';

const List = () => {
  // const [scrollIntoViewKey, setScrollIntoViewKey] = useState(0);
  const [activeKey, setActiveKey] = useState(0);
  const [menuList, setMenuList] = useState(mockMenu);
  const [list, setList] = useState(mockList);
  const [scrollTop, setScrollTop] = useState(0);
  const itemRef = useRef();

  const heightBoundaryList = useMemo(() => {
    const heightList = [];
    const cardHeight = 64;
    const ItemHeight = 99;
    const marginHeight = 11;
    let sumHeight = 0;

    list.forEach((item) => {
      // console.log(111, item);
      const currentHeight = cardHeight + ItemHeight * (item.length - 1) + marginHeight;
      sumHeight += currentHeight;
      heightList.push(sumHeight);
    });

    // console.log(222, heightList);

    return heightList;
  }, [list]);

  const onScroll = useCallback(
    ({ detail }) => {
      const { scrollTop: top } = detail;
      const index = heightBoundaryList.findIndex((item) => top < item);
      console.log(top, heightBoundaryList);

      setActiveKey(index);
    },
    [heightBoundaryList],
  );

  useEffect(() => {
    console.log('headerRef', itemRef);
  }, []);

  return (
    <View className={styles.wrap}>
      {/* 左侧菜单 */}
      <ScrollView className={styles.left} showScrollbar={false}>
        {menuList.map((item, index) => (
          <View
            className={`${styles.leftItem} ${activeKey === item.id ? styles.activeMenu : ''}`}
            key={index}
            onClick={() => {
              const height = index - 1 >= 0 ? heightBoundaryList[index - 1] : 0;
              setScrollTop(height);
            }}
          >
            <View className={styles.leftContent}>{item.title}</View>
          </View>
        ))}
      </ScrollView>

      {/* 右侧菜单 */}
      <ScrollView
        className={styles.right}
        scrollY
        // 在设置滚动条位置时使用动画过渡
        scrollWithAnimation
        // 设置竖向滚动条位置
        scrollTop={scrollTop}
        // 距底部多远时（单位px），触发 scrolltolower 事件
        // lowerThreshold={Threshold}
        // 距顶部多远时（单位px），触发 scrolltoupper 事件
        // upperThreshold={Threshold}
        // onScrollToLower={onScrollToLower}
        // 滚动到顶部，会触发 scrolltoupper 事件
        // onScrollToUpper={onScrollToUpper}
        onScroll={onScroll}
        // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
        // scrollIntoView={{ scrollIntoViewKey }}
        // showScrollbar={false}
      >
        {list.map((categoryItem, idx) => {
          const cardItem = categoryItem[0];
          const itemList = categoryItem.slice(1);
          return (
            <View key={idx} className={styles.rightItem} ref={itemRef}>
              <View className={styles.card} id={`card_${cardItem.id}`}>
                <View>{cardItem.title}</View>
                <View className={styles.cardSubTitle}>{cardItem.subTitle}</View>
              </View>

              {itemList.map((item, index) => (
                <View className={styles.coffeeItem} key={index} id={`product_${item.id}`}>
                  <Image src={item.imageUrl} className={styles.image} />
                  <View className={styles.info}>
                    <View>
                      <Text className={styles.title}>{item.title}</Text>
                    </View>
                    <View style={{ margin: '2px 0' }}>
                      <Text className={styles.desc}>{item.desc}</Text>
                    </View>
                    <View>
                      <Text className={styles.originalPrice}>
                        ¥{item.originalPrice}&nbsp;&nbsp;
                      </Text>
                      <Text className={styles.discountPrice}>¥{item.discountPrice}</Text>
                    </View>
                  </View>
                  <View className={`at-icon at-icon-add ${styles.icon}`}></View>
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default List;
