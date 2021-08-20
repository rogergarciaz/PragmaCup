import "./Card.css";
import Accordion from "../Accordion/Accordion";

const randomPicture = "https://picsum.photos/740/420/?random";
const withoutUsername = "Unknown, how bizarre...";

export default function Card({ member }) {
  return (
    member && (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="profile-card-2">
              <img
                src={
                  member !== undefined && member.picture
                    ? member.picture
                    : randomPicture
                }
                alt={member.username}
                className="img img-responsive"
              />
              <div className="profile-name">
                {member.name !== null || member.name !== undefined
                  ? member.name
                  : withoutUsername}
              </div>
              <div className="profile-username">@{member.username}</div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <Accordion
              hoobies={member.hoobies}
              skills={member.skills}
              resume={member.resume}
            />
          </div>
        </div>
      </div>
    )
  );
}
