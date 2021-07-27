import { useHistory, useParams } from "react-router-dom";
import db from './firebase'
import { useState, useEffect } from 'react';
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setblog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const history = useHistory();
  
  const getBlog=async()=> {

    await db.doc(id).get()
    .then((item)=>{
      
      if (!item.exists) {
        throw Error("item don't exist")
      } else {
        setblog(item.data());
        
      }
      
      setIsPending(false);
    })
    .catch((e)=>{
      setError(e);
      setIsPending(false)
    });
    
  }
   useEffect(()=>{
     getBlog()
   }) 
  
  const deleteBlog= async()=>{
    setIsDeleting(true);
    await db
    .doc(id)
    .delete()
    .then(() => {
      setIsDeleting(false);
      history.push('/');
      
    }) 
    .catch((err) => {
      setIsDeleting(false);
      console.error(err);
    });
  }
  
 const handleClick = () => {
   deleteBlog();
 }

  return (
    <div className="blog-details">
     
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          { !isDeleting && <button onClick={handleClick}>delete</button>}
          { isDeleting && <button disabled>deleteing</button>}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;