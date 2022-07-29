import React from "react";

import AuthLayout from "../../components/layouts/AuthLayout";

import { Login } from "../../components/auth";

type Props = {};

export default function loginPage({}: Props) {
  return (
    <AuthLayout title="Login" pageDescription="login in your account">
      <Login />
    </AuthLayout>
  );
}
