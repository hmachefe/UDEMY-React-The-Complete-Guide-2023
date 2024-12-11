import React from 'react';
import AuthForm from './AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return (
    <AuthForm />
  );
}

export default AuthenticationPage;

export async function action({request}) {
  // we can not use useSearchParams() since we are not in a component
   const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if ((mode !== "login") && (mode !== "signup")) {
    throw json({
      message: "Unsupported mode."
    }, {
      status: 422
    });
  }

  // we want to get hold of the data that was submitted with the form
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password")
  };

  // fetch("http://localhost:8080/login");
  // fetch("http://localhost:8080/signup");
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({
    }, {
      status: 500
    });
  }

  // soon, manage that token retrieved from the backend
  return redirect("/");

};
