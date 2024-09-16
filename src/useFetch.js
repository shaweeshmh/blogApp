import {useState,useEffect} from 'react';


const useFetch = (url)=>{
    const [data,setData] = useState(null);

    const [isPending, setIsPending] = useState(true);
    
    const [error,setError] = useState(null);
    // use effect runs a function every render of a component
    useEffect(()=>{
        const abortCont = new AbortController();
      fetch(url,{signal: abortCont.signal}).then(res => {
          if(!res.ok)
              {
                  throw Error('could not fetch data');
              }
          return res.json();
      }).then((data)=>{
          setData(data);
          setIsPending(false);
          setError(null);
      })
      .catch((err)=>{
          // catch catches a connection error
          if(err.name === 'AbortError')
            {
                console.log('fetch aborted');
            }else
            {
                setError(err.message);
                setIsPending(false);
            }
     
      })

      return ()=> abortCont.abort();
    },[url]);//usually we fetch data

    return {data,isPending,error};
}
export default useFetch;
//Custom hook