import React, { useState } from "react";
import UserAdd from "../../components/UserAdd";
import Users from "../../components/Users";

function UserPage() {
    // her 2  component  bir digerinin icinde deyil 
    // deye parentlerinde state yaradiriq ki her  2 sine ortaq state getsin
  const [users, setUsers] = useState([]);

//   best practice props gondermek bir obyekte elave edib gonderirik bunu adi de gondere bilerdiz
  const data = {
    users,
    setUsers,
  };

  return (
    <>
      <UserAdd data={data} />
      <Users users={users} />
    </>
  );
}

export default UserPage;
