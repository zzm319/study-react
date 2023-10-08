// 对ES6内置API做兼容处理
// import 'react-app-polyfill/stable'

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>学习react</div>
  </React.StrictMode>
);

fetch('/jian/subscriptions/recommended_collections')
.then(res => res.json())
.then(value => console.log(value))

fetch('/zhi/news/latest')
.then(res => res.json())
.then(value => console.log(value))