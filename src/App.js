import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { REQUEST_API_DATA } from './Redux/ActionTypes';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
function App() {
  const [search,setSearch]=React.useState("");
  const state = useSelector(state=>state.data);
  const [value,setValue]=React.useState("kolkata")
  let dispatch=useDispatch();
  React.useEffect(()=>{
    dispatch({type:REQUEST_API_DATA,payload:value});
  },[value])
  const updateData = ()=>{
    setValue(search)
    setSearch("");
  }
  console.log("state", state)
  return (
    <div className={state?.main?.temp_max-273 > 30 ? "App_hot" : "App_cold"}>
      <h1 style={{padding:"10px"}}>Weather App</h1>
      <form>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          label="City" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}/>
          <Button  variant="outlined" onClick={updateData} color='primary' style={{height:"50px",color:"aquamarine"}}>Search</Button>
      </form>
      {state.weather &&
        <div className='data'>
          <h1 style={{color:"violet"}}>{state?.name}</h1>
          <h3>{(state?.main?.temp_max-273)?.toFixed(2)}</h3>
           <h3>{(state?.main?.temp_min-273)?.toFixed(2)}</h3>
          <h3>{state?.weather[0]?.main}</h3>
        </div>}
    </div>
  );
}

export default App;
