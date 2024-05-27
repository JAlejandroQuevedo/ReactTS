
import { NavBar } from "./components/layout/NavBar/NavBar"
import { Home } from "./components/pages/Home/Home"
// import { useReducer } from "react";
// import { activityReducer, initialState } from "./reducers/activity-reducers";
export const App = () => {
  // const [dispatch] = useReducer(activityReducer, initialState)
  /* No olvidar enviar via props dispatch */
  return (
    <>
      <NavBar />
      <Home />
    </>
  )
}
