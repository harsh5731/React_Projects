import './style.css';

// import React from 'react';
// import addNotification from 'react-push-notification';
// import { Notifications } from 'react-push-notification';
// function App() {
// function buttonOnClick (){
// 	addNotification({
// 	title: 'Push Notification 1',
// 	native:true
// 	})
// };
// return (
// 	<div className="App">
// 	<Notifications />
// 	<h1>Hey Geek!</h1>
// 	<button onClick={buttonOnClick}>
// 		Push Notification
// 	</button>
// 	</div>
// );
// }

// export default App;

// import React, { useState } from "react";
// import { Notifications } from 'react-push-notification';
// import addNotification from 'react-push-notification';

// function App() {
// const [name,setName] = useState("");

// function warningNotification (){
// 	addNotification({
// 	title: 'Warning',
// 	subtitle: 'Please fill it',
// 	message: 'You have to enter name',
// 	theme: 'red',
// 	closeButton:"X",
// 	})
// };

// function successNotification (){
// 	addNotification({
// 	title: 'Success',
// 	subtitle: 'You have successfully submitted',
// 	message: 'Welcome to GeeksforGeeks',
// 	theme: 'light',
// 	closeButton:"X",
// 	backgroundTop:"green",
// 	backgroundBottom:"yellowgreen"
// 	})
// };

// function handleSubmit(e){
// 	e.preventDefault();
// 	if(name === "")
// 	warningNotification();
// 	else
// 	successNotification()
// }

// return (
// 	<div className="App">
// 	<Notifications />
// 	<h1>Enter Your Name</h1>
// 	<form >
// 		<label>Name:</label>
// 		<input name="name" value={name}
// 		onChange={(e) => setName(e.target.value)}
// 		/>
// 		<button onClick={handleSubmit}
// 		type="submit">Submit
// 		</button>
// 	</form>
// 	</div>
// );
// }

// export default App;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const notify = () => {
    toast('Hello, world!');
  };

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;

