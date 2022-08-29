import React from 'react';
import Test1 from './test1';
import './test.less';
interface User {
  name?: string;
  age?: number;
}
function formatUser(user: User) {
  return <span>{user.name + ':' + user.age}</span>;
}
export default function test() {
  const name = 'john hance';
  const user: User = {
    name: '张三',
    age: 18,
  };
  return (
    <>
      <div className="test">test -- {name}</div>
      <br />
      {formatUser(user)}
      <br />
      <Test1></Test1>
    </>
  );
}
