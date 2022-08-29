import style from '../index.module.less';
import { Image } from 'antd';
export default function UserInfo(props: any) {
  return (
    <div className={style.top_box}>
      <div className={style.user}>
        <div className={style.user_img}>
          <Image width="40" src={props.userInfo.photo}></Image>
        </div>
        <div className={style.user_info}>
          <div className={style.userName}>{props.userInfo.name}</div>
          <div className={style.userAdress}>{props.userInfo.locate}</div>
        </div>
        <div className={style.user_tip}>粉丝/{props.userInfo.fansNum}</div>
      </div>
      <div className={style.level}>
        <div className={style.level_img}></div>
        <div className={style.level_info}>
          {props.userInfo.category} / {props.userInfo.grade}
        </div>
        <div className={style.level_date}>{props.userInfo.categoryData}</div>
      </div>
    </div>
  );
}
