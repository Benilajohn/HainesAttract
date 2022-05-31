import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        password:"",
        profilepicture:"",
        Age:"",
        Gender:"",
        Location:"",
        Interests:"",
        Bio:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, password, Age, Gender, Location, Interests, Bio } = user
        if( name && Age && password && (Gender === Location)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="image" name="profile picture" value={user.profilepicture} placeholder="Upload your profile picture" onChange={ handleChange }></input>
            <input type="number" name="Age" value={user.Age} placeholder="Your Age" onChange={ handleChange }></input>
            <input type="text" name="Gender" value={user.Gender} placeholder="Your Gender" onChange={ handleChange }></input>
            <input type="location" name="Location" value={user.Location} placeholder="your Location" onChange={ handleChange }></input>
            <input type="text" name="Interest" value={user.Interests} placeholder="Your Interest" onChange={ handleChange }></input>
            <input type="text" name="Bio" value={user.Bio} placeholder="Bio" onChange={ handleChange }></input>
            
            <div className="button" onClick={register} >Sign Up</div>
            {/*<div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
    )
}

export default Register