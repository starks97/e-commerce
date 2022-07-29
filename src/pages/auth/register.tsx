import React from "react";

import AuthLayout from "../../components/layouts/AuthLayout";

import { Signup } from "../../components/auth";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <AuthLayout title="Login" pageDescription="register your account">
      <Signup />
    </AuthLayout>
  );
}
