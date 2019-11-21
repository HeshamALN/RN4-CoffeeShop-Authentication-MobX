import { createSwitchNavigator } from "react-navigation";
import StackNav from "./StackNav";
import Login from "../Components/Authentication/Login";

import Signup from "../Components/Authentication/Signup";

const MySwitchNav = createSwitchNavigator({
  StackNav: StackNav
  Login: Login,
  Signup: Signup,
});

export default MySwitchNav;
