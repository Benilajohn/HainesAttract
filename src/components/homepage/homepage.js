import React from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom"


const Homepage = ({setLoginUser}) => {
    const history = useHistory()
    return (
        <div className="homepage">
            <h1>Welcome to Haines Attract</h1>
            
            <div className="button" onClick={() => history.push("/login")}>Sign In</div>
            <div className="button" onClick={() => history.push("/register")}>Sign Up</div>
            {/*<div className="button" onClick={() => setLoginUser({})} >Sign Up</div> */}
        </div>
    )
}

export default Homepage