import React from 'react'
import { useEffect } from 'react'
import { Link,Redirect,useHistory} from 'react-router-dom'

import './App.css'


function Single({result,Close}) {

    return (

        
        <div>
            <div className="ui centered card" style={{marginTop:'30px',width:'400px',backgroundColor:'#242526'}}>
                <div className="image">
                    <img src={result.Poster}/>
                </div>
                <div className="content">
                    <h4 style={{textAlign:'center',color:'white'}} class="header">  {result.Title} <br /> IMDB RATING: {result.imdbRating}  </h4>
                    <h5 className="header" style={{textAlign:'center',color:'white'}}>  Director- {result.Director}  </h5>
                    <div className="meta" style={{textAlign:'center',color:'white'}}><br />
                    <span className="date">Year- {result.Year} <br />  </span>
                    <span className="date">Genre- {result.Genre} <br /> </span>
                    <span className="date">Release Date- {result.Released} </span><br /><br/>
                    </div>
                    <div style={{textAlign:'center',color:'white'}} className="description">
                        <span style={{fontWeight:'bold'}} >Story at Glance</span>  <br/>
                        {result.Plot}
                    </div><br/><br/>
                    <div style={{textAlign:'center',color:'white'}}>
                    <span style={{fontWeight:'bold'}} >Actors</span> <br />
                        {result.Actors}
                    </div>
                </div>
                <div className="extra content">
                    <h4 style={{textAlign:'center',color:'white'}}>Ratings</h4>
                    {result.Ratings.map((rating,index) =>{
                        return <h4 key={index} style={{textAlign: 'center',fontWeight:'bold',color:'white'}}> {rating.Source} - {rating.Value} </h4>
                    })}
                </div>
                </div>
                <div style={{textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>
                    <Link to='/' onClick={() => Close()} className="ui light button" >
                        Back                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    </Link>
                </div>
        </div>
    )
}

export default Single
