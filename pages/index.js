import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	debugger;

	return (
		<div className={styles.container}>
			<Head>
				<title>Lobato Dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.container}>
					<h1>Seja bem vindo, <strong>Visitante</strong>!</h1>
					<img style={{maxWidth: 200 + 'px'}} src="/ilobatodev_astronauta2.svg"/>
				</div>
			</main>

			<footer className={styles.footer}>
					Powered by{' - '}Hynn
			</footer>
		</div>
	)
}