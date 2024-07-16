export type Props = {
  label?: string;
  name?: string;
  required?: boolean;
};
export default function Label({ label, name, required = false }: Props) {
  if (!label || !name) return;

  return (
    <label className="font-semibold" htmlFor={name}>
      {label}&nbsp;
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}
