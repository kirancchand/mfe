import React,{useState} from 'react';
import Headr from 'dashboard/Headr';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount,clearCount } from '../../re-redux/store';
import { useEffect } from 'react';

function ReduxApp() {
    const dispatch = useDispatch();
    const { count } = useSelector(({ counter }) => {
      return { count: counter.count };
    });

    // const { notificationCount } = useSelector(({ notification }) => ({
    //     notificationCount: notification.count,
    //   }));
    // const [notiCount,setNotiCount]=useState("");
    // useEffect(()=>{
    //     console.log(notificationCount)
    // },[notificationCount])
    const onClick = () => dispatch(incrementCount());
    // function to clear the count in store.
    const onClear = () => dispatch(clearCount());

  

  return (
    <div className="App">
      <Headr count={count} onClear={onClear}/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>HOST count {count}</div>
        {/* <div>notificationCount count {notificationCount}</div> */}
        <button onClick={onClick}>Increment</button>
      </div>
    </div>
  );
}

export default ReduxApp;