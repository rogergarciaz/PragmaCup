import "./Accordion.css";

export default function Bellows() {
  return (
    <>
      <svg
        className="control-icon control-icon-expand"
        width="24"
        height="24"
        role="presentation"
      >
        <use href="#expand-more" />
      </svg>
      <svg
        className="control-icon control-icon-close"
        width="24"
        height="24"
        role="presentation"
      >
        <use href="#close" />
      </svg>
    </>
  );
}
