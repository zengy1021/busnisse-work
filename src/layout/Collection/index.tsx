import React, { Fragment, useState, useEffect } from 'react';
import CollectCard from './components/CollectCard';
import style from './index.module.less';
import api from './api';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
const test = [
  {
    img: '',
    isLike: 0,
    title: 'FENTY BEAUTY • 7.1g',
    like: '4.2',
    money: '￥246.00',
  },
  {
    img: '',
    isLike: 1,
    title: 'CAUDALIE• 30ml',
    like: '5.0',
    money: '￥528.00',
  },
  {
    img: '',
    isLike: 1,
    title: '布质斜挎包- 蓝色',
    like: '4.2',
    money: '￥23,551.00',
  },
  {
    img: '',
    isLike: 0,
    title: '海纽约大衣- 黑色',
    like: '3.8',
    money: '￥6,200.00',
  },
  {
    img: '',
    isLike: 1,
    title: 'FENTY BEAUTY • 7.1g',
    like: '4.2',
    money: '￥246.00',
  },
  // {
  //   img: '',
  //   isLike: 1,
  //   title: 'FENTY BEAUTY • 7.1g',
  //   like: '4.2',
  //   money: '￥246.00',
  // },
];
export default function Collection() {
  const [list, setList] = useState(test);
  const [rowCount, setRowCount] = useState(0);
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
  const resizeUpdate = () => {
    // 通过事件对象获取浏览器窗口的高度
    let w = window.innerWidth;
    w = w - 40; // 减去盒子内边距
    let colNum = Math.floor(w / 150) || 1;

    if (colNum !== 1) {
      let newW = w - 30 * (colNum - 1);
      colNum = Math.floor(newW / 150) || 1;
    }

    setRowCount(colNum);
    // setWidth(w);
  };
  useEffect(() => {
    // 页面变化时获取浏览器窗口的大小
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
      console.log(res);
      if (res.code === 200) {
        setList(res.data || []);
        // setUserInfo(res.data);
      }
    });
    resizeUpdate();
    window.addEventListener('resize', resizeUpdate);
    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', resizeUpdate);
    };
  }, []);
  useEffect(() => {
    // 数据变化时 更新组合渲染数据
    resizeUpdate();
  }, [rowCount]);
  return (
    <div className={style.collection_box}>
      {list.map((item, index) => (
        <Fragment key={index}>
          <CollectCard
            rowCount={rowCount}
            index={index}
            option={item}
            onSend={sendMsg}
          />
        </Fragment>
      ))}
    </div>
  );
}
