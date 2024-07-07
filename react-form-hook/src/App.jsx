import { useForm } from "react-hook-form";

export default 
function App() {
  const { register, handleSubmit, setError, formState: { errors , isSubmitting } } = useForm();


  const onSubmit = async (data)=>{
    await delay(5)
    console.log(data)
    if(data.userName !== "shubham"){
      setError("myForm" , {message:"Credentil entered is invalid , recheck"})
    }
  }

const delay = (d)=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve()
    },d*1000);
  })
}



  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitting && <div>Loading...</div>}
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="userName" {...register("userName" , { required:{ value :true , message:"This field is required"} , minLength:{value:3, message:"Min length is 3"} , maxLength:{ value:8 , message:"Max length 8" }})}  />
      <br />

      {/* include validation with required or other standard HTML validation rules */}
      {errors.userName && <span>{errors.userName.message}</span>}

      <input  placeholder="passWord" {...register("password", { required: true })} />
      <br />
      
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}


      <input disabled = {isSubmitting} type="submit" />
      {errors.myForm && <span>{errors.myForm.message}</span>}

    </form>
  );
}