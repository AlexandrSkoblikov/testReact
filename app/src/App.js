import React, {Component} from 'react';
import './App.css';
import News from "./News.js"
import Add from "./Add.js"
import EventEmitter from "events"

window.ee = new EventEmitter();

let myNews = [
    {
        author: 'Lalala',
        text: 'Lalala...',
        fullText: ' qweqweqweqweqweqweqwew'
    },
    {
        author: 'Hello',
        text: 'Hello..',
        fullText: ' World'
    }
];

export default class App extends Component {
    static test = 2;
    state = {
        news: myNews
    };

    componentDidMount() {
        window.ee.addListener('News.add', (newNews) => {
            this.setState({news: newNews.concat(this.state.news)});
        })
    }

    render() {
        return (
            <div>
                <Add/>
                <News data={this.state.news}/>
            </div>
        );
    };
}
