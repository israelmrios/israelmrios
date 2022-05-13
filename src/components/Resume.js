import React from "react";
import Iresume from "../img/Israels_Resume.pdf";
// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <h1 className="main-headers">Resume</h1>
      {/* View PDF */}
      <div className="resume-container">
        <div className="resume-viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={Iresume} plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>           
        </div>

        
 
      </div>   
    </div>
  );
};

export default Resume;
