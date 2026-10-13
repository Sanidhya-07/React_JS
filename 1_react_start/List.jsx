import React from "react";

const List = () => {
//   const numbers = [1, 2, 3, 4, 5];

    const users = [
    {
        username: "rahul123",
        email: "rahul@gmail.com",
        location: "Pune"
    },
    {
        username: "priya456",
        email: "priya@gmail.com",
        location: "Mumbai"
    },
    {
        username: "amit789",
        email: "amit@gmail.com",
        location: "Delhi"
    },
    {
        username: "neha101",
        email: "neha@gmail.com",
        location: "Bangalore"
    },
    {
        username: "rohan202",
        email: "rohan@gmail.com",
        location: "Hyderabad"
    }
];

console.log(users);

  return (
    // <main>
    //   {numbers.map((element) => (
    //     <ul key={element}>
    //       <li>{element}</li>
    //     </ul>
    //   ))}
    // </main>

    <main>
        {users.map((element) => (
            <ul key={Math.random()}>
                <li>USERNAME :{element.username}</li>
                <li>EMAIL : {element.email}</li>
                <li>LOCATION : {element.location}</li>
                <li>-----------------------------</li>
            </ul>

        ))}
    </main>
  );
};

export default List;
