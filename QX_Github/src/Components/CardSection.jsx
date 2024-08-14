// CardSection.js
import React from 'react';
import './CardSection.css';

const cardData = [
  {
    title: "Ask QX",
    description: "100+ languages supported\nTrained on 372 Billion+ datasets\nSafety & Accuracy",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2024/03/ask_qx.jpg"
  },
  {
    title: "Text-to-Code",
    description: "Unlock coding potential with real-time suggestions\nGenerate & Edit Code\nSeamless Code Conversion in multiple languages",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2024/03/Text-to-Code.png"
  },
  {
    title: "Text-to-Image",
    description: "Give meaning to your imagination\nCreate stunning visuals using simple text descriptions\nCustomize and refine images",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2023/12/text_to_image.jpg"
  },
  {
    title: "Multi-Modal V1.5",
    description: "Combines text, images, videos\nInterprets varied data sources\nBetter reasoning capabilities",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2023/12/multimodal-1.jpg"
  },
  {
    title: "Document Analyzer",
    description: "Streamline document processing\nExtract key insights and data points effortlessly\nIntelligent document parsing and analysis",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2023/12/pdf-analyzer.jpg"
  },
  {
    title: "Compute Vision",
    description: "Second opinion for patients\nAssists doctors in diagnosis and knowledge sharing\nUpload scans and images for AI-powered analysis",
    imageUrl: "https://www.qxlabai.com/wp-content/uploads/2023/12/vision_pro.jpg"
  }
];

const CardSection = () => {
  return (
    <div className="card-section1">
      {cardData.map((card, index) => (
        <div key={index} className="card1">
          <img src={card.imageUrl} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
