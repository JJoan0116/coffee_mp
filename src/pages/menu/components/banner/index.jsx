import React from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import bannerFir from '../../../../assets/images/banner-fir.png';
import bannerSec from '../../../../assets/images/banner-sec.png';
import bannerThr from '../../../../assets/images/banner-thr.png';

const Banner = () => {
  return (
    <Swiper
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots
      autoplay
      interval='3000'
    >
      <SwiperItem>
        <View>
          <Image src={bannerFir} style={{ height: '150px', width: '100%' }} />
        </View>
      </SwiperItem>
      <SwiperItem>
        <Image src={bannerSec} style={{ height: '150px', width: '100%' }} />
      </SwiperItem>
      <SwiperItem>
        <Image src={bannerThr} style={{ height: '150px', width: '100%' }} />
      </SwiperItem>
    </Swiper>
  );
};

export default Banner;
