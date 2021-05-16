import Head from 'next/head';
import Trabalhos from '../pages/trabalhos.js';
import SobreMim from '../pages/sobremim.js';
import Contato from '../pages/contato.js';
// import { Scrollbars } from 'react-custom-scrollbars-2';

// const checkClick = (event) => {
// 	let nameFromButton = event.target.dataset.value;
// 	let checkForDivsOpened = document.querySelectorAll('div.secondPanel.d-flex');

// 	if(checkForDivsOpened.length > 0) {
// 		checkForDivsOpened.forEach(item => {
// 			if(!item.id.includes(nameFromButton)) {
// 				item.classList.toggle('d-none');
// 				item.classList.toggle('d-flex');
// 			}
// 		})
// 	}

// 	let divToChange = document.getElementById(nameFromButton);
// 	divToChange.classList.toggle('d-none');
// 	divToChange.classList.toggle('d-flex');
// }

export default function Home() {
	return (
		<main>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
				<title>ILobato Dev</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta3/css/bootstrap.min.css"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:200,400"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
			</Head>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-sm-4 d-flex flex-column justify-content-center align-items-center mx-auto">
							<div className="d-flex flex-column justify-content-center align-items-center vh-100">
								<img className="mb-3 bigBoy" src="assets/img/ilobatodev_astronauta2.svg?h=6dde2b2d3ce2d634c31eef9f6ff1ecad"/>
									<h1 className="logo">&lt;IL.<span>DEV</span>/&gt;</h1>
									<h2 className="subTitle mb-4 text-center">WEBDEVELOPER</h2>
									<a className="btn btn-personalizado w-100 mb-3" href="#" data-value="trabalhos" data-bs-toggle="modal" data-bs-target="#trabalhos">TRABALHOS</a>
									<a className="btn btn-personalizado w-100 mb-3" href="#" data-value="sobreMim" data-bs-toggle="modal" data-bs-target="#sobremim">SOBRE MIM</a>
									<a className="btn btn-personalizado w-100 mb-4" href="#" data-value="contato" data-bs-toggle="modal" data-bs-target="#contato">CONTATO</a>
									<p className="footerCredits text-center">Todos os direitos reservados ©</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="modal fade" id="trabalhos" tabIndex="-1" aria-labelledby="trabalhos" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<button type="button" className="btn-close2" data-bs-dismiss="modal" aria-label="Close">
							<i class="fas fa-times"></i>
						</button>

						<div className="modal-body">
							<Trabalhos />
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="sobremim" tabIndex="-1" aria-labelledby="sobremim" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<button type="button" className="btn-close2" data-bs-dismiss="modal" aria-label="Close">
							<i class="fas fa-times"></i>
						</button>

						<div className="modal-body">
							<SobreMim />
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="contato" tabIndex="-1" aria-labelledby="contato" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
						<button type="button" className="btn-close2" data-bs-dismiss="modal" aria-label="Close">
							<i class="fas fa-times"></i>
						</button>

						<div className="modal-body">
							<Contato />
						</div>
					</div>
				</div>
			</div>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta3/js/bootstrap.bundle.min.js"></script>
		</main>
	)
}