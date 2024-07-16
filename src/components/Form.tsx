import { FormField } from "../constants/formFields";
import FormInput from "./FormInput";

type Props = {
  fields: FormField[];
  signUp: () => void;
};

export default function Form({ fields, signUp }: Props) {
  return (
    <>
      {fields.map(field => (
        <FormInput key={field.name} field={field} />
      ))}
      <button
        onClick={signUp}
        type="submit"
        className="my-[2rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
      >
        Sign Up
      </button>
    </>
  );
}
