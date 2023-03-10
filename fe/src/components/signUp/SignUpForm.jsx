import React, { useEffect, useState } from "react";
import styled from "styled-components";
import copyBtn from "../../assets/svg/copyBtn.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//! SignUp POST URL
const SERVER_URL = "/register";

function SignUpForm({ setCookie }) {
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const displayName = e.target.displayName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      const { data } = await axios.post(SERVER_URL, {
        displayName,
        email,
        password,
      });
      console.log(data);
      // setCookie("accessToken", data["accessToken"], { path: "/" });

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("닉네임, 이메일, 비밀번호를 다시 확인해주세요");
    }
  };

  return (
    <>
      <LoginFm>
        <form onSubmit={onSubmitHandler}>
          <label>Display name</label>
          <input type="text" name="displayName" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Password</label>
          <input type="password" name="password" required />
          <p>
            Passwords must contain at least eight
            <br />
            characters, including at least 1 letter and 1<br />ß number.
          </p>
          <LoginBtn type="submit" value="Sign up" />
          <BottomExplain>
            By clicking “Sign up”, you agree to our
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of <br /> service
            </a>
            ,
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </a>
            and
            <a href="https://stackoverflow.com/legal/cookie-policy">
              cookie policy
            </a>
          </BottomExplain>
        </form>
        <ExplainWrapper>
          <p>
            Don't have an account?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#0a95ff" }}>
              Log in
            </Link>
          </p>
          <p>
            Are you an employer? Sign up on Talent
            <img src={copyBtn} alt="cpBtn" />
          </p>
        </ExplainWrapper>
      </LoginFm>
    </>
  );
}

export default SignUpForm;

const LoginFm = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    margin-top: 1.5rem;
  }

  input {
    width: 250px;
    height: 35px;
  }

  label {
    /* align-Content: flex-start; */
    font-size: 0.9rem;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const BottomExplain = styled.p`
  margin: 3rem 17px 0px 17px;
  a {
    text-decoration: none;
    color: #0a95ff;
    margin: 3px;
  }
`;

const LoginBtn = styled.input`
  width: 250px;
  height: 41px;
  font-size: 13px;
  text-align: center;
  background-color: #0a95ff;
  padding: 10px;
  margin: 5px 0;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin: 15px 0px;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const ExplainWrapper = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  & > p {
    margin-top: 1rem;
  }

  img {
    margin-left: 5px;
  }
`;
