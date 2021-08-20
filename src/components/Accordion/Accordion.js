import Registers from "./Registers.js";
import "./Accordion.css";

const hoobiesTitle = "Hobbies";
const skillsTitle = "Skills";
const resumeTitle = "Resume";

export default function Accordion({ hoobies, skills, resume }) {
  return (
    <>
      <div className="general-div">
        <svg>
          <symbol viewBox="0 0 24 24" id="expand-more">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </symbol>
          <symbol viewBox="0 0 24 24" id="close">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </symbol>
        </svg>
      </div>
      <Registers title={hoobiesTitle} personalInformation={hoobies} />
      <Registers title={skillsTitle} personalInformation={skills} />
      <Registers title={resumeTitle} personalInformation={resume} />
    </>
  );
}
