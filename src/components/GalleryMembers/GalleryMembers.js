import { Fragment } from "react";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom";
import { members } from "../../helpers/members";
import "../GalleryCells/Gallery.css";

const memberPath = "member";
const name = "My Name:";
const currently = "Currently working on the cell:";
const resume = "Resume:";
const openModal = "Let's see more about myself!";
const closeBtn = "Cerrar";

export default function GalleryMembers() {
  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="gallery-wrap">
          {members !== null ? (
            members.map((member, id) => {
              return (
                <Fragment key={id}>
                  <div
                    className="item"
                    style={{
                      backgroundImage: `url(${member.picture})`,
                    }}
                    data-bs-toggle="modal"
                    data-bs-target={`#${member.username}`}
                    type="button"
                  ></div>
                  <div
                    className="modal fade"
                    id={member.username}
                    tabIndex="-1"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title modal-colors">
                            {member.username}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body modal-colors">
                          <strong>{name}</strong> {member.name}
                          <br />
                          <strong>{currently}</strong> {member.cell}
                          <br />
                          <strong>{resume}</strong> {member.resume}
                          <br />
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                              history.push(`/${memberPath}/${member.username}`);
                            }}
                          >
                            {openModal}
                          </button>
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
    </>
  );
}
