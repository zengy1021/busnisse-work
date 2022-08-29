import React, { Fragment } from 'react';
import style from '../index.module.less';

import Like from './Like';
let boxList = Array.from({ length: 5 }, (value, key) => key + 1);
export default function LikeBox(props: any) {
  return (
    <div className={style.info_like_box}>
      {boxList.map((item, index) => (
        <Fragment key={index}>
          <Like likeNum={props.likeNum} index={index} />
        </Fragment>
      ))}
    </div>
  );
}
