// import '/./css/bootstrap/bootstrap.min.css';
import React, { useState } from 'react';

import '../css/Form.css';
function Form(){
    var obj = {Title: "", Tagline: "", date: new Date(), tags:[],paragraphs:[]}
    const [Post,setPost] = useState(obj);
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log("submit")
    }
    const updateField = e => {
        setPost({
          ...Post,
          [e.target.name]: e.target.value
        });
      };
    return(
    <div className="Form">
        <div className="container">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="Title" onChange={updateField}/>
                    </label>
                    <label>
                        Tagline:
                        <input type="text" name="Tagline" onChange={updateField}/>
                    </label>
                    <label>
                        Tags:
                        <input type="text" value="Tags"/>
                    </label> 
                    <label>
                        Paragraphs:
                        <input type="text" value="s"/>
                    </label>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    </div>)
}
export default Form;