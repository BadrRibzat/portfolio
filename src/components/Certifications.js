import React from 'react';
import softwareEng from '../assets/my-documents/BadrRibzat.pdf';
import pythonBeginner from '../assets/my-documents/Python-Beginner.pdf';
import javascript from '../assets/my-documents/JavaScript.pdf';
import javascript2 from '../assets/my-documents/JavaScript-2.pdf';
import sqlCert from '../assets/my-documents/SQL_certificate.jpg';
import webDev from '../assets/my-documents/Certificate_Web-Development-Beginner.pdf';
import digitalMarketing from '../assets/my-documents/Google.pdf';
import socialMedia from '../assets/my-documents/certificate_Social-Media-Marketing.pdf';
import englishIntermediate from '../assets/my-documents/English-Intermediate.pdf';
import cariste from '../assets/my-documents/carist.pdf';
import cancerStudies from '../assets/my-documents/cancer.jpg';
import nutrition from '../assets/my-documents/Nutrition.pdf';
import culinary from '../assets/my-documents/Certificate_Chef-Cuisine .pdf';

const Certifications = () => {
  return (
    <section id="certifications" className="p-8 md:p-12 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"><i className="fas fa-certificate mr-2"></i>Certifications</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={softwareEng} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Software Engineering Foundations - 2024</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={pythonBeginner} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Python Programming (Beginner) - 2022</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={javascript} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>JavaScript Programming - 2022</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={javascript2} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>JavaScript Programming (Intermediate) - 2023</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={sqlCert} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>SQL Certification - 2023</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={webDev} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Web Development Fundamentals - 2022</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={digitalMarketing} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Digital Marketing (Google Certified) - 2020</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={socialMedia} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Social Media Marketing - 2022</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={englishIntermediate} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Professional English (Intermediate) - 2023</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={cariste} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Cariste Authorization (Forklift) - 2023</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={cancerStudies} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Cancer Studies - 2022</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={nutrition} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Nutrition Science - 2020</a></li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><a href={culinary} className="text-blue-600 hover:underline"><i className="fas fa-file-alt mr-2"></i>Culinary Arts - 2021</a></li>
      </ul>
    </section>
  );
};

export default Certifications;
