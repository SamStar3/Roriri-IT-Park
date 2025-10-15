import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, Calendar, MapPin, Users, Star, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images
import image1 from '../Assets/RecentActivities/image.png';
import image2 from '../Assets/RecentActivities/image copy.png';
import image3 from '../Assets/RecentActivities/image copy 2.png';
import image4 from '../Assets/RecentActivities/image copy 3.png';
import image5 from '../Assets/RecentActivities/image copy 4.png';

const VolleyballTournament = ({ onBackToHome }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Tournament data
  const tournamentData = {
    title: "IT Park Volleyball Championship 2024",
    date: "September 06-07, 2025",
    location: "IT Park Sports Complex",
    participants: "16 Teams",
    description: "An exciting volleyball tournament that brought together teams from across the IT Park community for two days of competitive sports and team building."
  };

  // Your actual images
  const images = [
    { 
      src: image1, 
      alt: "Tournament Opening Ceremony",
      caption: "Grand Opening Ceremony"
    },
    { 
      src: image2, 
      alt: "Intense Match Action",
      caption: "Intense Match Moments"
    },
    { 
      src: image3, 
      alt: "Team Celebrations",
      caption: "Victory Celebrations"
    },
    { 
      src: image4, 
      alt: "Award Ceremony",
      caption: "Award Ceremony"
    },
    { 
      src: image5, 
      alt: "Winners Group Photo",
      caption: "Champions Group Photo"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleBackToHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.href = '/';
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        {/* Back Button */}
        <button
          onClick={handleBackToHome}
          className={`group mb-6 sm:mb-8 flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300 group-hover:-translate-x-1 transform" />
          <span className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
            Back to Home
          </span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
          <div className="relative inline-block mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              🏐 Volleyball Championship 2025
            </h1>
            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            {tournamentData.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Calendar, text: tournamentData.date },
              { icon: MapPin, text: tournamentData.location },
              { icon: Users, text: tournamentData.participants }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-200 shadow-sm">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <span className="text-gray-700 text-sm sm:text-base font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Tournament Highlights
          </h2>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image Display */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white">
              <div className="aspect-video relative">
                <img
                  src={images[activeImageIndex].src}
                  alt={images[activeImageIndex].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback when image fails to load */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
                      {images[activeImageIndex].caption}
                    </h3>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                </button>

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                    {images[activeImageIndex].caption}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    Image {activeImageIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === activeImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex justify-center space-x-2 sm:space-x-4 mt-6 sm:mt-8 overflow-x-auto pb-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === activeImageIndex 
                      ? 'border-blue-500 scale-110 shadow-lg' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 hidden items-center justify-center">
                    <span className="text-gray-500 text-xs font-medium">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Success Story Section */}
        <div className={`mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-xl">
            <div className="text-center mb-8">
              <Trophy className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Tournament Success
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Event Highlights</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>16 competitive teams participated</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Two days of exciting matches</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Great team building and networking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>Enhanced community spirit</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">What's Next?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This volleyball tournament is just the beginning! IT Park is committed to organizing more exciting activities and events that bring our community together.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Stay tuned for upcoming events including cricket tournaments, cultural festivals, tech meetups, and more recreational activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Activities Section */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.9s'}}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              More Exciting Events Coming Soon!
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join us for upcoming tournaments, cultural events, tech talks, and community activities. 
              IT Park - where innovation meets recreation!
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/30">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
              <span className="font-semibold text-sm sm:text-base">Stay Connected for Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        /* Smooth scrolling */
        .overflow-x-auto {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
};

export default VolleyballTournament;