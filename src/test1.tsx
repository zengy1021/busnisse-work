import React, { useState } from 'react';

export default function Test1() {
  let [userName] = useState('李逵');
  let [userAge, setUserAge] = useState(0);
  function addAge() {
    console.log(userAge);

    setUserAge(() => userAge++);
  }
  return (
    <>
      <div>
        {userName}：{userAge}
      </div>
      <br />
      <div onClick={() => addAge()}>click</div>
    </>
  );
}
