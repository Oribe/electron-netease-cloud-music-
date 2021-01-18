import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiderBar from "./components/SiderBar";
import { redirect, routers } from "./routers";
import styles from "./styles/index.module.scss";

export default function App() {
  return (
    <>
      <SiderBar />
      <section className={styles.mainWrapper}>
        <Header />
        <main>
          💖 Hello World! Welcome to your Electron application!
          <Switch>
            {routers.map((item) => {
              const { path, component, exact } = item;
              return (
                <Route
                  key={path}
                  path={path}
                  component={component}
                  exact={exact || true}
                />
              );
            })}
            {redirect.map((item) => (
              <Redirect
                key={item.path}
                path={item.path}
                to={item.to}
                exact={item.exact || true}
              />
            ))}
          </Switch>
        </main>
      </section>
      <Footer />
    </>
  );
}
