import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 function Page(){
 return(
     <div> 
     <Nav/>
     <Maincontent />
     </div>
     )
 }

 function Nav(){
return(
  <div className='nav-bar'>
  <img src="./logo192.png" alt="" width="40px"></img>
  <ul className='list'>
    <li>price</li>
    <li>contact</li>
    <li>about</li>
  </ul>
 </div>
)
 }
function Maincontent(){
return(
  <div>
    <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>was originally created by jordan walke</li>
    <li>has well over 100k stars on github</li>
    <li>is maintained by facebook</li>
    <li>powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Page />
);


