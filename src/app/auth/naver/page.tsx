"use client";

import { useUserLoginMutation } from "@/services/auth/mutate";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Naver = () => {
  const code = new URLSearchParams(window?.location.search).get("code");

  const { userLoginMutate } = useUserLoginMutation(code, "NAVER");

  const router = useRouter();

  useEffect(() => {
    userLoginMutate();
    router.push("/");
  }, []);

  return <div></div>;
};

export default Naver;
