"use client";
import { FormProvider } from "react-hook-form";
import formFields from "../constants/formFields";
import Form from "../components/Form";
import useSignUpForm from "../hooks/useSignUpForm";

export default function SignUp() {
  const { methods, signUp } = useSignUpForm();

  return (
    <>
      <FormProvider {...methods}>
        <Form fields={formFields} signUp={signUp} />
      </FormProvider>
    </>
  );
}
