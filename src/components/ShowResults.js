import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function ShowResults(props) {
    return (
        <div className="ui card" style={{marginLeft:'auto',marginRight:"auto",marginTop:'30px',backgroundColor:'#242526'}}>
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="content">
                <h3 className="header" style={{textAlign:'center',color:'white'}}>   {props.title} </h3>
            </div>
            <h5 className="extra content" style={{textAlign:'center',color:'white'}}>
                Year- {props.year} <br />
                Type- {props.type}
            </h5>
            <div style={{textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>
                <Link to={`/${props.id}`} onClick={() => props.Click(props.id)}  className="ui dark button" style={{backgroundColor:'white',color:'black',fontWeight:'bold',fontSize:'15px'}}>
                    More
                </Link>
            </div>
        </div>
    )
}

export default ShowResults
