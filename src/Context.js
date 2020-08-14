import React from "react";

export default React.createContext({
  userName: "",
  pronouns: "",
  setUserName: () => {},
  setUserPronouns: () => {},
  setSnooze: () => {},
  setsnooze1: () => {},
  setsnooze2: () => {},
  setsnooze3: () => {},
  snooze: true,
  snooze1: false,
  snooze2: false,
  snooze3: false,
  switch: false,
  setFlipSwitch: () => {},
  coffee: "",
  setCoffee: () => {},
  restart: () => {},
});
