import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import './form.css';

const initialValues = {
    firstname: "",
    Lname: "",
    email: "",
    Password: "",
    conformPassword: "",
    gender: "",
    subject: "",
    image: "",
};

const Form = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
            resetForm();
        },
        validateOnChange: true, // Validation on change
        validateOnBlur: true,
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the first file
        if (file) {
            setFieldValue("image", file); // Set the image file to Formik's field value
        }
    };

    return (
        <>
            <div className="container">
                <h1>Form in React JS</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter First Name"
                        autoComplete="new-firstname"
                        name="firstname"
                        id="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.firstname && errors.firstname && (
                        <p className="form-error">{errors.firstname}</p>
                    )}

                    <label htmlFor="Lname">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter Last Name"
                        name="Lname"
                        id="Lname"
                        autoComplete="new-firstname"
                        value={values.Lname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.Lname && errors.Lname && (
                        <p className="form-error">{errors.Lname}</p>
                    )}

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        autoComplete="off"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                        <p className="form-error">{errors.email}</p>
                    )}

                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="Password"
                        id="Password"
                        value={values.Password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.Password && errors.Password && (
                        <p className="form-error">{errors.Password}</p>
                    )}

                    <label htmlFor="conformPassword">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Enter Confirm Password"
                        autoComplete="off"
                        name="conformPassword"
                        id="conformPassword"
                        value={values.conformPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.conformPassword && errors.conformPassword && (
                        <p className="form-error">{errors.conformPassword}</p>
                    )}

                    <label htmlFor="gender">Gender</label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "Male"}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "Female"}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "Other"}
                    /> Other
                    {touched.gender && errors.gender && (
                        <p className="form-error">{errors.gender}</p>
                    )}

                    <label htmlFor="subject">Subject</label>
                    <select
                        name="subject"
                        id="subject"
                        autoComplete="off"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="">Select a subject</option>
                        <option value="math">Math</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="physics">Physics</option>
                    </select>
                    {touched.subject && errors.subject && (
                        <p className="form-error">{errors.subject}</p>
                    )}

                    <label htmlFor="image">Picture</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleImageChange} // Handle image file change
                        onBlur={handleBlur}
                    />
                    {touched.image && errors.image && (
                        <p className="form-error">{errors.image}</p>
                    )}

                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </>
    );
};

export default Form;
