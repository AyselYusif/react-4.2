import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Name from "./Name";
import Adress from "./Adress";
import Email from "./Email";

class Profile extends Component {
  render() {
    return (
      <div className="profil">
        <Name name="aysel yusifova" surname="19yas" />
        <PersonalInfo info="web developer" />
        <Email email="ayselyusibova34@gmail.com" />
        <Adress adress="baku n.nerimanov" />
      </div>
    );
  }
}

export default Profile;
