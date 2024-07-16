export type FormField = {
  label: string;
  name: string;
  type: "text" | "number" | "email" | "password" | "textarea" | "date";
  placeholder?: string;
  required?: boolean;
};

const formFields: FormField[] = [
  {
    label: "Name",
    name: "name",
    placeholder: "Name",
    type: "text",
    required: true,
  },
  {
    placeholder: "Bio",
    label: "Bio",
    name: "bio",
    type: "textarea",
  },
  {
    placeholder: "Birthdate",
    label: "Birthdate",
    name: "birthdate",
    type: "date",
  },
  {
    placeholder: "Email",
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    placeholder: "Password",
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
];

export default formFields;
