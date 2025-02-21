import Banner from '@/components/interface/banner';
import About from "@/components/interface/about";
import Projects from "@/components/interface/projects";
import Contact from '@/components/interface/contact';
import Footer from '@/components/interface/footer'
import Header from '@/components/interface/header';
import "@/styles/styles.css";

export default function Home() {
  return (
    <div className='bg-white'>

      <Header />

      <Banner />

      <About />

      <Projects />

      <Contact />

      <Footer />

    </div>
  );
}
