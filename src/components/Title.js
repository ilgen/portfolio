import React, { Component } from 'react';

const TITLES = [
    'Hello',
    'Bonjour',
    'Hola',
    'Guten Tag',
    'Ciao',
    'Namaste',
    'Olá',
    'Salaam',
    'Zdras-tvuy-te',
    'Konnichiwa',
    'Ahn-Young-Ha-Se-Yo',
    'Merhaba',
    'Sain Bainuu',
    'Salemetsiz Be',
    'Szia',
    'Marhaba',
    'Sannu',
    'Jambo',
    'Ni Hau',
    'Nay Hoh',
    'Halo',
    'Aloha'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

           this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

    return (
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
    )    
    }
}

export default Title;