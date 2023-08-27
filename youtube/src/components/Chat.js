export const Chat = ({ name, message }) => {
  return (
    <div className="flex p-2 mx-2 items-center bg-slate-50 shadow-sm">
      <img
        className="h-6 w-6"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user-icon"
      />
      <div className="">
        <span className="font-semibold px-2">{name}</span>
        <span className="px-1">{message}</span>
      </div>
    </div>
  );
};
