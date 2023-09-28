import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../components/API";
import "../css_styling/Login.css"
//previously had a setUser fUNCTION, BUT TESTING TO SEE IF SETtoken works
export default function Login({setToken}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    async function submitForm(e){
        e.preventDefault();
        try{

            const token = await loginUser(username,password);
            
            if (token){
                setToken(token);
                console.log('Token:', token);
                localStorage.setItem('token',token);
                setUsername('');
                setPassword('');
                navigate('/'); 
            }else{
                console.error('Authentication failed');
            }
        }catch(error){    
            console.error('Login error:', error);
        }
    }
    
    return(
        <div>
       
        <form onSubmit={submitForm}> 
         <h1 className="PageTitle"> Login</h1>
        <fieldset>
            <label htmlFor="username">
                <input
                    id="username" 
                    name="textfield" 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                     // changes the state value and rerenders the form with the new values
                    required    
                />
            </label>
            <label htmlFor="password">
                <input
                    id="password" 
                    name="textfield" 
                    type="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required
                />
            </label>
            <button type="submit" className="login_B" >Login</button>
            <fieldset>
                <label htmlFor="New-User"> 
                    Don't have an account? <a href="/register">Sign Up</a>
                </label>
            </fieldset>
        </fieldset>
        </form>
        </div>
    )
}