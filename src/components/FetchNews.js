import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FetchNews = () => {
const [news , setNews] = useState([])

    const fetchNews = ()=>{
       axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=658e7aad54a64fad9c7660220f559ca0")
       .then((response)=>{
           console.log(response);
        setNews(response.data.articles)
       })
    }
  return (
   <>
  <div className="container my-3">
      <div className="row">
          <div className="col-4">
          <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
          </div>
      </div>
  </div>

  <div className="container">
      <div className="row">
          {
              news.map((value)=>{
                  return(
                    <div className="col-4">
                    <div className="card">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <p className="card-text">{value.description}</p>
              <a href="#" className="btn btn-primary">{value.url}</a>
            </div>
          </div>
                    </div>
                  )
              })
          }
      </div>
  </div>
   </>
  )
}

export default FetchNews