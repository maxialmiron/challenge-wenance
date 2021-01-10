import React from 'react';
import loadingImg from '../loading.gif' 

const Loading = ({ text }) => {
    return (
        <>
        <img src={loadingImg} className="loadingImg" alt="loading" />
        </>
      );};
 
export default Loading;