import Bellows from "./Bellows.js";
import Basses from "./Basses.js";
import "./Accordion.css";

export default function Registers({ title, personalInformation }) {
  return (
    <details>
      <summary>
        {title}
        <Bellows />
      </summary>
      <Basses personalInformation={personalInformation} />
    </details>
  );
}
