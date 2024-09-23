"use client"
import './globals.css';
import Home from './home/page';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Page() {
  return (
    <div>
    <Home/>  
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}
