import React, {Component} from "react";
import PropTypes from 'prop-types';
import Article from './Article';

/*******************************************************************************
 * Copyright (c) 2009-2018, Exactpro Systems LLC
 * www.exactpro.com
 * Build Software to Test Software
 *
 * All rights reserved.
 * This is unpublished, licensed software, confidential and proprietary
 * information which is the property of Exactpro Systems LLC or its licensors.
 ******************************************************************************/
export default class News extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    state = {
        counter: 0
    };

    onNewsClick = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        let data = this.props.data;

        let news;

        if (data.length > 0) {
            news = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            news = "No News"
        }

        return (
            <div className="news" onClick={this.onNewsClick}>
                {news}
            </div>
        );
    }
}
