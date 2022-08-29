import { Image } from 'antd';
import React from 'react';
// import { , Tooltip } from 'antd';
import style from '../index.module.less';

export default function ShoppingCard(props: any) {
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
      content: `<div style='color:#666;line-height:20px'>价格：<span style='color:red'>¥${item.productPrices}</span></div><div style='color:#666;line-height:20px'>颜色：<span style='color:#ccc'>${item.colorName}</span></div>`,
    };
    props.onSend(obj);
  };
  return (
    <div className={style.shopping_card}>
      <div className={style.shopping_card_title}>
        <div className={style.title_img}>
          {/* {props.option.tenantName} */}
          <Image width="26" src={props.option.tenantPhoto}></Image>
        </div>
        <div className={style.title_name}>{props.option.tenantName}</div>
        <div className={style.title_btn} onClick={() => sendMsg(props.option)}>
          发送
        </div>
      </div>
      <div className={style.shopping_card_content}>
        <div className={style.shopping_card_content_img_box}>
          <Image width="82" src={props.option.productPhoto}></Image>
        </div>
        <div className={style.shopping_card_content_box}>
          <div className={style.shopping_card_content_box_title}>
            {props.option.productName}
          </div>
          <div className={style.shopping_card_content_box_color}>
            {props.option.colorValue && (
              <span
                style={{
                  display: 'inline-block',
                  background: `#${props.option.colorValue}`,
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  marginRight: '11px',
                }}
              ></span>
            )}

            <span>{props.option.colorName}</span>
          </div>
          <div className={style.shopping_card_content_box_money}>
            ￥{props.option.productPrices}
          </div>
        </div>
      </div>
    </div>
  );
}
