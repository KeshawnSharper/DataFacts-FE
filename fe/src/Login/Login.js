import React,{useState} from "react"

const Login = (props) => {
let [login,setLogin] = useState({username:"",password:""})
const handleChange = e => {
setLogin({
    ...login,
    [e.target.name]:e.target.value
})
}
return(
<div>
    <form>
        <input value={login.username} name="username" onChange={e => handleChange(e)}/>
        <input value={login.password} name="password" onChange={e => handleChange(e)}/>
    </form>
</div>
)
}
export default Login