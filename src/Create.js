import { useState } from "react";
import { useHistory } from "react-router";
import db from './firebase'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending,setIsPending]=useState(false);
  const history = useHistory();
  const id=db.doc().id;
 


  function addblog(blog) {
    setIsPending(true);
    // console.log(id);
    db
      .doc(id)
      .set(blog)
      .then(()=>{
        setIsPending(false);
      history.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const blog = { title, body, author,id };
    
     addblog(blog);
     
    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add Blog</button>}{
          isPending && <button disabled>Adding Blog...</button>
        }
      </form>
    </div>
  );
}
 
export default Create;