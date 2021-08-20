import { useEffect, useState } from "react";

export const useMember = (username, users) => {
  const [member, setMember] = useState({});
  useEffect(() => {
    if (users && users !== undefined && users !== null) {
      setMember(users.find((user) => user.username === username));
    }
  }, [users, username]);
  return { member, setMember };
};
