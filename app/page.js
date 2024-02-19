import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";

import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    {/* <Stats /> */}
    <Skills />
    {/* <Resume /> */}
    <Hobbies/>
    {/* <Blog/> */}
   </div>
  );
}
