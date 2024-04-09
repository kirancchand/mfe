import React,{useState} from 'react';
import Headr from 'dashboard/Headr';
import { useDispatch, useSelector } from 'react-redux';
import { clearCount,incrementCount } from '../../re-redux/store';

function ReduxApp() {
  const dispatch = useDispatch();
  const { count } = useSelector(({ counter }) => {
    return { count: counter.count };
  });

  const onClick = () => dispatch(incrementCount());
  const onClear = () => dispatch(clearCount());
  return (
    <div className="App">
       <Headr count={count} onClear={onClear} />
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
        <button onClick={onClick}>Increment</button>
      </div>
    </div>
  );
}

export default ReduxApp;