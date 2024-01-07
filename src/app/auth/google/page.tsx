"use client";

import { useUserLoginMutation } from "@/services/auth/mutate";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Google = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { userLoginMutate } = useUserLoginMutation(code, "GOOGLE");

  const router = useRouter();

  useEffect(() => {
    userLoginMutate();
  }, []);

  return <div></div>;
};

export default Google;
