export const Comment = ({ comment }) => {
  const { name, text } = comment;

  return (
    <div className="flex flex-col py-2 px-2 bg-slate-50 rounded-md">
      <div className="flex items-center">
        <img
          className="h-9 w-9"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user-icon"
        />
        <div className="px-2">
          <p className="font-semibold">{name}</p>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </div>
  );
};
