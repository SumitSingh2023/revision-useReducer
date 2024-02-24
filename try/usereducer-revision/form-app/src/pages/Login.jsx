import { useReducer , useEffect, useState} from "react"

function reducer(state,action){
    switch (action.type){
        case "email":{
            return{
                ...state,
                email:action.payload
            }
        }

        case "password" :{
            return {
                ...state,
                password:action.payload
            }
        }

        case "reset" :
            return initialState

        default:{
            throw new Error('invalid action type')
        }

    }

}

const initialState={
    email:"",
    password:""
}

function Login(){
    const [state, dispatch] = useReducer(reducer, initialState)

    const [submitdata, setsubmitData] = useState({})

    function handleClick(e){
        e.preventDefault()
        setsubmitData(state)

        dispatch({
            type:"reset"
        })
    }

    
    return (
        <div>
            <h1>Login</h1>

            <label>User Email</label>
            <input style={{padding:"5px", fontSize:"20px" , border:"1px solid red", borderRadius:"10px", marginLeft:"15px"}} st onChange={(e)=>dispatch({
                type:"email",
                payload:e.target.value
            })}type="email" value={state.value}/>
            <br />
            
            <label style={{marginTop:"30px"}}>User Password</label>
            <input style={{marginTop:"30px",padding:"5px", fontSize:"20px" , border:"1px solid red", borderRadius:"10px", marginLeft:"15px"}} type="password" 
            onChange={(e)=>dispatch({
                type:"password",
                payload:e.target.value
            })} value={state.password} />
            <br />

            <button style={{marginTop:"30px", borderStyle:"none", padding:"10px", fontSize:"20px" , border:"1px solid red", borderRadius:"10px",marginBottom:"10px"}} onClick={handleClick}>Submit</button>

            {submitdata.email && submitdata.password ? (
                <>
                  <div >User Email : {submitdata.email}</div>
                  <br/>
                  <div>User password: {submitdata.password}</div>
                </>
                
            ):(<div style={{padding:"20px"}}>User Not Found!</div>)}
        </div>
    )
}

export default Login