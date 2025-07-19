//globals
import Image from "next/image";
import { useState } from "react";

//locals
import Glass from "@/components/glass";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";




export default function Home() {

  return (
    <div className="">
      <Header></Header>
      <Glass></Glass>
      <Footer></Footer>
    </div>
  );
}
