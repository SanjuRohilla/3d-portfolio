import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // LeetCode live stats
  const [leetStats, setLeetStats] = useState({
    totalSolved: 875, // fallback value
    ranking: 1651, // fallback value
  });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/Sanju2005/solved');
        const rankRes = await fetch('https://alfa-leetcode-api.onrender.com/Sanju2005');

        if (res.ok) {
          const data = await res.json();
          const rankData = rankRes.ok ? await rankRes.json() : null;

          setLeetStats({
            totalSolved: data?.solvedProblem || 875,
            ranking: rankData?.ranking || 1651,
          });
        }
      } catch (error) {
        // API down ya fetch fail -> fallback values already set hain, kuch nahi karna
        console.log('LeetCode stats fetch failed, using fallback values.');
      }
    };

    fetchLeetCodeStats();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('sanjurohillla@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const hoverCardClass =
    'grid-container transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-500/30';

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* About Me */}
        <div className="col-span-1 xl:row-span-2">
          <div className={hoverCardClass}>
            <img src="assets/Sanju1.jpg" alt="Sanju Rohilla profile photo" className="w-full rounded-3xl sm:h-[276px] sm:rounded-lg h-fit object-contain" />
            <div>
              <p className="grid-headtext">About Me</p>
              <p className="grid-subtext">
                Currently pursuing a degree in Biotechnology at NIT Raipur while actively building modern web applications and AI-powered solutions. My interests span Frontend Engineering, Agentic AI, and Retrieval-Augmented Generation (RAG), where I combine creativity with technology to build scalable, user-centric, and intelligent digital experiences. Passionate about continuous learning, I enjoy transforming ideas into impactful products through clean code, thoughtful design, and problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
<div className="col-span-1 xl:row-span-2">
  <div className={hoverCardClass}>
    <img
      src="assets/Grid.jpg"
      alt="Tech stack illustration"
      className="w-full sm:h-[276px] h-fit object-contain"
    />

    <div>
      <p className="grid-headtext">Tech Stack</p>

      <div className="grid-subtext space-y-2">

        <p>
          <span className="font-semibold text-white">Languages:</span>{" "}
          <span className="text-purple-400 font-medium">
            JavaScript, C++, Python
          </span>
        </p>

        <p>
          <span className="font-semibold text-white">Frontend:</span>{" "}
          <span className="text-purple-400 font-medium">
            React.js, Next.js, Three.js, React Three Fiber,
            Tailwind CSS, GSAP
          </span>
        </p>

        <p>
          <span className="font-semibold text-white">Backend:</span>{" "}
          <span className="text-purple-400 font-medium">
            Node.js, MongoDB
          </span>
        </p>

        <p>
          <span className="font-semibold text-white">AI & Automation:</span>{" "}
          <span className="text-purple-400 font-medium">
            Agentic AI, LangGraph, RAG, Prompt Engineering
          </span>
        </p>

        <p>
          <span className="font-semibold text-white">Tools:</span>{" "}
          <span className="text-purple-400 font-medium">
            Git, GitHub, Canva
          </span>
        </p>

      </div>
    </div>
  </div>
</div>

        {/* Globe / Time zone - height reduced + achievements */}
        <div className="col-span-1 xl:row-span-2">
          <div className={hoverCardClass}>
            <div className="rounded-3xl w-full sm:h-[200px] h-fit flex justify-center items-center">
              <Globe
                height={200}
                width={200}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 27, lng: 74, text: 'Haryana, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Global Opportunities</p>
              <p className="grid-subtext">Based in India and excited to collaborate with teams across different time zones to build impactful products.</p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-white/90 hover:text-purple-300 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Smart India Hackathon — <span className="text-purple-400 font-semibold">Finalist</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90 hover:text-purple-300 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  NBC Ideathon — <span className="text-purple-400 font-semibold">Semi-Finalist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passion for Coding - with live LeetCode stats */}
<div className="xl:col-span-2 xl:row-span-2">
  <div className={hoverCardClass}>
    <img
      src="assets/grid3.png"
      alt="Coding passion illustration"
      className="w-full sm:h-[266px] h-fit object-contain"
    />

    <div>
      <p className="grid-headtext">Problem Solving Journey</p>

      <p className="grid-subtext">
        Consistently strengthening my problem-solving skills through
        <span className="text-purple-400 font-medium">
          {" "}Data Structures & Algorithms
        </span>
        , with
        <span className="text-purple-400 font-medium">
          {" "}877+ solved problems
        </span>
        ,
        <span className="text-purple-400 font-medium">
          {" "}1500+ submissions
        </span>
        {" "}over the past year, and participation in
        <span className="text-purple-400 font-medium">
          {" "}20+ coding contests
        </span>
        . Experienced in solving problems involving Arrays, Strings,
        Linked Lists, Trees, Graphs, Dynamic Programming, Greedy,
        Sliding Window, Binary Search, Heaps, Recursion,
        Backtracking and advanced C++ STL with a strong focus on
        writing efficient and optimized solutions.
      </p>

      <div className="flex flex-wrap gap-3 mt-5">

        {/* Problems Solved */}
        <a
          href="https://leetcode.com/u/Sanju2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 text-sm text-white"
        >
          <SiLeetcode className="text-yellow-400" />
          <span className="text-purple-400 font-bold">
            {leetStats.totalSolved}+
          </span>
          Problems Solved
        </a>

        {/* Contest Rating */}
        <a
          href="https://leetcode.com/u/Sanju2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 text-sm text-white"
        >
          🏆
          Contest Rating
          <span className="text-purple-400 font-bold">
            1651
          </span>
        </a>

        {/* Contests */}
        <a
          href="https://leetcode.com/u/Sanju2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 text-sm text-white"
        >
          ⚔️
          20+ Contest Participations
        </a>

        {/* Profile */}
        <a
          href="https://leetcode.com/u/Sanju2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all duration-200 text-sm font-medium text-white"
        >
          🚀 Explore My LeetCode
        </a>

      </div>
    </div>
  </div>
</div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className={hoverCardClass}>
            <img
              src="assets/grid4.png"
              alt="Contact section illustration"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-3">
              <p className="grid-subtext text-center">Let's Build Something Amazing 🚀</p>

              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">sanjurohillla@gmail.com</p>
              </div>

              <a
                href="tel:+917496040775"
                className="flex items-center gap-2 justify-center text-white text-sm hover:text-purple-300 transition-colors duration-200"
              >
                <FaPhoneAlt /> +91 74960 40775
              </a>

              <div className="flex justify-center gap-5 mt-2 text-xl">
                <a href="https://www.linkedin.com/in/sanju-rohilla-4450452a5/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile" className="text-white hover:text-blue-400 hover:scale-110 transition-all duration-200">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/SanjuRohilla" target="_blank" rel="noopener noreferrer" title="GitHub Profile" className="text-white hover:text-gray-400 hover:scale-110 transition-all duration-200">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/sanjurohilla27/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram Profile" className="text-white hover:text-pink-400 hover:scale-110 transition-all duration-200">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
