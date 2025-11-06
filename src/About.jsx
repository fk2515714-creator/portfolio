// function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-12 text-center">
//           About <span className="gradient-text">Me</span>
//         </h2>

//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
//             <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src="src/assets/fardeenimage.jpeg"
//                 alt="About"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="md:w-2/3 md:pl-12">
//             <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
//             <p className="mb-6 text-gray-600 dark:text-gray-300">
//               I'm a passionate frontend developer ...
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
//                     <i className="fas fa-graduation-cap text-primary-light dark:text-primary-dark"></i>
//                   </div>
//                   <h4 className="font-semibold">Education</h4>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   B.Sc. in Information technology
//                   <br />
//                   SGRR University, 2022-25,
//                   <br />
//                   pursuing MCA from SGRR University,
//                   <br />
//                   pursuing Full stack Web Development from Brillica Service
//                 </p>
//               </div>

//               <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 mr-4">
//                     <i className="fas fa-briefcase text-secondary-light dark:text-secondary-dark"></i>
//                   </div>
//                   <h4 className="font-semibold">Experience</h4>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Fresher
//                   <br />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

// src/components/About.jsx
import fardeenImage from "./assets/fardeenimage.jpeg"; // correct path from component

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fardeenImage}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm a passionate frontend developer with experience in building
              responsive and modern web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 mr-4">
                    <i className="fas fa-graduation-cap text-primary-light dark:text-primary-dark"></i>
                  </div>
                  <h4 className="font-semibold">Education</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Sc. in Information Technology, SGRR University, 2022-25
                  <br />
                  Pursuing MCA from SGRR University
                  <br />
                  Full Stack Web Development from Brillica Service
                </p>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-secondary-light/10 dark:bg-secondary-dark/10 mr-4">
                    <i className="fas fa-briefcase text-secondary-light dark:text-secondary-dark"></i>
                  </div>
                  <h4 className="font-semibold">Experience</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Fresher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
