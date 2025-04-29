import Banner from '@/components/layout/banner';
import About from "@/components/layout/about";
import Projects from "@/components/layout/projects";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
