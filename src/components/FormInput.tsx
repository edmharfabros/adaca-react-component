import { useFormContext } from "react-hook-form";
import { FormField } from "../constants/formFields";
import Label from "./Label";
import ErrorLabel from "./ErrorLabel";

type Props = {
  field: FormField;
};

export default function FormInput({ field }: Props) {
  const { register } = useFormContext();

  switch (field.type) {
    case "text":
    case "password":
    case "email":
    case "date":
      return (
        <div className="my-[1rem]">
          <Label
            label={field.label}
            name={field.name}
            required={field.required}
          />
          <input
            type={field.type}
            id={field.name}
            {...register(field.name, { required: field.required })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorLabel label={field.label} name={field.name} />
        </div>
      );
    case "textarea":
      return (
        <div className="my-[1rem]">
          <Label label={field.label} name={field.name} />
          <textarea
            id={field.name}
            {...register(field.name, { required: field.required })}
            rows={4}
            cols={50}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorLabel label={field.label} name={field.name} />
        </div>
      );
  }
}
