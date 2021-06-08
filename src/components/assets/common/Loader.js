import React from 'react';
import preload from './loader.svg';

function Loader() {
  return (
    <div>
      <img src={preload}></img>
    </div>
  );
}

export default Loader;
