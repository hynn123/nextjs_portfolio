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
			<link rel="stylesheet" href="assets/css/styles.min.css?h=5da7be15da27bf315b47f1084262bea0"/>
		</Head>

		<section class="py-5 my-5">
			<div class="container my-auto">
				<div class="row">
					<div class="col-3 d-xl-flex flex-column justify-content-xl-center align-items-xl-center px-4"><img src="assets/img/ilobatodev_astronauta2.svg?h=bdd18d63a557c289979440babb853d29" style="width: 150px;">
						<h1 class="mt-1 px-4 text-center" style="font-size: 25px;border-bottom: 1px solid #ccc;padding-bottom: .5em;margin-bottom: .5em;">Iago Lobato</h1>
						<p class="fw-bold" style="font-size: 13px;">Estatísticas</p>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
						<div class="d-xl-flex align-items-xl-center justify-content-between d-inline-flex w-100 statusItem">
							<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalhos concluídos</p>
							<p class="mb-0 fw-bold">1</p>
						</div>
					</div>
					<div class="col">
						<h1 class="mb-3 fw-bolder" style="font-size: 37px;">Dashboard</h1>
						<div class="d-flex p-3" style="background-color: #fff;border-radius: 5px;box-shadow: 0 10px 10px 0 rgba(0,0,0,0.05);">
							<div class="col px-2">
								<h1 class="fw-bold" style="font-size: 16px;">Todos os trabalhos</h1>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
							</div>
							<div class="col px-1">
								<h1 class="fw-bold" style="font-size: 16px;">Todos os trabalhos</h1>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
								<div class="listItem" style="display: flex;">
									<div class="me-2">
										<div class="roundImage"></div>
									</div>
									<div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-center">
										<p class="mb-0 fw-bold" style="font-size: 13px;">Trabalho X</p>
										<p class="mb-0" style="font-size: 13px;">Trabalho X</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	)
}