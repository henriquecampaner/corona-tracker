import React from 'react';
import Loader from 'react-loader-spinner';

export default function components() {
  return (
    <Loader
      type="ThreeDots"
      color="#fff"
      height={30}
      width={30}
      timeout={3000}
    />
  );
}
