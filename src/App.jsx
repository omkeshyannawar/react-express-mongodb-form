import './App.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function App() {
  
  const [message,setMessage]=useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm();
   
   function onSubmit(data){
     axios.post("http://localhost:3000/employee", data).
     then((response)=>{
         console.log(response.data);
         setMessage("Employee saved successfully!");
     }).catch((error)=>{
        console.log("Error:", error.message);
        setMessage("Something went wrong!");
     });
   }


  return (
    <>
      <div className='form-container'>
      <div>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label>Employee Full Name:</label>
            <input  {...register('FullName',{
              required: 'Full name is required',
              minLength: { value: 3, message: 'Full name must be at least 3 characters' },
            })} />
            {errors.FullName && <h5>{errors.FullName.message}</h5>}
          </div>

          <div>
            <label>Age:</label>
            <input  {...register('Age',{
              required: 'Age is required',
              pattern: { value: /^\d+$/, message: 'Age must be a number' },
            })} />
            {errors.Age && <h5>{errors.Age.message}</h5>}
          </div>

          <div>
            <label>Role:</label>
            <input  {...register('Role',{
              required: 'Role is required',
              minLength: { value: 3, message: 'Role must be at least 3 characters' },
            })} />
            {errors.Role && <h5>{errors.Role.message}</h5>}
          </div>

          <div>
            <label>Address:</label>
            <input  {...register('Address',{
              minLength: { value: 4, message: 'Address must be at least 4 characters' },
            })} />
            {errors.Address && <h5>{errors.Address.message}</h5>}
          </div>
          
          <div>
           <button type="submit"
             disabled={isSubmitting}
           className='Button'>Submit Data</button>
          </div>


        </form>
      </div>
      </div>
    </>
  )
}

export default App
