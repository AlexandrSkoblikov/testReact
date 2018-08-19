import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Add extends Component {
    constructor(props) {
        super(props);

        this.authorRef = React.createRef();
        this.textRef = React.createRef();
        this.checkRef = React.createRef();
        this.btnRef = React.createRef();
    }

    state = {
        myValue: ""
    };

    onChange = (event) => {
        this.setState({myValue: event.target.value})
    };

    addNews = (e) => {
        e.preventDefault();
        let author = this.authorRef.current.value;
        let text = this.textRef.current.value;

        let news = [{
            author: author,
            text: text,
            fullText: ''
        }];

        window.ee.emit('News.add', news);
    };

    componentDidMount() {
        this.authorRef.current.focus();
    };

    disableBtn = (e) => {
        this.btnRef.current.disabled = !e.target.checked;
    };

    render() {
        return (
            <div>
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref={this.authorRef}/>
                <textarea
                    className='add__text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref={this.textRef}>
                </textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' defaultChecked={false} onChange={this.disableBtn} ref={this.checkRef}/>Я согласен с
                    правилами
                </label>
                <button
                    className='add__btn'
                    ref={this.btnRef}
                    onClick={this.addNews}>
                    Add news
                </button>
            </form>

            </div>
        );
    }
}
