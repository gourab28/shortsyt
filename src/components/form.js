import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const Test = () => {
      alert("Hi")
    }
  console.log(errors);
  }
   
   const Test = () => {
     alert("Hi")
   }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="url" placeholder="Paste link here" {...register("URL", {required: true})} />

      <Button
        style={{
        borderRadius: 35,
        backgroundColor: "#FF0000",
        fontFamily: 'Poppins',
        fontSize: "18px",
    }}
        className="searchbtn" 
        variant="contained" 
        type="submit"
        onClick={Test}
        color="primary">
         Download
      </Button>
    </form>
  );
}