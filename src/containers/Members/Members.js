import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMember } from "./useMember";
import { container, variants } from "../../helpers/Constants";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { members } from "../../helpers/members";

const greetings = "Heyyy!,";
const descriptionSearch =
  "search for P-P members, or don't I can't tell you what to do";
const searchBtn = "Search!";
const userNotFound = "Not found, check the username or try with a different ";
const placeholder = "Write a P-P member username, like ragarcia";
const delayAnimation = 0;
const durationAnimation = 0.35;
const scaleAnimation = 2;


export default function Members() {
  let { username } = useParams();
  const [inputUsername, setInputUsername] = useState(username);
  const handleOnChange = (event) => {
    setInputUsername(event.target.value);
  };

  const history = useHistory();
  const {member, setMember} = useMember(inputUsername, members);
  const searchMember = () => {
    history.push(`/member/${inputUsername}`);
    setMember(members.find((user) => user.username === inputUsername));
  };

  return (
    <div className="text-center mt-5">
      <motion.h1
        className="mt-5"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: durationAnimation }}
      >
        {greetings}
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: delayAnimation,
          duration: durationAnimation * 2,
        }}
      >
        {descriptionSearch}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: delayAnimation * 4,
          duration: durationAnimation * 3,
        }}
        className="input-group mb-3 mt-4"
      >
        <input
          placeholder={username ? username : placeholder}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          type="text"
          className={"form-control mt-5"}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </motion.div>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          searchMember();
        }}
      >
        {searchBtn}
      </button>
      <br />
      {member ? (
        <>
          <motion.h1
            initial={{ scale: scaleAnimation }}
            animate={{ scale: scaleAnimation / 2 }}
            transition={{ duration: durationAnimation * 3 }}
            className="mt-4 mb-4"
          >
            {member.name}
          </motion.h1>
          <Card member={member} />
        </>
      ) : (
        <>
          <Loader />
          <motion.div variants={container} initial="hidden" animate="show">
            <h1 className="display-4">{userNotFound}</h1>
          </motion.div>
        </>
      )}
    </div>
  );
}
