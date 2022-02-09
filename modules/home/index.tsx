import About from './sections/about';
import Hero from './sections/hero';
import Portofolio from './sections/portfolio';
import Service from './sections/service';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Service />
        <Portofolio />
      </main>
    </>
  );
};

export default Home;
