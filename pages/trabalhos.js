// import Head from 'next/head'
// import sobreNos from '../styles/Home.module.css'
import ReactHtmlParser from 'react-html-parser';

export default function Trabalhos() {
	let trabalhosFeitos = JSON.parse(JSON.stringify({
		"sites": 
		[
			{
				"nome" : "Elojobson",
				"urlImg" : "trabalhos/elojobson_1.png",
				"urlSite" : "//elojobson.com.br"
			},
			{
				"nome" : "EloWhite",
				"urlImg" : "trabalhos/elowhite_1.png",
				"urlSite" : "//elo-white.com"
			},
			{
				"nome" : "YellowBoost",
				"urlImg" : "trabalhos/yellowboost_1.png",
				"urlSite" : "//yellowboost.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "EloValorant",
				"urlImg" : "trabalhos/elovalorant_1.jpg",
				"urlSite" : "//elovalorant.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			// {
			// 	"nome" : "EloRobot",
			// 	"urlImg" : "trabalhos/elorobot_1.png",
			// 	"urlSite" : "#",
			// 	"tecnologias" : "PHP/Wordpress/Elementor"
			// },
			{
				"nome" : "EloThunder",
				"urlImg" : "trabalhos/elothunder_1.jpg",
				"urlSite" : "//elothunder.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "Eloking",
				"urlImg" : "trabalhos/eloking_1.png",
				"urlSite" : "//eloking.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "FabricaDasOrbs",
				"urlImg" : "trabalhos/fabricadasorbs_1.png",
				"urlSite" : "//fabricadasorbs.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "EloBit",
				"urlImg" : "trabalhos/elobit_1.png",
				"urlSite" : "//elobit.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "E&G",
				"urlImg" : "trabalhos/e&g_1.png",
				"urlSite" : "#",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "EloTrabson",
				"urlImg" : "trabalhos/elotrabson_1.png",
				"urlSite" : "#",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "HostCube",
				"urlImg" : "trabalhos/hostcube_1.png",
				"urlSite" : "//hostcube.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			},
			{
				"nome" : "Craftlandia",
				"urlImg" : "trabalhos/craftlandia_1.png",
				"urlSite" : "//craftlandia.com.br",
				"tecnologias" : "PHP/Wordpress/Elementor"
			}
		]
	}));

	let trabalhosParsed = [];

	// console.log(trabalhosFeitos);
	// console.log(trabalhosFeitos.sites.length);

	for(let i = 0; i < trabalhosFeitos.sites.length; i++) {
		let component = `
			<a class="w-100 trabalhoContainer" target="__blank" href="${trabalhosFeitos.sites[i].urlImg}">
				<div class="contentImg">
					<img src="${trabalhosFeitos.sites[i].urlImg}">
				</div>
			</a>`;
		trabalhosParsed.push(component);
	}

	// console.log(trabalhosParsed);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center w-100 contentBox">
			{trabalhosParsed.map((value, index) => {
				return (ReactHtmlParser(value))
			})}
		</div>
	)
}