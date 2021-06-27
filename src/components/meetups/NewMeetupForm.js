import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';


function NewMeetupForm() {

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // all the other event will be this
  function submitHandler(event) {
    
    // 브라우저 default를 막는다.
    event.preventDefault();

    // ref: reference: to dom element
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return <Card>
    <form className={ classes.form } onSubmit={ submitHandler }>
      <div className={ classes.control }>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={ titleInputRef } />
      </div>
      <div className={ classes.control }>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={ imageInputRef }/>
      </div>
      <div className={ classes.control }>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={ addressInputRef }/>
      </div>
      <div className={ classes.control }>
        <label htmlFor="description">Description</label>
        <textarea required id="description" rows='5' ref={ descriptionInputRef }/>
      </div>
      <div className={ classes.actions }>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}

export default NewMeetupForm;