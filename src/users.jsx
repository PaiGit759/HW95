import React, { useEffect, useRef, useState } from "react";

function UsersList(_props) {
  const [UsersList, setUsersList] = useState([]);
  const [showingMore, setshowingMore] = useState(false);
  const showDetailsText = useRef("Show");

  const baseUrl = " https://reqres.in/api/users/";

  useEffect(() => {}, [UsersList]);

  function renderList() {
    if (showingMore) {
      return UsersList.map((eachUser) => {
        return (
          <div>
            <h3>
              {eachUser.first_name} {eachUser.last_name}
            </h3>
            <img
              src={eachUser.avatar}
              alt="some-rat"
              style={{ width: "20%" }}
            ></img>
            <p>{eachUser.email}</p>
          </div>
        );
      });
    } else {
      return UsersList.map((eachUser) => {
        return (
          <div>
            <h3>
              {eachUser.first_name} {eachUser.last_name}
            </h3>
          </div>
        );
      });
    }
  }

  function addUser() {
    async function fetchRandomCoffee() {
      const randomCoffeeUrl =
        baseUrl + String(Math.floor(Math.random() * 12) + 1);
      const response = await fetch(randomCoffeeUrl);
      const parsedResponse = await response.json();
      setUsersList([...UsersList, parsedResponse["data"]]);
    }

    fetchRandomCoffee();
  }

  function removeCoffee() {
    UsersList.pop();
    setUsersList([...UsersList]);
  }

  function showMoreInformation() {
    if (showingMore) {
      showDetailsText.current = "Show";
      setshowingMore(false);
    } else {
      showDetailsText.current = "Hide";
      setshowingMore(true);
    }
  }

  return (
    <div className="UsersList">
      <h2 style={{ backgroundColor: "lightgreen" }}>
        Hi! Here you will see random users
      </h2>
      {renderList()}
      <br />
      &nbsp;
      <button onClick={addUser}>Add user</button>
      &nbsp;
      <button
        onClick={removeCoffee}
        style={{ color: "white", backgroundColor: "rgb(255, 99, 71)" }}
      >
        Remove user
      </button>
      <br />
      <button onClick={showMoreInformation} style={{ marginTop: "5px" }}>
        {showDetailsText.current} more information
      </button>
    </div>
  );
}

export { UsersList };
