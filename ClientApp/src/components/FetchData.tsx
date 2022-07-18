import React, {useEffect} from "react";
import axios from "axios";

const FetchData=()=>{

  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get('weatherforecast').then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(post,'post');
  }, [post]);

    
    return(
    <>
    <>Please chech the console for checking the value fetched from api.....Happy Coding using the Boiler Plate</>
    
    </>)

}
export default FetchData