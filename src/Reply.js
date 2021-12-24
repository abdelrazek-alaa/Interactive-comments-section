export default function Reply({ data, currentUser }) {
  return (
    <div className="flex m-flex-column comment-card my-3 ml-3">
      {/* reviews */}
      <div className="flex column comment-reviews ai-center">
        <button className="reviews-button bold button">+</button>
        <strong className="Moderate-blue ">{data.score}</strong>
        <button className="reviews-button bold button">-</button>
      </div>
      {/* Comment */}
      <div className="comment-content">
        <header className="flex jc-spaceBetween">
          <div className="flex comment-info">
            <img className="avatar" src={data.user.image.png} alt=""></img>
            <strong className="mr-0">{data.user.username}</strong>
            {currentUser.username === data.user.username && (
              <span className="mr-0 you-padge">you</span>
            )}
            <span className="date">{data.createdAt}</span>
          </div>
          {currentUser.username === data.user.username ? (
            <div className="flex user-buttons">
              <div>
                <img src="./images/icon-delete.svg" alt=""></img>
                <span className="reply Moderate-blue bold ml-0 button soft-red d-none">
                  Delete
                </span>
              </div>
              <div className="ml-0 ">
                <img src="./images/icon-edit.svg" alt=""></img>
                <span className="reply Moderate-blue bold ml-0 button d-none">
                  Edit
                </span>
              </div>
            </div>
          ) : (
            <div className="reply-button">
              <img src="./images/icon-reply.svg" alt=""></img>
              <span className="reply Moderate-blue bold ml-0 button ">
                Reply
              </span>
            </div>
          )}
        </header>
        <article>
          <p className="comment-text">
            <span className="Moderate-blue bold replyingTo">{`@${data.replyingTo} `}</span>
            {data.content}
          </p>
        </article>
      </div>
    </div>
  );
}
