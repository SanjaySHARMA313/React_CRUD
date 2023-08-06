import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import css from './Forms.css';

const New = () => {
  // State variables
  const [data, setData] = useState('');
  const [arr, setArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // New state variable for tracking the comment being edited

  // Function to add or edit a comment
  const Adddata = () => {
    if (data && editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing comment
      const updatedArr = [...arr];
      updatedArr[editIndex] = data;
      setArr(updatedArr);
      setEditIndex(null); // Reset editIndex after editing is done
    } else if (data) {
      setArr([...arr, data]);
    }
    setData('');
  };

  // Function to delete a comment
  const deleteItem = (id) => {
    const updatedArr = [...arr];
    updatedArr.splice(id, 1);
    setArr(updatedArr);
  };

  // Function to edit a comment
  const editItem = (id) => {
    const commentToEdit = arr[id];
    setData(commentToEdit);
    setEditIndex(id);
  };

  return (
    <div>
      <h1 style={{margin:"10px"}}>Comment Widget</h1>
      <div>
        <input
          className='InputField'
          style={{ margin: '5px', height: '46px', flex: '1', width: '50%' }}
          type='text'
          value={data}
          placeholder='Enter a comment'
          onChange={(e) => setData(e.target.value)}
        />
        <Button variant='primary' style={{ margin: '5px' }} onClick={Adddata}>
          {editIndex !== null ? 'SAVE EDIT' : 'ADD COMMENT'}
        </Button>
        {arr.map((comment, id) => (
          <div style={{ display: 'flex' }} key={id}>
            <div style={{ margin: '5px' }}>{comment}</div>
            <Button style={{ margin: '3px' }} variant='danger' onClick={() => deleteItem(id)}>
              DELETE
            </Button>
            <Button style={{ margin: '3px' }} variant='primary' onClick={() => editItem(id)}>
              REPLY
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;