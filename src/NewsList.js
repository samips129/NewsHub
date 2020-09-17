import React from 'react'
 
const NewsList = ({newsList}) =>{
    if(!newsList){
        return (<div>No News</div>);
    } 
      return (newsList.map(news => <li key={news.id}>{news.description}</li>));
}
export default NewsList