import React, { useEffect } from 'react';
import { Image } from 'antd';
import style from '../index.module.less';

export default function Card(props: any) {
  useEffect(() => {
    // console.log('option', props.option);
  }, []);
  return (
    <div className={style.card_item}>
      <div className={style.card_title}>{props.option.name}</div>
      <div className={style.card_info}>{props.option.tip}</div>
      <div className={style.card_img}>
        <div className={style.card_img_box}>
          <Image
            width={42}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div className={style.card_img_info}>{props.option.imgInfo.tip1}</div>
        <div className={style.card_img_info2}>{props.option.imgInfo.tip2}</div>
      </div>
    </div>
  );
}
