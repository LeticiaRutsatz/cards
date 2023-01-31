import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Tours from "./components/Cards";
import { Button } from "@mui/material";

function App() {

const [tours, setTours] = useState([]);
const [loading, setLoading] = useState(false);

const  removeTour = (id) =>{
  const newTour = tours.filter((tour) => tour.id !== id);
  setTours(newTour);
}

const apiGet = async () => {
  try{
    setLoading(true)
    const response = await axios.get('https://course-api.com/react-tours-project');
    
    setTours(response.data);
    setLoading(false);
    console.log(tours)

  }catch(error){
    console.log(error)
  }
}

useEffect(() => {
  apiGet();
}, [])

  if(loading){
    return (
      <CircularProgress />
    )
  }

  if(tours.length === 0){
    return (
      <>
          <h4>No data</h4>
          <Button size="small" color="primary" onClick={() => apiGet()}>
            Refresh
          </Button>
      </>
    )
  }


  return (
    <Tours tours={tours} removeTour={removeTour}/>
  );
}

export default App;
