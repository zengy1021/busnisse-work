import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import UserInfo from './components/UserInfo';
import style from './index.module.less';
import api from './api';
import { useLocation } from 'react-router-dom';

export default function UserMember() {
  const params = useLocation();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    console.log(params);
    api.getData({ companyId: '531521' }).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        setUserInfo(res.data);
      }
    });
  }, []);
  return (
    <div className={style.userMember}>
      <UserInfo userInfo={userInfo} />
      <CardList userInfo={userInfo} />
    </div>
  );
}
