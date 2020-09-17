import React, { Component } from 'react';
import NewsList from './NewsList'
import AddNewsForm from './AddNewsForm'
import axios from 'axios'
import './App.css';


const QUOTE_SERVICE_URL = 'http://http://localhost:8000/news';

class App extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      newsList: ['1']};
  }
  render() {
    const title = 'News Digest'
    return (
      <div className='App'>
        <h2 className='App-title'>{title}</h2>
        <p>{this.state.isFetching ? 'Fetching quotes...' : ''}</p>
        <AddNewsForm quote_service_url={QUOTE_SERVICE_URL}/>
        <NewsList newsList={this.state.newsList} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchQuotes()
    this.timer = setInterval(() => this.fetchQuotes(), 50000); // Refresh News Item in some time interval
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    this.setState({...this.state, isFetching: true})
    axios.get(QUOTE_SERVICE_URL)
      .then(response => {
        this.setState({newsList: response.data.sources, isFetching: false})
      })
      .catch(e => console.log(e));
  }

}

export default App
