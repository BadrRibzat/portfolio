import React from 'react';
import profileImage from '../assets/my-documents/me.jpg';

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 pt-24 text-center min-h-screen flex flex-col justify-center items-center">
      <img src={profileImage} alt="Badr Ribzat" className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 border-4 border-white shadow-md" />
      <h1 className="text-5xl md:text-7xl font-bold text-white">Badr Ribzat</h1>
      <p className="mt-4 text-xl md:text-3xl text-white">Software Engineer | Web Developer | System Builder</p>
      <p className="mt-2 text-lg md:text-xl text-gray-100"><i className="fas fa-laptop-code mr-2"></i>Turning ideas into scalable applications and systems.</p>
    </section>
  );
};

export default Home;
