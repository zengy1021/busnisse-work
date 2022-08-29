// import React from 'react';
import style from '../index.module.less';
import classnames from 'classnames';
import Card from './Card';
import { useState, useEffect } from 'react';
let newList: any = [];
// const lineList = [
//   [
//     {
//       id: 1,
//       name: '金额',
//       tip: '充值金额',
//     },
//     {
//       id: 2,
//       name: '关注',
//       tip: '购物达人的包裹管家',
//     },
//   ],
//   [
//     {
//       id: 3,
//       name: '物流',
//       tip: '喜好类型店铺',
//     },
//     {
//       id: 4,
//       name: '签到',
//       tip: '每日签到领取积分',
//     },
//   ],
//   [
//     {
//       id: 5,
//       name: 'a',
//       tip: '每日签到领取积分',
//     },
//     {
//       id: 6,
//       name: 'a',
//       tip: '每日签到领取积分',
//     },
//   ],
// ];
export default function CardList(props: any) {
  const [list, setList] = useState([
    {
      id: 1,
      name: '金额',
      tip: '充值金额',
      imgInfo: {
        tip1: '￥0.52',
        tip2: '',
        src: '',
      },
    },
    {
      id: 2,
      name: '关注',
      tip: '购物达人的包裹管家',
      imgInfo: {
        tip1: '我的关注',
        tip2: '关注列表',
        src: '',
      },
    },
    {
      id: 3,
      name: '物流',
      tip: '喜好类型店铺',
      imgInfo: {
        tip1: '我的包裹',
        tip2: '签收列表',
        src: '',
      },
    },
    {
      id: 4,
      name: '签到',
      tip: '每日签到领取积分',
      imgInfo: {
        tip1: '我的签到',
        tip2: '签收列表',
        src: '',
      },
    },
    {
      id: 5,
      name: 'a',
      tip: '每日签到领取积分',
      imgInfo: {
        tip1: '我的签到',
        tip2: '签收列表',
        src: '',
      },
    },
    {
      id: 6,
      name: 'a',
      tip: '每日签到领取积分',
      imgInfo: {
        tip1: '我的签到',
        tip2: '签收列表',
        src: '',
      },
    },
  ]);
  const [lineList, setLinelist] = useState([]);
  // const [width, setWidth] = useState(0);
  const resizeUpdate = () => {
    // 通过事件对象获取浏览器窗口的高度
    let w = window.innerWidth;
    w = w - 40;
    let colNum = Math.floor(w / 150) || 1;
    // console.log('1', colNum);

    if (colNum !== 1) {
      let newW = w - 30 * (colNum - 1);
      colNum = Math.floor(newW / 150) || 1;
    }

    newList = [];
    // 创建列对象
    for (let i = 1; i <= colNum; i++) {
      newList.push([]);
    }
    list.map((item, index) => {
      newList[index % colNum].push(item);
    });

    // setWidth(w);
    for (let cI = colNum - 1; cI >= 0; cI--) {
      if (!newList[cI].length) {
        newList.splice(cI, 1);
      }
    }
    setLinelist(newList);
  };

  useEffect(() => {
    // 页面变化时获取浏览器窗口的大小
    resizeUpdate();
    window.addEventListener('resize', resizeUpdate);
    return () => {
      // 组件销毁时移除监听事件
      window.removeEventListener('resize', resizeUpdate);
    };
  }, []);
  useEffect(() => {
    // 数据变化时 更新组合渲染数据
    // resizeUpdate();
  }, [list]);
  return (
    <div className={style.content_box}>
      {lineList.length &&
        lineList.map((lItem: any, Lindex) => (
          <div key={Lindex} className={style.card_box}>
            {lItem.length &&
              lItem.map((item: any) => {
                return (
                  <div
                    className={classnames(style.card, {
                      [`${style.card_one}`]: Lindex % 2 === 0,
                      [`${style.card_two}`]: Lindex % 2 !== 0,
                    })}
                    key={item.id}
                  >
                    <Card option={item} />
                  </div>
                );
              })}
          </div>
        ))}
    </div>
  );
}
