import React from "react";

interface IUserContext {
  name: string;
  followers: number;
  following: number;
  setName:
    | React.Dispatch<React.SetStateAction<IUserContext["name"]>>
    | VoidFunction;
  setFollowers:
    | React.Dispatch<React.SetStateAction<IUserContext["followers"]>>
    | VoidFunction;
  setFollowing:
    | React.Dispatch<React.SetStateAction<IUserContext["following"]>>
    | VoidFunction;
}

export const initialContext = {
  name: "John Doe",
  followers: 4356,
  following: 532,
  setName: () => {},
  setFollowers: () => {},
  setFollowing: () => {}
};

export const UserContext = React.createContext<IUserContext>(initialContext);
UserContext.displayName = "UserContext";
