export default function Reply({ data }) {
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
            <img className="avatar" src={data.user.image.png}></img>
            <strong className="mr-0">{data.user.username}</strong>
            <span className="date">{data.createdAt}</span>
          </div>
          <div className="reply-button">
            <img src="./images/icon-reply.svg"></img>
            <span className="reply Moderate-blue bold ml-0 button ">Reply</span>
          </div>
        </header>
        <article>
          <p className="comment-text">
            <span className="Moderate-blue bold">{`@${data.replyingTo} `}</span>
            {data.content}
          </p>
        </article>
      </div>
    </div>
  );
}
