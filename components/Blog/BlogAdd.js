import { useRef } from "react";

const BlogAdd = (props) => {
  const titleInputRef = useRef();
  const subtitleInputRef = useRef();
  const descriptionInputRef = useRef();
  const authorInputRef = useRef();
  const dateInputRef = useRef();
  const textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredSubtitle = subtitleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const blogData = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      description: enteredDescription,
      author: enteredAuthor,
      date: enteredDate,
      text: enteredText,
    };

    props.onAddBlog(blogData);
  }

  return (
    <form onSubmit={submitHandler} className="add_form">
      <div className="form__control">
        <label htmlFor="subtitl">Subtitle</label>
        <input type="text" required id="subtitl" ref={subtitleInputRef} />
      </div>

      <div className="form__control">
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>

      <div className="form__control">
        <label htmlFor="desc">Description</label>
        <input type="text" required id="desc" ref={descriptionInputRef} />
      </div>

      <div className="form__control">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" ref={dateInputRef} />
      </div>

      <div className="form__control">
        <label htmlFor="author">Author</label>
        <input type="text" id="author" ref={authorInputRef} />
      </div>

      <div className="form__control">
        <label htmlFor="text">Text</label>
        <textarea type="text" required id="text" ref={textInputRef} />
      </div>

      <div className="actions">
        <button className="button">Add</button>
      </div>
    </form>
  );
};

export default BlogAdd;
