'use client'

import Link from "next/link";



export default function PageIndex() {

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100 h-[100vh] "> 
    <div className="text-4xl font-bold mb-12">Mathematics</div>
    <div className="flex ">
     <Link href={'/mathematics/add'} className="font-bold p-8 text-2xl border border-cyan-300 border-2 m-4 rounded-3xl" >Add</Link>
     <Link href={'/mathematics/edit'}  className="font-bold p-8 text-2xl border border-orange-300 border-2 m-4 rounded-3xl" >Edit</Link>
     <Link href={'/mathematics/delete'} className="font-bold p-8 text-2xl border border-pink-300 border-2 m-4 rounded-3xl" >Delete</Link>
     <Link href={'/mathematics/preview'}  className="font-bold p-8 text-2xl border border-blue-300 border-2 m-4 rounded-3xl" >Preview</Link>
     <Link href={'/mathematics/quiz'}  className="font-bold p-8 text-2xl border border-blue-300 border-2 m-4 rounded-3xl" >Quiz</Link>
    </div>
       
     </div>
  );
}