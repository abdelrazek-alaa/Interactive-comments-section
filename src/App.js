import Comment from "./Comment";
import { data } from "./data";

function App() {
  return (
    <div className="p-6 max-w-lg mx-auto">
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
            className="mr-6 h-8 "
            alt="avatar"
            src={data.currentUser.image.png}
          ></img>
          <form className="space-y-1">
            <input
              className="py-3"
              type="text"
              placeholder="Add a comment..."
            ></input>
            <button className="bg-indigo-700 py-3 px-6 text-white rounded-md font-bold ml-2">
              SEND
            </button>
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
