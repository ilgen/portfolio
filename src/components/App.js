import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile_image.jpg';

class App extends Component {
    state = {displayBio: false};

    //constructor() {
     //   super();
     //   this.state = { displayBio: false };

     //   console.log('Component this', this);

     //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //     }

    toggleDisplayBio = () => {
       this.setState({ displayBio: !this.state.displayBio})
    }
 
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1><Title /></h1>
                <p>My name is Colin Ilgen.</p>
                <p>I am a software engineer.</p>
                {
                        this.state.displayBio ? (
                            <div>
                            <p>I live in Los Angeles, CA and code all the time.</p>
                            <p>My favorite language is JavaScript, and my favorite framework is React.js</p>
                            <p>Besides coding, I also love sushi.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <footer>© 2019. All Rights Reserved.</footer>
            </div>
        )
    }
    }


export default App;