import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";
import Works from "../components/Works";
import Blog from "../components/Blog";

import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    {/* <Stats /> */}
    <Skills />
    
    <Hobbies/>
    <Works/>
    <Blog/>
   </div>
  );
}
