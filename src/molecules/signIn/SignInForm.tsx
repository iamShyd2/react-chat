import { useFormik } from "formik";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import useSignIn from "./useSignIn";

const SignInForm = () => {

    const {
        onPost,
        isFetching
    } = useSignIn();

    const form = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: onPost,
    })

    const {
        email,
        password
    } = form.values;

    const onChange = form.handleChange;

    const onSubmit = form.handleSubmit;

    return (
        <>
            <TextField
                name="email"
                label="Email"
                value={email}
                onChange={onChange}
                variant="standard"
            />
            <TextField
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={onChange}
                variant="standard"
            />
            <Button
                isLoading={isFetching}
                onClick={onSubmit}
            >
                Sign in
            </Button>
        </>
    )
}

export default SignInForm;