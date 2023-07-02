import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Diploma in Computer Science"
            subTitle="Chattogram Polytechnic Institute (2019 - 2023)"
            result="3.50/4"
            des="Diploma in Computer Science. Comprehensive training for diverse sectors. Equips me with skills to thrive as a web developer and contribute to the economy and cultural areas."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">

          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
            title="It Head Operation"
            subTitle="Road to Public University (2019 - 22)"
            result="Chattogran"
            des="As the IT Head Operator at Road to Public University, I oversaw and managed the organization's ensuring smooth operation of computer systems, networks. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;