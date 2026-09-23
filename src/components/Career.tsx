import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CRM Administration</h4>
                <h5>Timus Concept Pvt. Ltd • Nashik</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Supported 100+ CRM users with 95%+ first-contact resolution. Conducted UAT across Sales, Finance, Inventory, HR & Dispatch modules. Gathered requirements from 6+ departments, analyzed business data using SQL & Excel, and created key MIS/KPI dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Robotics & Automation</h4>
                <h5>JSPM's Rajarshi Shahu College of Engineering, Pune</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Graduated with 7.75 CGPA. Built a strong foundation in programming (C++, JS, React), SQL databases, systems engineering, automation, and data analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma - Electrical Engineering</h4>
                <h5>Sanjivani KBP Polytechnic, Kopargaon</h5>
              </div>
              <h3>2019 - 2022</h3>
            </div>
            <p>
              Completed with 83.60%. Developed core analytical problem-solving capabilities, circuit analysis, and technical troubleshooting methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IBM Certifications</h4>
                <h5>IBM</h5>
              </div>
              <h3>Certified</h3>
            </div>
            <p>
              • IBM Python 101 for Data Science<br />
              • IBM Microservices and Kubernetes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
