import React, { useEffect } from "react";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <div>About</div>
  )
}

export default About