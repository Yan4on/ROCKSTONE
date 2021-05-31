import React, { Component } from 'react';
import './CreateMessage.css';

class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      posts: ['']
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.ShowMessages = this.ShowMessages.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleMessageChange(event) {
    const content = event.target.value;
    this.setState(() => {
      return {
        content,
      };
    });
  }

  handleSubmit() {
    let posts = this.state.posts;
    posts.push(this.state.content);
    this.setState(() => {
      return {
        content: '',
        posts
      };
    });
  }

  ShowMessages() {
    const listItems = this.state.posts.map((item) => {
      return (
        <li className="list-item">
          {item}
        </li>
      )
    })

    return (
      <ul className="list-group">
        {listItems}
      </ul>
    );
  }

  render() {
    const items = this.state.posts.map((item, i) => (
      <div className="text-container" key={i}>
        <h1>{item}</h1>
      </div>
    ));

    return (
      <div>
        <div className="add-posts">
          <textarea
            value={this.state.content}
            onChange={this.handleMessageChange}
            placeholder="Введите текст" />
          <button onClick={this.handleSubmit}> Send </button>
        </div>
        <div className="items-list">
          {items}
        </div>
      </div>
    )
  }
}

export default CreateMessage;