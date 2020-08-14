import React from "react";

export default React.createContext({
  userName: "",
  pronouns: "",
  setUserName: () => {},
  setUserPronouns: () => {},
  setSnooze: () => {},
  setChoice1: () => {},
  setChoice2: () => {},
  setChoice3: () => {},
  snooze: true,
  choice1: false,
  choice2: false,
  choice3: false,
  switch: false,
  setFlipSwitch: () => {},
  coffee: "",
  setCoffee: () => {},
  restart: () => {},
});
