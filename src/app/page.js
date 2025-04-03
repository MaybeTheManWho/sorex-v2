import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Clients from '@/components/home/Clients';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Clients Section */}
      <Clients />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's turn your ideas into reality. Contact us today to discuss your project.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-green font-bold rounded-md shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}