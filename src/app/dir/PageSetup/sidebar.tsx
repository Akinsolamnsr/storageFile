'use client'

import Link from "next/link";



export default function Sidebar() {

  return (
    <div className=" bg-blue-700 w-full h-full text-center flex justify-center items-center  text-white"> 
    <div className="flex flex-col text-xl ">
    <Link href={'/mathematics/add'} className="font-bold p-4 text-xl border border-cyan-300 border-2 m-4 rounded-3xl" >Add</Link>
     <Link href={'/mathematics/edit'}  className="font-bold p-4 text-xl border border-orange-300 border-2 m-4 rounded-3xl" >Edit</Link>
     <Link href={'/mathematics/delete'} className="font-bold p-4 text-xl border border-pink-300 border-2 m-4 rounded-3xl" >Delete</Link>
     <Link href={'/mathematics/preview'}  className="font-bold p-4 text-xl border border-blue-300 border-2 m-4 rounded-3xl" >Preview</Link>
     <Link href={'/mathematics/quiz'}  className="font-bold p-4 text-xl border border-blue-300 border-2 m-4 rounded-3xl" >Quiz</Link>
    </div>
  </div>
  );
}