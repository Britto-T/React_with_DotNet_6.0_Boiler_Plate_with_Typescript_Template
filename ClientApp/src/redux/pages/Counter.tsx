import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import {getCustomerList} from "../pages/counterSlice";

const FetchData=()=>{

  const dispatch = useAppDispatch();
  const fetch  = useAppSelector((state) => state.counter.fetch);

  useEffect(() => {
    // axios.get('weatherforecast').then((response) => {
    //   setPost(response.data);
    // });
    dispatch(getCustomerList());
  }, [dispatch]);

  useEffect(() => {
    if(fetch!=="")
    console.log(fetch,'fetch');
  }, [dispatch,fetch]);

    
    return(
    <>
    
    
    </>)

}
export default FetchData