import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiderBar from "./components/SiderBar";
import styles from "./styles/index.module.scss";

export default function App() {
  return (
    <>
      <SiderBar />
      <section className={styles.mainWrapper}>
        <Header />
        <main>💖 Hello World! Welcome to your Electron application</main>;
      </section>
      <Footer />
    </>
  );
}
