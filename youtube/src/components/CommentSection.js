import uniqid from "uniqid";
import { CommentList } from "./CommentList";

export const CommentSection = () => {
  const comments = [
    {
      id: uniqid(),
      name: "ABC XYZ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replyList: [
        {
          id: uniqid(),
          name: "ABC XYZ",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          replyList: [
            {
              id: uniqid(),
              name: "ABC XYZ",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              replyList: [],
            },
          ],
        },
      ],
    },
    {
      id: uniqid(),
      name: "ABC XYZ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replyList: [
        {
          id: uniqid(),
          name: "ABC XYZ",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          replyList: [
            {
              id: uniqid(),
              name: "ABC XYZ",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              replyList: [
                {
                  id: uniqid(),
                  name: "ABC XYZ",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  replyList: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uniqid(),
      name: "ABC XYZ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      replyList: [],
    },
  ];

  return (
    <div className="m-2 p-2">
      <h1 className="font-semibold text-xl">Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
};
