import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

  // 언제나 2개의 요소를 가진 배열을 리턴한다.
  // first element : currentStateSnapshot
  // second element: function that change the value => react will reexecute 
  // whenever call state changing function react willl reexecute copmoent function and will evalute and update rendering
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={ deleteHandler }>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={ closeModalHandler } onConfirm={ closeModalHandler }/> }
      { modalIsOpen && <Backdrop onCancel={ closeModalHandler }/> }
    </div> 
  );
}

export default Todo;
