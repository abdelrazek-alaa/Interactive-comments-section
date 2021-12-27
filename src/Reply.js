export default function Reply({ data, currentUser }) {
  return (
    <div className="flex flex-col sm:flex-row my-11 ml-0 relative sm:static">
      {/* reviews */}
      <div className="flex sm:flex-col order-2 sm:order-none flex-row items-center sm:mr-2">
        <button className="text-gray-300 font-bold">+</button>
        <strong className="text-indigo-700">{data.score}</strong>
        <button className="text-gray-300 font-bold">-</button>
      </div>
      {/* Comment */}
      <div className="">
        <header className="flex justify-between">
          <div className="flex flex-wrap">
            <img className="mr-6 h-8" src={data.user.image.png} alt=""></img>
            <strong className="mr-0">{data.user.username}</strong>
            {currentUser.username === data.user.username && (
              <span className="self-start mx-1 sm:ml-2  text-white bg-indigo-700 rounded-md py-0.5 px-2">
                you
              </span>
            )}
            <span className="ml-1 text-gray-500">{data.createdAt}</span>
          </div>
          {currentUser.username === data.user.username ? (
            <div className="flex  bottom-0 right-0 space-x-3 absolute sm:static">
              <div>
                <img
                  className="inline mr-1"
                  src="./images/icon-delete.svg"
                  alt=""
                ></img>
                <span className=" text-indigo-700 font-bold ml-0 cursor-pointer text-red-400 ">
                  Delete
                </span>
              </div>
              <div className="ml-0 ">
                <img
                  className="inline mr-1"
                  src="./images/icon-edit.svg"
                  alt=""
                ></img>
                <span className=" text-indigo-700 font-bold ml-0 cursor-pointer ">
                  Edit
                </span>
              </div>
            </div>
          ) : (
            <div className="reply-button absolute sm:static bottom-0 right-0">
              <img
                className="inline mr-1"
                src="./images/icon-reply.svg"
                alt=""
              ></img>
              <span className=" text-indigo-700 font-bold ml-0 cursor-pointer ">
                Reply
              </span>
            </div>
          )}
        </header>
        <article>
          <p className="text-gray-500">
            <span className="text-indigo-700 font-bold cursor-pointer">{`@${data.replyingTo} `}</span>
            {data.content}
          </p>
        </article>
      </div>
    </div>
  );
}
