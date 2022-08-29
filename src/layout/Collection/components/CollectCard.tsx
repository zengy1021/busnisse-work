import React, { useState, useEffect } from 'react';
import style from '../index.module.less';
import LikeBox from './LikeBox';
import classnames from 'classnames';
import { Image } from 'antd';

export default function CollectCard(props: any) {
  const [mg, setMg] = useState(false);
  const sendMsg = (item: any) => {
    console.log(item);
    //   console.log(props.permit);
    //   echatSDK.config({
    //     debug: true, // 开启调试模式,所有业务系统调用的sdk接口都会在控制台打印出来，包括调用的方法以及参数。
    //     timestamp: , // 必填，生成签名的时间戳
    //     nonce: '', // 必填，生成签名的随机串
    //     signature: '',// 必填，签名
    // });
    const obj = {
      title: item.productName,
      imageUrl: item.productPhoto,
      // memo:`￥${item.productPrices}`,
      content: `<div style='color:#666;line-height:20px'>价格：<span style='color:red'>¥${item.productPrices}</span></div><div style='color:#666;line-height:20px'>评分：<span style='color:#ccc'>${item.point}</span></div>`,
    };
    props.onSend(obj);
  };
  useEffect(() => {
    // 数据变化时 更新组合渲染数据
    // console.log(props.rowCount);

    const flag = (props.index + 1) % props.rowCount == 0;
    setMg(flag);
  }, [props.rowCount]);
  return (
    <div className={style.card_box} style={{ marginRight: mg ? '0' : '30px' }}>
      <div className={style.image_box}>
        <Image width="150" src={props.option.productPhoto}></Image>
        <div
          className={classnames(style.like_icon, {
            [`${style.noLike_icon}`]: props.option.isFavorite == 0,
          })}
        ></div>
      </div>
      <div className={style.info_box}>
        <div className={style.info_name}>{props.option.productName}</div>
        <div className={style.info_count}>
          <div className={style.info_count_num}>{props.option.point}</div>
          <div className={style.info_count_hot}>
            <LikeBox likeNum={props.option.point} />
          </div>
        </div>
        <div className={style.info_money}>￥{props.option.productPrices}</div>
        <div
          className={style.card_shadow_box}
          onClick={() => sendMsg(props.option)}
        >
          <div className={style.card_shadow_box_btn}>发送</div>
        </div>
      </div>
    </div>
  );
}
