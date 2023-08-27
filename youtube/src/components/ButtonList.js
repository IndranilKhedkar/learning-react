import { Button } from "./Button";

export const ButtonList = () => {
  const buttonList = [
    { text: "All" },
    { text: "Music" },
    { text: "Songs" },
    { text: "Life" },
    { text: "Sports" },
    { text: "Technology" },
    { text: "News" },
    { text: "Cooking" },
    { text: "Learning" },
    { text: "Gaming" },
  ];

  return (
    <div className="flex flex-wrap m-2">
      {buttonList.map((button) => (
        <Button key={button.text} text={button.text} />
      ))}
    </div>
  );
};
