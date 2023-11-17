import React from 'react';
import { motion } from 'framer-motion';
import { SkillsData } from '../../Data/Data';

const Skills = () => {
  return (
    <div className="p-3 mt-16 text-white">
       <h2 className="mb-6 text-3xl font-bold text-center md:text-left">Skills</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {SkillsData.map(skill => (
          <motion.div
            key={skill._id}
            className="flex items-center p-4 transition-transform rounded-lg shadow-lg bg-zinc-900 transform-gpu hover:scale-105"
          >
            <img
              src={skill.img}
              alt={skill.title}
              className="w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
