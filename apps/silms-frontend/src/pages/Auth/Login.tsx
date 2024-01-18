import { LoginProps } from "@/store/interfaces/user.interface";
import { LoginSchema } from "@/utils/Yup";
import { Checkbox, Label } from "flowbite-react";
import { Form, Formik } from "formik";
import {  useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const { data: googleApi } = useGetGoogleLinkQuery();
  // const dispatch = useDispatch();

  const onLogin = useCallback((props: LoginProps) => {
    return props;
  }, []);

  return (
    <div className="justify-center items-center h-screen w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full items-center">
        <div className="hidden md:flex p-8 justify-center">
          <img
            src="/assets/icons/login-illustration.svg"
            alt="login illustration"
            className="h-full "
          ></img>
        </div>
        <div className="flex w-full justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[62%] gap-8 bg-custom-secondary-3 rounded-[1.1875rem] p-8">
          <img
            className="flex self-end w-[2rem] h-[2rem]"
            src="/assets/icons/login-app-icon.svg"
            alt="Wisr Logo"
          />
          <p className="text-custom-primary-1 text-[2rem] font-bold">Login</p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              onLogin(values);
            }}
          >
            {({ errors, values, setFieldValue }) => (
              <Form>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#52525C] text-xl">Email</p>
                    <input
                      className=" flex shadow-none px-4 py-3 bg-white rounded-lg border-2 border-[#D9D9D9] self-stretch gap-2 items-center"
                      type="email"
                      onChange={(e) => setFieldValue("email", e.target.value)}
                      placeholder="Your email address"
                    />
                    {errors && errors.email && (
                      <p className="text-[12px] mt-1 text-custom-danger">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#52525C] text-xl">Password</p>
                    <div className="relative">
                      <input
                        className=" flex shadow-none px-4 py-3 bg-white rounded-lg border-2 border-[#D9D9D9] self-stretch w-full gap-2 items-center"
                        type={showPassword ? "text" : "password"}
                        value={values["password"]}
                        placeholder={
                          showPassword ? "Enter your password" : "********"
                        }
                        onChange={(e) =>
                          setFieldValue("password", e.target.value)
                        }
                      />
                      <div className="absolute inset-y-0 right-0 p-4 flex items-center">
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={
                            showPassword ? "Hide Password" : "Show Password"
                          }
                        >
                          {showPassword ? (
                            <LiaEyeSlashSolid />
                          ) : (
                            <LiaEyeSolid />
                          )}
                        </button>
                      </div>
                    </div>
                    {errors && errors.password && (
                      <p className="text-[12px] mt-1 text-custom-danger">
                        {errors.password}
                      </p>
                    )}

                    
                  </div><div className="flex justify-between w-full">
                      <div className="flex text-base font-medium items-center gap-2">
                        <Checkbox id="remember-me" />
                        <Label htmlFor="remember-me">Remember Me</Label>
                      </div>
                      <Link to={"/"}>
                        <p className="flex font-bold text-base justify-end transition-all duration-200 ease-in-out hover:text-custom-accent-1">
                          Forgot Password?{" "}
                        </p>
                      </Link>
                    </div>
                  <button
                    className="bg-custom-accent-1 font-bold rounded-[0.3125rem] shadow-md text-custom-primary-1 w-full h-[2.5rem] justify-center items-center hover:bg-white hover:border hover:border-custom-accent-1 hover:text-custom-accent-1"
                    type="submit"
                  >
                    Login
                  </button>

                  <p className="mt-3">Or login to your SILMS account using</p>
                  <div className="flex gap-8">
                    <img src="/assets/icons/google-icon.svg" />
                    <img src="/assets/icons/facebook-icon.svg" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
