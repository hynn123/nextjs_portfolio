export default function Contato() {
	function handleSubmit(event) {
		console.log(event);
		event.preventDefault();

		let nome = event.target[0].value;
		let email = event.target[1].value;
		let whatsapp = event.target[2].value;
		let mensagem = event.target[3].value;

		let data = {
			nome,
			email,
			whatsapp,
			mensagem
		}

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}

	return (
		<div>
			<form method="POST" className="d-flex flex-column" onSubmit={handleSubmit}>
				<label>
					<p className="m-0">Nome:</p>
					<input name="nome" className="w-100 mb-3" defaultValue="Iago" required></input>
				</label>

				<label>
					<p className="m-0">Email:</p>
					<input type="email" name="email" defaultValue="joao@teste.com" className="w-100 mb-3" required></input>
				</label>

				<label>
					<p className="m-0">WhatsApp:</p>
					<input name="whatsapp" defaultValue="00000" className="w-100 mb-3" required></input>
				</label>

				<label>
					<p className="m-0">Mensagem:</p>
					<textarea name="mensagem" defaultValue="oierr" className="w-100 mb-3"></textarea>
				</label>

				<button type="button" className="btn btn-primary text-white">Enviar</button>
			</form>
		</div>
	)
}