import React from "react";
import { Profile as HeadlessProfile } from "./userprofile";
import { UsersList as HeadlessUsersList } from "./userslist";
import Header from "../header";

export const Profile = () => (
  <>
    <Header />
    <HeadlessProfile />
  </>
);

export const UsersList = () => (
  <>
    <Header />
    <HeadlessUsersList />
  </>
);
