import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "A software engineer with a passion for React.",
      imgSrc: "data:image/jpeg;base64,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",
      profession: "Software Engineer"
    },
    shows: false,
    mountedTime: null,
    intervalId: null
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      const mountedTime = new Date().getTime();
      this.setState({ mountedTime });
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { shows, person, mountedTime } = this.state;
    const timeSinceMounted = Math.floor((new Date().getTime() - mountedTime) / 1000);

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <div>Time since last mount: {timeSinceMounted} seconds</div>
      </div>
    );
  }
}

export default App;
