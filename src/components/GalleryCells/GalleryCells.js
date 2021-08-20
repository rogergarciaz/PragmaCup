import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import Loader from "../Loader/Loader";
import "./Gallery.css";

const memberPath = "member";
const description = "Description:";
const members = "Members:";
const status = "Status:";
const closeBtn = "Cerrar";

export default function GalleryCells({ cells }) {
  const history = useHistory();

  return (
    <div className="container">
      <div className="gallery-wrap">
        {cells && cells !== null ? (
          cells.map((cell, index) => {
            return (
              <Fragment key={index}>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${cell.picture})`,
                  }}
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${index + 1}`}
                  type="button"
                ></div>
                <div
                  className="modal fade"
                  id={`modal-${index + 1}`}
                  tabIndex="-1"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title modal-colors">
                          {cell.name}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body modal-colors">
                        <strong>{description}</strong> {cell.description}
                        <br />
                        <strong>{status}</strong> {cell.status}
                        <br />
                        <strong>{members}</strong> <br />
                        {cell.members.map((member) => {
                          return (
                            <>
                              <button
                                className="btn btn-outline-dark"
                                onClick={() => {
                                  history.push(`/${memberPath}/${member}`);
                                }}
                              >
                                {member}
                              </button>{" "}
                            </>
                          );
                        })}
                        <br />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-dismiss="modal"
                        >
                          {closeBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
