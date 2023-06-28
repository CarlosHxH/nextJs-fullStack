import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const data = {
  nome: 'Carlos',
  data_nascimento: '1960-02-10',
  cpf: '111.111.111-11',
  telefone: '(11) 11111-1111',
  genero: 'M',
  celular: null,
  escolaridade: 'S',
  cep: '78048225',
  endereco: null,
  numero: '100',
  complemento: null,
  bairro: 'Jardim Bom Clima',
  cidade: 'Cuiabá',
  foto: null,
  comprovante: null,
  senha: 'pjbwMLrz',
  email: 'cleybson@gmail.com',
  rua: 'Rua das Brisas',
  estado: 'MT',
};
export default function Home() {
  React.useEffect(() => {
    axios
      .get('/api')
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    //axios.get(url).then((res) => console.log(res)).catch((err) => console.log(err));
    //axios.post(url, data).then((res) => console.log(res)).catch((err) => console.log(err));
  }, []);
  const api = (url) => {
    return axios(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
