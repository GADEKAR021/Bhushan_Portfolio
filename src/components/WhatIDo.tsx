import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          SK<span className="hat-h2">ILLS &</span>
          <div>
            EX<span className="do-h2">PERTISE</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CRM & BUSINESS ANALYSIS</h3>
              <h4>Focus Area</h4>
              <p>
                Enterprise CRM operations, application support, requirement gathering, business process analysis, UAT across Sales/Finance/Inventory/HR/Dispatch modules, and workflow optimization.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">CRM Administration</div>
                <div className="what-tags">Stakeholder Management</div>
                <div className="what-tags">Requirement Gathering</div>
                <div className="what-tags">Business Process Analysis</div>
                <div className="what-tags">UAT</div>
                <div className="what-tags">Process Improvement</div>
                <div className="what-tags">Workflow Optimization</div>
                <div className="what-tags">Data Quality Management</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA & ANALYTICS</h3>
              <h4>Focus Area</h4>
              <p>
                Analyzing business data using SQL and Advanced Excel, building interactive KPI dashboards in Power BI, MIS reporting, and visualizing sales performance metrics.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Advanced Excel</div>
                <div className="what-tags">Power BI</div>
                <div className="what-tags">KPI Dashboards</div>
                <div className="what-tags">MIS Reporting</div>
                <div className="what-tags">Data Analysis</div>
                <div className="what-tags">Data Visualization</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DEVELOPMENT & AI AUTOMATION</h3>
              <h4>Focus Area</h4>
              <p>
                Building enterprise web portals with React.js, Spring Boot, REST APIs, JWT authentication, and integrating OpenAI API for natural language queries and AI business automation.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Claude</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Git & GitHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
