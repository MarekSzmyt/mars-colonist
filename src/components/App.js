import React, { useContext, useState, useEffect } from "react";
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import Forecast from "./Forecast";
import NotFound from "./NotFound";
import "../scss/components/_App.scss";
import { GlobalContext } from "../contexts/GlobalContext";
import { getForecast } from "../api/forecast";

const App = () => {
  const { state, setState } = useContext(GlobalContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getForecast(data => {
      setState(data);
    });
  }, [])

  console.log(state);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/forecast" component={() => <Forecast tasks={tasks} setTasks={setTasks} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
