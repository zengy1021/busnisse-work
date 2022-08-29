import React, { Fragment, useState, useEffect } from 'react';
import ShoppingCard from './components/ShoppingCard';
import style from './index.module.less';
import api from './api';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
// import 'https://es.echatsoft.com/open/staff/jssdk-1.0.0.js';
const arr = [
  {
    img: '',
    title: '独立麦当劳',
    img2: '',
    name: '漫步者 产品103型号',
    color: '#E2CDB5',
    colorName: '香槟色',
    money: '￥1457.00',
  },
  {
    img: '',
    title: '纪梵希官方旗舰店',
    img2: '',
    name: 'Teint Couture Cushio 漫步者 产品103型号',
    color: '#F4CB9D',
    colorName: '自然肤色',
    money: '￥507.00',
  },
  {
    img: '',
    title: '纪梵希官方旗舰店',
    img2: '',
    name: 'Bloom Couture Eyes',
    color: '',
    colorName: '雏菊五彩盘',
    money: '￥430.00',
  },
  {
    img: '',
    title: '独立麦当劳',
    img2: '',
    name: '漫步者 产品103型号',
    color: '#E2CDB5',
    colorName: '香槟色',
    money: '￥1457.00',
  },
];
export default function ShoppingCar() {
  const [list, setList] = useState(arr);
  const [permit, setPermit] = useState({});
  const params = useLocation();
  const sendMsg = (msg: any) => {
    var visEvt = msg;
    // console.log(permit);
    // visEvt.timestamp = permit.timestamp;
    // visEvt.nonce = permit.nonce;
    // visEvt.signature = permit.signature;
    // // debugger;
    window.echatSDK.pushVisitorEvent(visEvt);
  };
  useEffect(() => {
    const urlParams = params.search.split('?')[1];
    console.log(qs.parse(urlParams));
    const param = qs.parse(urlParams);
    window.echatSDK.config({
      debug: true, // 开启调试模式,所有业务系统调用的sdk接口都会在控制台打印出来，包括调用的方法以及参数。
      timestamp: param.timestamp, // 必填，生成签名的时间戳
      nonce: param.nonce, // 必填，生成签名的随机串
      signature: param.signature, // 必填，签名
    });
    window.echatSDK.ready(function () {
      console.log('成功');

      // config信息验证成功后会执行ready方法，所有接口调用都必须在config接口获得结果之后
    });
    window.echatSDK.error(function (res: any) {
      console.log(2, res);
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体验证失败信息通过res查看。
    });
    api.getData({ companyId: '531521' }).then((res: any) => {
      // console.log(res);
      if (res.code === 200) {
        setList(res.data || []);
        // setUserInfo(res.data);
      }
    });
    return () => {};
  }, []);

  return (
    <div className={style.shopping_box}>
      {list.map((item, index) => (
        <Fragment key={index}>
          <ShoppingCard option={item} onSend={sendMsg} />
        </Fragment>
      ))}
    </div>
  );
}
