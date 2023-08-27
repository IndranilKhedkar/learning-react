import { Comment } from "./Comment";

export const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.id}>
      <Comment comment={comment} />
      <div className="pl-2">
        <CommentList comments={comment.replyList} />
      </div>
    </div>
  ));
};
