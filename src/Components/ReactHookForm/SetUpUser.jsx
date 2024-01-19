import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";
import { DevTool } from "@hookform/devtools";

const defaultValue = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  social: {
    twitter: "",
    facebook: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [{ number: "" }],
  age:0,
  dob:new Date()
};

let compRenderCount=0;

const SetUpUser = () => {
  const { register, control, handleSubmit, formState,watch,reset } = useForm({
    defaultValues: defaultValue,
    mode:"all"
  });
  const { errors,isDirty } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (formValue) => {
    console.log("form Values : ", formValue);
  };

  // const watchedValue=watch(["name"]);


  compRenderCount++;
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-body">
                {/* <h1 className="modal-title">Welcome : {watchedValue}</h1> */}
                <h1 className="modal-title">Welcome</h1>
                <p className="modal-desc">
                  To the MKP website for programmers.{compRenderCount/2}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="name" className="input-label">
                          Name
                        </label>
                        <input
                          type="name"
                          autoComplete="off"
                          name="name"
                          id="name"
                          placeholder="Name"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is required.",
                            },
                          })}
                        />
                        {errors.name && (
                          <p className="form-error">{errors.name.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="email" className="input-label">
                          Email
                        </label>
                        <input
                          type="email"
                          autoComplete="off"
                          name="email"
                          id="email"
                          placeholder="Email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is required.",
                            },
                            pattern: {
                              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: "Invalid email format.",
                            },
                            validate: {
                              notAdminEmail: (fieldValue) => {
                                return (
                                  fieldValue !== "admin@gmail.com" ||
                                  "Enter a different email address."
                                );
                              },
                              notBlackListEmail: (fieldValue) => {
                                return (
                                  !fieldValue.endsWith("yopmail.com") ||
                                  "This domain is not supported"
                                );
                              },
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="form-error">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="password" className="input-label">
                          Password
                        </label>
                        <input
                          type="password"
                          autoComplete="off"
                          name="password"
                          id="password"
                          placeholder="Password"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Password is required.",
                            },
                          })}
                        />
                        {errors.password && (
                          <p className="form-error">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label
                          htmlFor="confirm_password"
                          className="input-label"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          autoComplete="off"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Confirm Password"
                          {...register("confirm_password", {
                            required: {
                              value: true,
                              message: "Confirm password is required",
                            },
                            validate:{
                              misMatchPwd:(fieldValue)=>{
                                return (
                                  !(watch("password").trim() != "" && fieldValue !== watch("password"))||
                                  "Password does not matched"
                                );
                              }
                            }
                          })}
                        />
                        {(errors.confirm_password && isDirty) && (
                          <p className="form-error">
                            {errors.confirm_password.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="twitter" className="input-label">
                          Twitter
                        </label>
                        <input
                          type="text"
                          autoComplete="off"
                          name="twitter"
                          id="twitter"
                          placeholder="Twitter"
                          {...register("social.twitter")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="facebook" className="input-label">
                          Facebook
                        </label>
                        <input
                          type="text"
                          autoComplete="off"
                          name="facebook"
                          id="facebook"
                          placeholder="facebook"
                          {...register("social.facebook")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label
                              htmlFor="primary-phoneNumber"
                              className="input-label"
                            >
                              Primary phone number
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              name="primary-phoneNumber"
                              id="primary-phoneNumber"
                              placeholder="Primary phone number"
                              {...register("phoneNumbers.0")}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label
                              htmlFor="secondary-phoneNumber"
                              className="input-label"
                            >
                              Secondary phone number
                            </label>
                            <input
                              type="text"
                              autoComplete="off"
                              name="secondary-phoneNumber"
                              id="secondary-phoneNumber"
                              placeholder="secondary phone number"
                              {...register("phoneNumbers.1")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        {fields.map((fields, index) => {
                          return (
                            <div className="col-lg-12" key={fields.id}>
                              <div className="input-block">
                                <label
                                  htmlFor="primary-phoneNumber"
                                  className="input-label"
                                >
                                  Phone number {index + 1}
                                </label>
                                <input
                                  type="text"
                                  autoComplete="off"
                                  name="primary-phoneNumber"
                                  id="primary-phoneNumber"
                                  placeholder="Primary phone number"
                                  {...register(`phNumbers.${index}.number`)}
                                />
                                {index > 0 && (
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => remove(index)}
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => append({ number: "" })}
                        >
                          Add new number
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="age" className="input-label">
                          Age
                        </label>
                        <input
                          type="number"
                          autoComplete="off"
                          name="age"
                          id="age"
                          placeholder="00"
                          {...register("age",{
                            required:{
                              value:true,
                              message:"Age is required."
                            },
                            valueAsNumber:true
                          })}
                        />
                        {errors.age && (
                          <p className="form-error">{errors.age.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-block">
                        <label htmlFor="dob" className="input-label">
                          DOB
                        </label>
                        <input
                          type="date"
                          autoComplete="off"
                          name="dob"
                          id="dob"
                          placeholder="00/00/0000"
                          {...register("dob",
                          {
                            required:{
                              value:true,
                              message:"DOB is required."
                            },
                            valueAsDate:true
                          })}
                        />
                         {errors.dob && (
                          <p className="form-error">{errors.dob.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                    <button onClick={()=>reset()} className="input-button" type="button">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <DevTool control={control} />
    </>
  );
};

export default SetUpUser;

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal {
    width: 100%;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;
