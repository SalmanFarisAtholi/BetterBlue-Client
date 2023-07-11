import { toast } from "react-hot-toast";

export async function loginValidate(values) {
  const errors = loginVerify({}, values);
  return errors;
}

function loginVerify(error = {}, values) {
  //   const numbers = 1234567890;

  if (!values.email) {
    error.email = toast.error("Email Required");
  } else if (!values.password) {
    error.email = toast.error("Password Required");
  } else if (values.password.includes(" ")) {
    error.email = toast.error("Wrong Password");
  } else if (values.password.length < 8) {
    error.email = toast.error("Password must be 8 character long");
  }

 
  return error;
}



export async function registerValidate(values) {
  const errors = registerVerify({}, values);
  return errors;
}

function registerVerify(error = {}, values) {

  if (!values.email) {
    error.email = toast.error("Email Required");
  } else if (!values.password) {
    error.email = toast.error("Password Required");
  } else if (values.password.includes(" ")) {
    error.email = toast.error("Wrong Password");
  } else if (values.password.length < 8) {
    error.email = toast.error("Password must be 8 character long");
  }

 if(values.password!==values.cpassword){
  error.email = toast.error("Passwords did't match");

 }
  return error;
}
