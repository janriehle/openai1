import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>

      <main className={styles.main}>
        <h3>Write a Bitcoin Poem</h3>
        <p align="center">Below is an experimental implementation of an AI able to write poetry. <br>
        </br>
        Provide a word which you would like to appear in the poem. The application will generate a text about Bitcoin and relate to the term you provided! Have fun. </p>
        <br></br>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="term"
            placeholder="Enter your term here"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Write poem" />
        </form>
        <div className={styles.div1}>
        <p className={styles.result}>{result}</p>
        </div>
      </main>
    </div>
  );
}
