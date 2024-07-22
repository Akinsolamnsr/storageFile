'use client'


import Footer from "../../../dir/PageSetup/footer";
import Nav from "../../../dir/PageSetup/navbar";
import Sidebar from "../../../dir/PageSetup/sidebar";
import { ReactElement } from "react";



export default function Layout({children}:{children:ReactElement}) {

  return (
   <main className=" flex w-full h-[100vh] bg-green-100"> 
     <div className="w-[30%]">
   <Sidebar />
     </div>


     <div className="w-[70%] bg-white h-full">
     <Nav />
      {children}
     </div>
   </main>
  );
}