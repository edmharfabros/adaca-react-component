import { useForm } from "react-hook-form";

type SignUpForm = {
  name: string;
  bio: string;
  birthdate: Date;
  email: string;
  password: string;
};

export default function useSignUpForm() {
  const methods = useForm<SignUpForm>({ shouldUnregister: true });

  const signUp = async (data: SignUpForm) => {
    alert("Sign up Successful!");
  };

  return {
    methods,
    signUp: methods.handleSubmit(signUp),
  };
}
