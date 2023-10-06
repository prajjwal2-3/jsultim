import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const page = (
  <div>
  <img src="./logo192.png" alt=""></img>
  <h1>Fun facts about React</h1>
  <ol>
    <li>Was first released in 2013</li>
    <li>was originally created by jordan walke</li>
    <li>has well over 100k stars on github</li>
    <li>is maintained by facebook</li>
    <li>powers thousands of enterprise apps, including mobile apps</li>
  </ol>
</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 page
);


