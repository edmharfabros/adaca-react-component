import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
};

export default function ErrorLabel({ name, label }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  if (errors[name]) {
    return <p className="text-red-500">{`${label} is Required.`}</p>;
  }

  return <></>;
}
