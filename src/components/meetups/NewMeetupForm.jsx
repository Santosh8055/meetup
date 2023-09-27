import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
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
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup image</label>
          <input
            type="url"
            name="image"
            id="image"
            required
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            name="description"
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
