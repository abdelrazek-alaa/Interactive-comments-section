import Reply from "./Reply";

export default function Comment({ data, currentUser }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row relative sm:static my-12">
        {/* reviews */}
        <div className="flex sm:flex-col order-2 sm:order-none flex-row items-center">
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
              <span className="text-gray-500">{data.createdAt}</span>
            </div>
            <div className="absolute sm:static bottom-0 right-0">
              <img src="./images/icon-reply.svg" alt=""></img>
              <span className=" text-indigo-700 font-bold ml-0 cursor-pointer">
                Reply
              </span>
            </div>
          </header>
          <article>
            <p className="text-gray-500">{data.content}</p>
          </article>
        </div>
      </div>
      {/* replies */}
      <div className="ml-2 pl-3">
        {data.replies.length > 0 &&
          data.replies.map((reply, index) => (
            <Reply currentUser={currentUser} data={reply} key={reply.id}>
              {index}
            </Reply>
          ))}
      </div>
    </>
  );
}
