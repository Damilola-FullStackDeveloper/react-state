import React from 'react';

class App extends React.Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I am a passionate and innovative software engineer with over 7 years of experience in developing robust and scalable software solutions. My expertise lies in full-stack web development, where I thrive in both front-end and back-end technologies. I am dedicated to staying up-to-date with the latest trends and technologies in the ever-evolving field of software engineering.',
      imgSrc: './images/Software-engineer.jpeg',
      profession: 'Software Engineer',
    },
    show: false,
    intervalId: null,
    mountedTime: new Date(),
  };

  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;
    return (
      <div>
        <h1>React Profile App</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since component mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
