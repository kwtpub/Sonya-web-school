import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Program from './components/Program';
import Results from './components/Results';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Courses />
        <Teachers />
        <Program />
        <Results />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
