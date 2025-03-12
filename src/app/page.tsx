import Banner from '@/components/interface/banner';
import About from "@/components/interface/about";
import Projects from "@/components/interface/projects";
import Header from '@/components/interface/header';
import Footer from '@/components/interface/footer';

import "@/styles/styles.css";

export default function Home() {
  return (
    <div className='bg-neutral-950'>

      <Header />

      <Banner />

      <About />

      <Projects />

      <Footer />

    </div>
  );
}
