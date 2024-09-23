"use client"
import './globals.css';
import Home from './home/page';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Footer from './footer/page.jsx'
export default function Page() {
  return (
    <div>
    <Home/>  
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}
