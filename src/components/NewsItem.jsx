import React from 'react'

const NewsItem = ({item}) => {
  return (
    <div>
        <h5>{item.title}</h5>
       <p>{item.content}</p>
    </div>
  )
}

export default NewsItem