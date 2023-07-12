import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './style.css';

const Todo = () => {
  const [inputdata, setInputData] = useState('');
  const [items, setItems] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Update localStorage whenever the items change
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!inputdata) {
      NotificationManager.warning('Please fill it', 'Warning');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputdata,
        date: new Date().toISOString().slice(0, 10),
        status: 'Pending',
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setInputData('');
      NotificationManager.success('Item Added', 'Success');
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    NotificationManager.info('Item Removed', 'Deleted');
  };

  const updateStatus = (id, newStatus) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="main-div">
      <figure style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img src="./images/TODO-Group.png" alt="todologo" />
        <figcaption>Add Your List Here ✌</figcaption>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍ Add Item"
            className="form-control"
            value={inputdata}
            onChange={(event) => setInputData(event.target.value)}
          />
          <i className="fa fa-plus add-btn" onClick={addItem}></i>
        </div>
      </figure>
      <div className="child-div">
        <div className="showItems">
          {items.map((item) => (
            <div className="eachItem" key={item.id}>
              <h3 style={{ color: 'red' }}>{item.name}</h3>
              <h3>Date: {item.date}</h3>
              <h3>Status: {item.status}</h3>
              <div className="status-buttons">
                <button
                  style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: 'none', fontWeight: 'bold' }}
                  onClick={() => updateStatus(item.id, 'Completed')}
                >
                  Mark as Completed
                </button>
              </div>
              <div className="todo-btn">
                <i
                  className="far fa-trash-alt add-btn"
                  onClick={() => deleteItem(item.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Todo;
