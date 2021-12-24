import "./App.css";
import Comment from "./Comment";
import { data } from "./data";

function App() {
  return (
    <div className="App container">
      <main>
        {/* comment card */}
        {data.comments.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
            currentUser={data.currentUser}
          />
        ))}
        {/* Add New Comment */}
        <div className="flex">
          <img
            className="avatar "
            alt="avatar"
            src={data.currentUser.image.png}
          ></img>
          <form className="comment-form">
            <input
              className="form-input"
              type="text"
              placeholder="Add a comment..."
            ></input>
            <button className="form-button bold">SEND</button>
          </form>
        </div>
      </main>
      {/* <footer>
         Challenge by{" "}
         <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
           Frontend Mentor
         </a>
         . Coded by <a href="#">Abdelrazek</a>.
       </footer> */}
    </div>
  );
}

export default App;
