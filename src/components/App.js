import React, { Component } from 'react'
import axios from 'axios'
import ShowResults from './ShowResults'
import Single from './Single'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css'

export class App extends Component {

    state={
        value:'',
        results:[],
        result:{}
    }


    Helper = async (e) =>{
        if(e.key === "Enter"){
            const response=await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}=${this.state.value}`)
            // console.log(response.data.Search)
            this.setState({
                value:'',
                results:response.data.Search
            })
        }
    }

    Click = async id =>{
        const response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
        // console.log(response.data)
        this.setState({
            result:response.data
        })
    }

    Close = () =>{
        this.setState({
            result:{}
        })
    }

    render() {
        
        return (
            <BrowserRouter>
            <Switch>
            <div>
                    <h1  className="ui header" 
                    style={{textAlign:'center',marginTop:'40px',fontFamily:'cursive',fontSize:'50px'}}
                    >
                        Movie Mania
                    </h1>
                    <div className="ui form" style={{margin:'auto',width:'50%'}}>
                        <div className="field">
                            <input type="text"
                            placeholder="Search..."
                            style={{backgroundColor:'lightgray',borderRadius:'20px'}}
                            value={this.state.value}
                            onChange={(e) => this.setState({
                                value:e.target.value
                            })}
                            onKeyPress={this.Helper}
                            />
                        </div>
                    </div>
                    {this.state.results === undefined ? <h1 style={{textAlign:'center',marginTop:'50px'}}>No results!!</h1> : 
                    
                    <div style={customStyle}>
                    {this.state.results.map(result =>{
                        return <Route path="/" exact
                                render={(props)=>
                                    <ShowResults {...props} key={result.imdbID} id={result.imdbID} type={result.Type} Click={this.Click} image={result.Poster} title={result.Title} year={result.Year}/>
                                }
                        />
                    })}
                </div>        


                    }
                    
                {typeof this.state.result.Title !="undefined"? 
                    <Route path="/:id" exact render={(props) =>{
                       return <Single {...props} Close={this.Close} result={this.state.result}/>
                    }}  />
                    : false
                }
            </div>
            </Switch>
            </BrowserRouter>
        )
    }
}

const customStyle={
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gridGap:'1rem'
}

export default App
