import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async(values,actions) => {

    await new Promise((resolve) => {
        setTimeout(resolve,1000)
    })

    actions.resetForm()
};

const GeneralForm = () => {
  const { values, errors,isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="a-item">
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email adresinizi giriniz..."
          className={errors.email ? "input-error" : ""}
          />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="a-item">
        <label>Yaşınız</label>
        <input
          type="number"
          id="age"
          value={values.age}
          onChange={handleChange}
          placeholder="Yaşınızı giriniz..."
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="a-item">
        <label>Şireniz</label>
        <input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Şifrenizi giriniz..."
          />
        {errors.age && <p className="error">{errors.password}</p>}
      </div>
      <div className="a-item">
        <label>Şifre Tekrarı</label>
        <input
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Tekrar şifrenizi giriniz..."
          />
        {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
            )}
      </div>
      <div className="link-button">

      <Link to="/portal">
        <button disabled={isSubmitting} type="submit">KAYDET</button>
      </Link>
      </div>
    </form>
</>
  );
};

export default GeneralForm;
