function Todo(props) {

  function deleteHandler() {
    console.log('deleteHandler');
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;