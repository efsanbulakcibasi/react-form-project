import { Form, Formik} from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";


const PortalForm = () => {

  const onSubmit = async(values,actions) => {

    await new Promise((resolve) => {
        setTimeout(resolve,1000)
    });
    actions.resetForm()
  };
  return (
    <>
         <Formik
       initialValues={{ username:'',university:'',isAccepted:false, }}
       validationSchema={advancedSchema}
       onSubmit={onSubmit}
     >
       {({isSubmitting}) => (
         <Form >
          <CustomInput
          label='Kullanıcı adı'
          name='username'
          type='text'
          placeholder='Kullanıcı adınızı giriniz'
          />
          <CustomSelect
          label='Okulunuz'
          name='university'
          placeholder='Okulunuzu seçiniz.'
          >
            <option value="">Üniversitenizi seçiniz</option>
            <option value="Boğaziçi">Boğaziçi Üniversitesi</option>
            <option value="Gsü">Galatasayaray Üniversitesi</option>
            <option value="İtü">İstanbul Teknik Üniversites</option>
            <option value="İü">İstanbul Üniversitesi</option>
            <option value="Koç">Koç Üniversitesi</option>
            <option value="Odtü">Ortadoğu Teknik Üniversitesi</option>
          </CustomSelect>
          <CustomCheckbox
          name='isAccepted'
          type='checkbox'
          />
          <button disabled={isSubmitting} type="submit">Kaydet</button>
         </Form>
       )}
     </Formik>
     <div className="link-button">
     <Link to="/">Ana Forma Git</Link>
     </div>
    </>
  );
};

export default PortalForm;
