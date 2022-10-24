import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import {
  Buttons,
  Container,
  Error,
  Form,
  FormField,
  Title,
  Wrapper,
} from "./Profile.elements";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { getError } from "../../utils/error";
import { userRequest } from "../../utils/requestMethods";
import { NewButton } from "../../globalStyles";

export const Profile = () => {
  const { currentUser: user } = useSelector((state) => state.user);
  const TOKEN = user?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const signout = () => {
    dispatch(logout());
    navigate("/");
  };

  const submitHandler = async ({ name, email, password }) => {
    try {
      const result = await axios({
        method: "put",
        url: `https://ecommerce-express-server.vercel.app/api/users/${user._id}`,
        headers: { token: `Bearer ${TOKEN}` },
        data: {
          name,
          email,
          password,
        },
      });
      result.error
        ? toast.error(result.error)
        : toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("username", user.username);
  }, [user, setValue]);
  return (
    <Container>
      <Wrapper>
        <Title>Profile</Title>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <FormField>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              autoFocus
              {...register("name", {
                required: "Please enter name",
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              autoFocus
              {...register("username", {
                required: "Please enter username",
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "password is more than 5 chars",
                },
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </FormField>
          <FormField>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (value) => value === getValues("password"),
                minLength: {
                  value: 6,
                  message: "confirm password is more than 5 chars",
                },
              })}
            />
            {errors.confirmPassword && (
              <Error>{errors.confirmPassword.message}</Error>
            )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <Error>Password do not match</Error>
              )}
          </FormField>
          <Buttons>
            <NewButton
              style={{
                margin: "10px",
              }}
            >
              Update Profile
            </NewButton>
            <NewButton onClick={signout}>Logout</NewButton>
          </Buttons>
        </Form>
      </Wrapper>
    </Container>
  );
};
