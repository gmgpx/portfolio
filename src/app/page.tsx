import Banner from '@/components/custom/banner';
import About from "@/components/custom/about";
import Projects from "@/components/custom/projects";
import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';

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
