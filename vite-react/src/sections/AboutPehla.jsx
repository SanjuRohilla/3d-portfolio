// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(' sanjurohillla@gmail.com');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
            
//             <img src="assets/Sanju1.jpg" alt="grid-1" className="w-full rounded-3xl sm:h-[276px] sm:rounded-lg h-fit object-contain" />
            
//             <div>
//               <p className="grid-headtext">Hi, I’m Sanju</p>
//               <p className="grid-subtext">
//                 Currently pursuing a degree in Biotechnology at NIT Raipur while building expertise in frontend engineering, Agentic AI, and Retrieval-Augmented Generation (RAG). Passionate about creating modern, high-performance web applications and intelligent AI-driven solutions that combine clean design, seamless user experiences, and scalable engineering. Always eager to learn, experiment, and build products that make a meaningful impact.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/Grid.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                <p> Specialized in JavaScript, </p>
//                <p> React.js, </p>
//               <p>Next.js, </p>
//                 <p>Three.js,</p>
//                  <p>Tailwind CSS,</p>
//                  <p>React Three Fiber,</p>
//                  <p>GSAP and modern frontend development.</p>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-4">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 27, lng: 74, text: 'Haryana, India', color: 'white', size: 15 }]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
//               {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">sanjurohillla@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;






import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  // LeetCode live stats
  const [leetStats, setLeetStats] = useState({
    totalSolved: 875,   // fallback value
    ranking: 1651,       // fallback value
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

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Hi, I'm Sanju */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/Sanju1.jpg" alt="grid-1" className="w-full rounded-3xl sm:h-[276px] sm:rounded-lg h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Sanju</p>
              <p className="grid-subtext">
                Currently pursuing a degree in Biotechnology at NIT Raipur while building expertise in frontend engineering, Agentic AI, and Retrieval-Augmented Generation (RAG). Passionate about creating modern, high-performance web applications and intelligent AI-driven solutions that combine clean design, seamless user experiences, and scalable engineering. Always eager to learn, experiment, and build products that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/Grid.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                <p>Specialized in JavaScript,</p>
                <p>React.js,</p>
                <p>Next.js,</p>
                <p>Three.js,</p>
                <p>Tailwind CSS,</p>
                <p>React Three Fiber,</p>
                <p>GSAP and modern frontend development.</p>
              </p>
            </div>
          </div>
        </div>

        {/* Globe / Time zone - height reduced */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
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
              <p className="grid-headtext">Remote-Ready, Any Time Zone</p>
              <p className="grid-subtext">Based in India, comfortable collaborating across time zones worldwide.</p>
            </div>
          </div>
        </div>

        {/* Passion for Coding - with live LeetCode stats */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                
                  href="https://leetcode.com/u/Sanju2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                >
                  <SiLeetcode className="text-yellow-400" />
                  {leetStats.totalSolved}+ Solved
                </a>
                
                  href="https://leetcode.com/u/Sanju2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-sm text-white"
                >
                  <SiLeetcode className="text-yellow-400" />
                  Rank: {leetStats.ranking}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-3">
              <p className="grid-subtext text-center">Contact me</p>

              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">sanjurohillla@gmail.com</p>
              </div>

              
                href="tel:+917496040775"
                className="flex items-center gap-2 justify-center text-white text-sm hover:opacity-70"
              >
                <FaPhoneAlt /> +91 74960 40775
              </a>

              <div className="flex justify-center gap-5 mt-2 text-xl">
                <a href="https://www.linkedin.com/in/sanju-rohilla-4450452a5/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/SanjuRohilla" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/sanjurohilla27/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">
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