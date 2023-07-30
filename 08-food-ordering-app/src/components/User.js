import React from "react";

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/indranilkhedkar"
    );
    const user = await response.json();
    console.log(user);
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.user?.avatar_url} alt="avatar" />
        <h3>Name: {this.state.user?.login}</h3>
        <h4>Location: {this.state?.address}</h4>
        <h4>Email Id: {this.state?.email}</h4>
        <h4>
          <a href={this.state.user?.organizations_url}>Organization</a>
        </h4>
      </div>
    );
  }
}
