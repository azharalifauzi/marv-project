import About from './sections/about';
import Hero from './sections/hero';
import Portofolio from './sections/portfolio';
import Service from './sections/service';
import Testimonial from './sections/testimonial';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Service />
        <Portofolio />
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
