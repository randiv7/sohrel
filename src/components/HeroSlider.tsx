
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop',
      title: 'MINIMALISM',
      subtitle: 'REDEFINED',
      description: 'Discover the art of minimalism'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=900&fit=crop',
      title: 'LESS IS',
      subtitle: 'EVERYTHING',
      description: 'Curated fashion for the modern individual'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop',
      title: 'TIMELESS',
      subtitle: 'STYLE',
      description: 'Quality pieces, endless possibilities'
    }
  ];

  const taglines = [
    'Minimalism Redefined',
    'Less is Everything', 
    'Timeless Style'
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimationKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, [taglines.length]);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1200 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero ${slide.id}`}
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Main Brand */}
            <div className="mb-8">
              <h1 
                key={`brand-${animationKey}`}
                className="heading-hero mb-4 animate-fade-in-up"
              >
                SOHREL
              </h1>
              
              {/* Rotating Tagline */}
              <div className="h-8 overflow-hidden">
                <p 
                  key={`tagline-${currentTagline}`}
                  className="heading-sm font-light tracking-widest animate-slide-up"
                >
                  {taglines[currentTagline]}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div 
              key={`cta-${animationKey}`}
              className="animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <button
                onClick={scrollToProducts}
                className="btn-secondary text-white border-white hover:bg-white hover:text-black mb-8"
              >
                EXPLORE COLLECTION
              </button>
            </div>

            {/* Current Slide Description */}
            <p 
              key={`desc-${animationKey}`}
              className="body-lg opacity-90 animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={scrollToProducts}
            className="animate-bounce-subtle text-white hover:text-gray-300 transition-colors"
            aria-label="Scroll to products"
          >
            <ChevronDown size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20 z-20">
          <div
            key={`progress-${animationKey}`}
            className="h-full bg-white"
            style={{
              width: '100%',
              transformOrigin: 'left',
              animation: 'slideProgress 5s linear'
            }}
          />
        </div>
      </section>

      <style>{`
        @keyframes slideProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
