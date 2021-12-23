import "./App.css";
import Comment from "./Comment";
import { data } from "./data";

function App() {
  return (
    <div className="App container">
      <main>
        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
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
