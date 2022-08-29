import React from 'react';
import style from '../index.module.less';
export default function Like(props: any) {
  if (props.index + 1 <= props.likeNum) {
    return <div className={style.like_icon_item}></div>;
  }
  return <div className={style.nolike_icon_item}></div>;
}
