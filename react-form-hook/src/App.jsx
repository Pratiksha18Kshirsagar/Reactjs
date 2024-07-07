import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="userName" {...register("userName" , { required:{ value :true , message:"This field is required"} })}  />
      <br />

      {/* include validation with required or other standard HTML validation rules */}
      {errors.userName && <span>This field is required</span>}

      <input placeholder="passWord" {...register("password", { required: true })} />
      <br />
      
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}