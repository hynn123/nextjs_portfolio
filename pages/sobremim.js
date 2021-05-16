import Head from 'next/head'
// import 'tailwindcss/tailwind.css'
// import sobreNos from '../styles/Home.module.css'

export default function SobreMim() {

	let calcularIdade = () => {
		let idade =  new Date(1992, 8, 1);
		let dt = new Date();
		var diff = dt.getTime() - idade.getTime();
		return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
	};

	let idade = calcularIdade();

	return (
		<div className="sobreMim">
			<p className="mb-3">Prazer, visitante.</p>

			<p className="mb-3">Me chamo <span className="destaque">Iago Lobato</span>, sou <span className="destaque">Capixaba</span>, ou seja, nasci em Vitória/ES, possuo <span className="destaque">{idade} anos</span>, sou bacharel em <span className="destaque">Direito</span> pela <span className="destaque">UNESC</span> (Fundação Gildasio Amado) com pós graduação em <span className="destaque">Direito Digital & Compliance</span> pela Damásio Educacional, e atualmente cursando <span className="destaque">Análise e Desenvolvimento de Sistemas</span> na <span className="destaque">UNOPAR</span>.</p>

			<p className="mini-title mb-0">O que falar sobre mim...</p>
			<p className="mb-3">Sou um rato de TI desde que me considero por gente. Tenho uma paixão especial por desenvolvimento front-end, mas também tenho um carinho especial pelo backend (PHP ♥). Tento sempre ao máximo equilibrar minha paixão por desenvolvimento web e minha vida pessoal, coisas difíceis de dissociar hoje em dia, e falho miseravelmente. Depois que você entra, é difícil de sair.</p>

			<p className="mini-title mb-0">Como comecei a desenvolver coisas para a web?</p>
			<p className="mb-3">Desde muito cedo sempre tive muito desejo de trabalhar com TI, mais especificamente com segurança digital, pentesting, hacking ou afins. Contudo, enquanto estudava, acabei encontrando algo que eu gostava mais do que segurança digital: <span className="destaque">desenvolvimento web</span> ♥. Era incrível poder criar um site que pudesse ser acessado por milhares de pessoas e pudesse chamar a atenção delas positivamente de alguma maneira.</p>

			<p className="mini-title mb-0">Quando você começou, havia algum site que você gostava?</p>
			<p className="mb-3">Quando comecei a aprender sobre desenvolvimento web, era uma época onde ter blog era muito comum. Graças a isso, haviam diversas comunidades como <span className="destaque">Thomoeda Template Shop (http://thomoeda.cjb.net/)</span> e <span className="destaque">Vicky's Place (http://vplace.atspace.com/)</span> que desenvolviam recursos bonitinhos para seu blog, como temas, botões, gifs, etc... E essas comunidades sempre me deixavam curioso para entender como tudo era feito, e daí que eu comecei minha carreira como Dev.</p>
			
			<p>Além dos dois citados acima, havia um grupo à época que desenvolvia seus próprios layouts e sempre me impressionavam com a qualidade, organização e pioneirismo deles: <span className="destaque">Grupo PROJECT</span>. Com certeza foi a minha maior referência de design da época e que me impulsionou a aprender mais e mais.</p>
		</div>
	)
}