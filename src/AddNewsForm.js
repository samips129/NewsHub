import React, {Component} from 'react'
import axios from 'axios'
import './AddNewsForm.css'

class AddQuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {news: ''}
  }

  handleChange = event => this.setState({...this.state, news: event.target.value})

  handleSubmit = event => {
    axios.get(this.props.quote_service_url)
      .then(r => console.log(r))
      .catch(e => console.log(e));
    event.preventDefault();
  }

  handleSubmitWithFetch = event => {
    let data = new FormData()
    data.append('quote', this.state.newsList)
    fetch(this.props.quote_service_url, {method: 'POST', body: data})
      .then(response => response.json())
      .catch(e => console.log(e));

    event.preventDefault();
  }


  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="AddQuote-text" type="text" value={this.state.news} onChange={this.handleChange} />
        <input className="AddQuote-button"type="submit" value="Search News" />
      </form>
    )
  }
}

export default AddQuoteForm
