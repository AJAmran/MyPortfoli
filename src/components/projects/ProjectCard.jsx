import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const galleryImages = project.images.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="bg-boxBg shadow-shadowOne rounded-xl p-8 transition-transform transform hover:scale-105 duration-300">
      {project.images && (
        <div className="image-gallery-container mb-6">
          <ImageGallery
            items={galleryImages}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
            slideDuration={450}
            showNav={true}
            thumbnailPosition="bottom"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold font-titleFont text-lightText mb-6">{project.title}</h3>
      <p className="text-lightText text-lg leading-relaxed mb-6">{project.description}</p>
      <p className="text-lightText text-sm font-bodyFont mb-6">
        <strong className="text-lightText text-lg">Technologies:</strong> {project.Technologies}
      </p>

      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            className="text-lightText text-lg font-semibold flex items-center hover:text-designColor transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <FaExternalLinkAlt className="ml-2" />
          </a>
        )}

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {project.GithubRepo && (
            <a
              href={project.GithubRepo}
              className="text-lightText flex items-center text-lg font-semibold hover:text-designColor transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" />
              Client Code
              <FaExternalLinkAlt className="ml-2" />
            </a>
          )}

          {project.Server && (
            <a
              href={project.Server}
              className="text-lightText flex items-center text-lg font-semibold hover:text-designColor transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" />
              Server Code
              <FaExternalLinkAlt className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
