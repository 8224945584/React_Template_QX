import React from 'react';
import "./Main.css"
import Brain from './Images/brain.png'
import AI from './Images/AI.png'
import Brain_circuit from './Images/Brain_circuit.png'
import Brain_last from './Images/Brain_last.png'
// import Bg_image from './Images/Bg_image.png'

function Main() {

  return (
    <div>
      <main>
        <div className='headline_container'>
          <span className='headline_ai'>"AI transformation has become a <br /> necessity, not just an option."</span>
        </div>
        <div className='headline_tilak'>Tilakraj Parmar, <br /> Co-Founder & CEO, QX Lab AI</div>


        <div className="container">
          <div className="text-section">
            <p>Transforming business operations and facilitating smarter decision-making through personalized, innovative, and secure AI.</p>
          </div>
          <div className="features_1">
            <div className="feature-item">
              <img className='image' src={Brain} alt='' />
              <h3>Personalized AI Solutions</h3>
              <p>Tailored AI solutions for businesses of all sizes with adaptable models for specific tasks and industries.</p>
            </div>
            <div className="feature-item">
              <img className='image' src={Brain_circuit} alt='' />
              <h3>Cost-Effective Solutions</h3>
              <p>Intelligent, affordable, and eco-friendly AI solutions using neural network architectures.</p>
            </div>
          </div>
          <div className="features_2">
            <div className="feature-item">
            <img className='image' src={AI} alt='' />
              <h3>Latest AI Technologies</h3>
              <p>Leveraging cutting-edge Machine Learning, Deep Learning, and Neural Networks for advanced, innovative AI solutions.</p>
            </div>
            <div className="feature-item">
              <img className='image' src={Brain_last} alt='' />
              <h3>Complete Data Security & Compliance</h3>
              <p>Cutting-edge encryption, anonymization, and global compliance (GDPR, CCPA) for data handling, security, and privacy.</p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
