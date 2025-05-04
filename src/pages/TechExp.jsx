import React from 'react';
import '../styles/TechExp.css';

const TechExp = () => {
  return (
    <div className='timeline-container'>
      <div className='timeline'>
      
        <div className='timeline-item left'>
        <div className='timeline-content'>
            <img src='https://cdnb.artstation.com/p/assets/images/images/013/951/611/large/hamid-ahbedin-capture4.jpg?1541792740' alt='Artstation' />
            <h2>Teacher</h2>
            <h3>September 2021 - February 2023</h3>
              <ul>
                <li>Taught a classroom of 15 pupils</li>
                <li>Organised and delivered engaging lessons covering various subjects</li>
                <li>Ensured student's targets were being met</li>
                <li>Created a positive learning environment</li>
              </ul>
          </div>
        </div>

        <div className='timeline-item right'>
          <div className='timeline-content'>
            <img src='https://www.dynamonortheast.co.uk/wp-content/uploads/2022/08/Northcoders-Primary-Logo-Red-4.jpg' alt='Northcoders Logo' />
            <h2>Junior Full-Stack Developer</h2>
            <h3>January 2024 - April 2024</h3>
              <ul>
                <li>Completed a 13-week intensive bootcamp, mastering JavaScript, Node.js, and React fundamentals.</li>
                <li>Built applications, websites, and APIs from scratch through full-stack projects.</li>
                <li>Applied Test-Driven Development (TDD) and collaborated in pair programming daily.</li>
                <li>Strengthened problem-solving skills using self-tuition and technical documentation.</li>
                <li>Deployed projects including NC News and Marketplace using React, Node.js, and PostgreSQL.</li>
              </ul>
          </div>
        </div>

        <div className='timeline-item left2'>
          <div className='timeline-content'>
            <img src='https://miro.medium.com/v2/resize:fit:797/1*xn_6LH8GFaJNbsKSZVHm6g.png' alt='Tech Returners Logo' />
            <h2>Freelance Software Developer</h2>
            <h3>September 2024 - October 2024</h3>
              <ul>
                <li>Developed an exhibition curator platform as part of Tech Returners' Launchpad program.</li>
                <li>Managed the entire development lifecycle, ensuring the MVP was achieved.</li>
                <li>Enhanced technical and professional skills through real-world consultancy experience.</li>
                <li>Utilized Next.js, React, and Tailwind CSS to improve platform scalability and efficiency.</li>
              </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TechExp;
