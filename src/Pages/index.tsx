import React, { useEffect, Suspense } from "react";
import Header from "../Components/Header";
import About from "../Components/About";

export default function Home() {
  return (
    <>
      <Header />

      <About />
    </>
  );
}
