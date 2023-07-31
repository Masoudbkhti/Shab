// "use client"
import { useParams } from 'next/navigation'
import React from 'react'
import City from './City';
export default function page() {
    const { resId } = useParams();
    // console.log(parm.r)
  return (
    <div>
      uuuuuuuuuuuuuuuuuuuuu
      <City />
      {/* {parm[resId]} */}
    </div>
  );
}
