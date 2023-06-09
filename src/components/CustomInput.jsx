import { useField } from "formik"

const CustomInput = ({label,...props}) => {
    const [field,meta] = useField(props);
    //Meta içinde name,onChange value gibi değerler bulunur
    //Field içinde ise error vs gibi özellikler bulunur
    console.log(field);
    console.log(meta)
  return (
    <div className="a-item">
    <label>{label}</label>
    <input {...field} {...props}
    className={field.error ? "input-error" : ""} />
    {meta.error && <div className="error"> {meta.error} </div>}
    </div>
  )
}

export default CustomInput