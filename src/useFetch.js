import { useState, useEffect } from 'react';
import db from './firebase';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
 

  const fetchBlogs=async()=>{
  
   
    db.get()
    .then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setData(items);
      setIsPending(false);
    }).catch((err)=>{
      setIsPending(false);
        setError(err.message);
    });
  }
  useEffect(() => {
   
    fetchBlogs();
   
  }, [])

  return { data, isPending, error };
}
 
export default useFetch;