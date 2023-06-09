import { useField } from "formik"

const CustomSelect = ({label,...props}) => {
    const [field,meta] = useField(props);
    //Meta içinde name,onChange value gibi değerler bulunur
    //Field içinde ise error vs gibi özellikler bulunur
  return (
    <>
    <label>{label}</label>
    <select {...field} {...props}
    className={field.error ? "input-error" : ""} />
    {meta.error && <div className="error"> {meta.error} </div>}
    </>
  )
}

export default CustomSelect;