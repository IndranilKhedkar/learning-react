import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/nameGenerator";
import { generateString } from "../utils/stringGenerator";
import { Chat } from "./Chat";

export const ChatSection = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({ name: generateName(), message: generateString(20) })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const onAddMessage = ({ name, message }) => {
    dispatch(addMessage({ name, message }));
    setMessage("");
  };

  return (
    <div className="w-full">
      <p className="p-2 font-bold text-lg bg-slate-150">Live Chat</p>
      <hr />
      <div className="flex flex-col-reverse h-[480px] my-2 overflow-y-scroll">
        {messages?.map((message, index) => (
          <Chat key={index} name={message.name} message={message.message} />
        ))}
      </div>
      <hr />
      <form
        className="p-1 mx-1"
        onSubmit={(e) => {
          e.preventDefault();
          onAddMessage({ name: "Indranil Khedkar", message: message });
        }}
      >
        <input
          className="p-1 border-2 border-t-0 border-l-0 border-r-0 border-b-black w-96"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Chat..."
        />
        <input
          type="submit"
          className="m-2 bg-slate-300 p-1 rounded-md"
          value="Send"
        />
      </form>
    </div>
  );
};
