/*******************************************************************************
 * Copyright (c) 2009-2018, Exactpro Systems LLC
 * www.exactpro.com
 * Build Software to Test Software
 *
 * All rights reserved.
 * This is unpublished, licensed software, confidential and proprietary
 * information which is the property of Exactpro Systems LLC or its licensors.
 ******************************************************************************/

import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Article extends Component {
    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            fullText: PropTypes.string.isRequired
        })
    }

    state = {
        visible: false
    };

    readmoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true});
    }

    render() {
        var author = this.props.data.author;
            
var text = this.props.data.text;
            
var bigText = this.props.data.fullText;

        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{text}</p>
                <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (this.state.visible ? 'none' : '')}>Подробнее</a>
                <p className={'news__big-text ' + (this.state.visible ? '' : 'none')}>{bigText}</p>
            </div>
        )
    }
}
