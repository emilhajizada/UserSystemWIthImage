import React from "react";
import User from "../User";

function Users({users}) {
  return (
    <div style={{display:"flex" ,flexWrap:"wrap"}}>
        {users.map((user,index)=>{
            // key veririk erroru goturmek ucun  burada user in id si olsa idi onu 
            // ve ya buradaki kimi indexi qoyuruq
           return <User key={index} name={user.name} desc ={user.decripton} src={user.src} />
        })}
        
      
    </div>
  );
}

export default Users;
