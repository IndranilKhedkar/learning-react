import { User } from "./User";

export const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User
        name={"Indranil Khedkar"}
        address={"Pune"}
        emailId={"indranilkhedkar@gmail.com"}
        contactNo={"9999999999"}
      />
    </div>
  );
};
