// App.js
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaTools, FaLaptopCode, FaMicrochip, FaBook, FaLightbulb, FaUserCircle } from 'react-icons/fa';
import profileImage from './assets/Aashishimage.jpeg';

export default function App() {
  const [offers] = useState([
    {
      title: "Embedded Systems Development",
      description: "Custom firmware, drivers, and IoT solutions.",
      price: "Starting at $100"
    },
    {
      title: "Software Development",
      description: "C programming, automation, and scripting.",
      price: "Starting at $80"
    },
    {
      title: "Consultation Services",
      description: "Expert advice for your tech projects.",
      price: "Starting at $50/hr"
    }
  ]);

  const testimonials = [
    {
      name: "Rahul Deshmukh",
      feedback: "Aashish delivered exceptional firmware for our IoT prototype—stable, efficient, and well-documented!"
    },
    {
      name: "Sneha Patil",
      feedback: "His understanding of embedded systems is profound. Our startup relied on his consultation to launch successfully."
    },
    {
      name: "Kiran Mehta",
      feedback: "Very professional and reliable. The code was clean and his integration support was invaluable."
    }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091012184-7e0cdfbb6790?auto=format&fit=crop&w=1470&q=80)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black/80 p-8 rounded-2xl shadow-2xl max-w-5xl w-full mx-auto text-center"
      >
        <div className="flex flex-col items-center justify-center mb-6">
          <img src={profileImage} alt="Aashish" className="w-20 h-20 rounded-full border-4 border-white mb-4 object-cover" />
          <h1 className="text-4xl font-bold">
            <Typewriter
              words={["Hi, I'm Aashish", "Embedded Developer", "IoT Specialist", "Tech Consultant"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>

        <p className="text-lg mb-10 text-gray-300">
          I offer tailored solutions in Embedded Systems, IoT, Software Development, and more!
        </p>

        <h2 className="text-2xl font-semibold mb-6">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                {index === 0 && <FaMicrochip />}
                {index === 1 && <FaLaptopCode />}
                {index === 2 && <FaTools />}
                {offer.title}
              </h3>
              <p className="mb-2 text-gray-300">{offer.description}</p>
              <p className="text-green-400 font-bold">{offer.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Embedded Systems?</h2>
          <p className="text-gray-300 mb-4">
            Embedded systems are the brains behind modern electronics — from smart watches and medical devices to industrial robots and autonomous vehicles.
            With years of hands-on experience in firmware design, sensor integration, and real-time systems, I specialize in building reliable embedded solutions that bring ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2"><FaBook /> Skills</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>C, C++, Python</li>
                <li>Microcontrollers: STM32, AVR, ARM</li>
                <li>RTOS, UART, I2C, SPI, PWM</li>
                <li>Embedded Linux & Device Drivers</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2"><FaLightbulb /> Highlights</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Industry-focused solutions</li>
                <li>Time-critical embedded systems</li>
                <li>Passionate about innovation & tech</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg">
                <div className="text-xl mb-2 flex items-center gap-2 justify-center"><FaUserCircle /> {t.name}</div>
                <p className="text-gray-300 italic">"{t.feedback}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg font-medium mb-3">Connect with me:</p>
          <div className="flex justify-center space-x-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/ask-185583232/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="tel:+919975521821"
              className="text-green-400 hover:text-green-600 transition"
            >
              📞
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

