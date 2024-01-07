"use client";

import { useUserLoginMutation } from "@/services/auth/mutate";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Naver = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { userLoginMutate } = useUserLoginMutation(code, "NAVER");

  const router = useRouter();

  useEffect(() => {
    userLoginMutate();
  }, []);

  return <div></div>;
};

export default Naver;
