import Head from 'next/head';
import Trabalhos from '../pages/trabalhos.js';
import SobreMim from '../pages/sobremim.js';
import Contato from '../pages/contato.js';

export default function Home() {
	return (
		<main>
		<Head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
			<title>PortfolioTry1</title>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800,900&amp;display=swap"/>
			<link rel="stylesheet" href="assets/css/styles.min.css?h=748f38ec3d20959b82c511abd252f427"/>
		</Head>

		<section class="py-5 my-5">
			<div class="container my-auto">
				<div class="row">
					<div class="col-3 d-xl-flex flex-column justify-content-xl-center align-items-xl-center px-4 col__left">
						<img class="avatar" src="assets/img/ilobatodev_astronauta2.svg?h=bdd18d63a557c289979440babb853d29"/>
						<h1 class="mt-1 px-4 text-center devTitle">Iago Lobato</h1>
						<p class="fw-bold subTitle">Estatísticas</p>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold title">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold title">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold title">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold title">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
					</div>
					<div class="col col__right">
						<h1 class="mb-3 fw-bolder bigTitle">Dashboard</h1>
						<div class="d-flex p-3 box">
							<div class="col px-2">
								<h1 class="fw-bold boxTitle">Todos os trabalhos</h1>
								<div class="listItem d-flex">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold title">Trabalho X</p>
										<p class="subTitle mb-0">Trabalho X</p>
									</div>
								</div>
							</div>
							<div class="col px-2">
								<h1 class="fw-bold boxTitle">Todos os trabalhos</h1>
								<div class="listItem d-flex">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold title">Trabalho X</p>
										<p class="subTitle mb-0">Trabalho X</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
	</main>
	)
}