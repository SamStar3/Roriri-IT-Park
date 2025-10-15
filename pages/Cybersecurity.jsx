import { useState, useEffect } from 'react';

// Importing all cybersecurity images
import CybersecurityImg from '/src/Assets/CyberSecurity/Cybersecurity.jpg';
import EthicalHacking from '/src/Assets/CyberSecurity/EthicalHacking.jpg';
import NetworkSecurity from '/src/Assets/CyberSecurity/NetworkSecurity.jpg';
import DigitalForensics from '/src/Assets/CyberSecurity/DigitalForensics.jpg';
import Cryptography from '/src/Assets/CyberSecurity/Cryptography.jpg';
import KaliLinux from '/src/Assets/CyberSecurity/KaliLinux.jpg';
import Wireshark from '/src/Assets/CyberSecurity/Wireshark.jpg';
import Metasploit from '/src/Assets/CyberSecurity/Metasploit.jpg';
import Nmap from '/src/Assets/CyberSecurity/Nmap.jpg';
import SecurityAnalyst from '/src/Assets/CyberSecurity/SecurityAnalyst.jpg';
import PenetrationTester from '/src/Assets/CyberSecurity/PenetrationTester.webp';
import ForensicExpert from '/src/Assets/CyberSecurity/ForensicExpert.webp';
import SecurityArchitect from '/src/Assets/CyberSecurity/SecurityArchitect.webp';

const Cybersecurity = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Cybersecurity data with imported images
  const cyberData = {
    overview: {
      title: "Cybersecurity",
      description: "Master the art of protecting systems, networks, and programs from digital attacks. Learn ethical hacking techniques, network security fundamentals, and digital forensics to become a skilled cybersecurity professional.",
      duration: "7 months",
      level: "Intermediate",
      image: CybersecurityImg
    },
    domains: {
      title: "Security Domains",
      items: [
        { name: "Ethical Hacking", image: EthicalHacking },
        { name: "Network Security", image: NetworkSecurity },
        { name: "Digital Forensics", image: DigitalForensics },
        { name: "Cryptography", image: Cryptography }
      ]
    },
    tools: {
      title: "Security Tools",
      items: [
        { name: "Kali Linux", image: KaliLinux },
        { name: "Wireshark", image: Wireshark },
        { name: "Metasploit", image: Metasploit },
        { name: "Nmap", image: Nmap }
      ]
    },
    certifications: {
      title: "Career Paths",
      items: [
        { name: "Security Analyst", image: SecurityAnalyst },
        { name: "Penetration Tester", image: PenetrationTester },
        { name: "Forensic Expert", image: ForensicExpert },
        { name: "Security Architect", image: SecurityArchitect }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch(currentTab) {
      case 'domains':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cyberData.domains.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'tools':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cyberData.tools.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cyberData.certifications.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src={cyberData.overview.image} 
                alt="Cybersecurity Overview" 
                className="rounded-lg shadow-xl w-full h-auto max-h-80 md:max-h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{cyberData.overview.title}</h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base">{cyberData.overview.description}</p>
              
              <div className="bg-green-100 p-3 md:p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">Duration:</span> 
                  <span className="ml-1 text-sm md:text-base">{cyberData.overview.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm md:text-base">Level:</span> 
                  <span className="ml-1 text-sm md:text-base">{cyberData.overview.level}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const TechCard = ({ name, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="h-40 sm:h-36 md:h-40 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-center">{name}</h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Cybersecurity
          </h1>
          <p className="mt-3 md:mt-5 max-w-xl mx-auto text-lg md:text-xl text-gray-500">
            Master Ethical Hacking, Network Security, and Digital Forensics
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-6 md:mb-8 border-b border-gray-200">
          {['overview', 'domains', 'tools', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-4 py-2 md:px-6 md:py-3 font-medium text-xs md:text-sm rounded-t-lg mr-1 md:mr-2 mb-2 ${currentTab === tab ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              {cyberData[currentTab]?.title || cyberData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Security Concepts */}
        <div className="mt-8 md:mt-12 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Core Security Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { 
                name: "CIA Triad", 
                description: "Confidentiality, Integrity, and Availability - the fundamental principles of security",
                icon: "🔒"
              },
              { 
                name: "Threat Modeling", 
                description: "Identifying potential threats and vulnerabilities in systems",
                icon: "🛡️"
              },
              { 
                name: "Risk Management", 
                description: "Assessing and mitigating potential security risks",
                icon: "📊"
              }
            ].map((concept, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{concept.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{concept.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Process */}
        <div className="mt-8 md:mt-12 bg-white p-4 md:p-6 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Security Assessment Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 overflow-x-auto pb-2">
            {['Reconnaissance', 'Scanning', 'Gaining Access', 'Maintaining Access', 'Covering Tracks'].map((step, index) => (
              <div key={index} className="flex flex-col items-center min-w-max px-2 md:px-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <span className="text-green-600 font-bold text-sm md:text-base">{index + 1}</span>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center text-gray-500 text-xs md:text-sm">
          <p>Security is not a product, but a process.</p>
          <p className="mt-1 md:mt-2">© {new Date().getFullYear()} Cybersecurity</p>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;