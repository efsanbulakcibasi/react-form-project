import { useField } from "formik";

const CustomCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props);
  //Meta içinde name,onChange value gibi değerler bulunur
  //Field içinde ise error vs gibi özellikler bulunur
  return (
    <>
      <div>
        <input
          {...field}
          {...props}
          className={field.error ? "input-error" : "checkbox"}
        />
        <p>Kullanıcı koşullarını kabul ediyorum.</p>
      </div>
      {meta.error && <div className="error"> {meta.error} </div>}
    </>
  );
};

export default CustomCheckbox;
