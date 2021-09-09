
require('dotenv').config();
const tmi = require('tmi.js');
const { oponente1, oponente2, gameStat } = require('./listas.js');
const ListasEspeciais = require('./listas.js');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN
	},
	channels: [ 'sadbeck' ]
});
client.connect().catch(console.error);
client.on('redeem', (channel, username, rewardType, tags,) => {
	const recompensa=rewardType
	
	console.log('recompensa')
});
client.on('message', (channel, tags, message, self,) => {
	if(self) return;

//comandos
	let comandos = [
		{chamadas: ['discord','discordia','!discord','!disc'], respostas: ['https://discord.com/invite/7MUYeWBGrj',
		'entra ai: https://discord.com/invite/7MUYeWBGrj',
		'entra ai: https://discord.com/invite/7MUYeWBGrj por favor']},
	
		{chamadas: ['instagram','ig','!instagram','!ig',], respostas: ['segue ai: https://www.instagram.com/guggm/?hl=pt-br',
		'https://www.instagram.com/guggm/?hl=pt-br']},
	
		{chamadas: ['piada','soltar piada',], respostas: ['é pave ou pa cume',
		'Qual o contrário de papelada? Pá vestida.',
		'to com problema de pressão não posso um sal em especifico que me faz mal... sal da de de vc bb',
		'por quê o macumbeiro atravessou a rua? para chegar ao "outro lado',
		'O que acontece quando chove na Inglaterra? Vira Inglalama',
		'Sabe por que sempre convidavam o Napoleão pras festinhas? Porque ele era Bom na Party.',
		'O que aconteceu com o Pintinho que não tinha cu? Foi peidar e explodiu',
		'Fiquei confuso depois da aula de inglês. Se “car” significa carro e “men” significa “homens”, então minha tia Carmen é um Transformer?',
		'pq no exército não tem acidente elétrico? pq todos os cabos já foram soldados',
		'Sabe a parte boa de ter alzheimer?, toda festa é surpresa',
		'tu tava numa ilha, mas sai pra ir pra outra, isso n é um trocadilho, é uma TrocaDiilha',
		'por que as laterais da blusa Pink são de frutas ? pq são mangas rosas',
		'onde a vacabelha foi deixar o pólen ? na cowmeia ',
		'por que a cabra é vegana ? por que ela come béeeeeterraba 😑',
		'ta rápido? não ta lento puro das piadas',
		'Carlos comprou flores pra bia , bia disse - que lindas pra quem são ? e Carlos respondeu - são pra (osso que fica na panturrilha)',
		'por que a fotossíntese defende argumentos com fotos ??? pq ela gosta de foto sim tese',
		'teu pai é o bolsonaro?,pq ele fez uma bela duma merda q é vc',
		'sabe qual a banda q te avisa quando vc ta passando vergonha? paramore',
		'pq colocaram uma cama eslatica no polo norte? pro urso polar',
		'sabe qual órgão público representa um anão infértil? um mini-istéril',
		'o velho desse anime é do balaco baco, metia uma faca nele sem dó',
		'um caipira chega na casa de um amigo que está assistindo TV e pergunta/ "E aí, firme?" o outro responde " não, futebor"',
		' qual a sobremesa favorita do esqueleto? ... OSSOrvete',
		'oque são 4 formigas amigas americanas? fourmigaskkkkk',
		'mari nao tem abraço toc toc quem he ? nao eh mari',
		'Sad vc sabe qual o brinquedo preferido dos gaúchos?é o carrinho bah tchê bah tchê',
		'quando vc se sentir velho entre em uma banheira com vinho... assim vc se sentira noVINHO',
		'um gordo me chamou de gostoso,só não sei se isso foi um elogio ou uma ameaça',
		'sabe oq é uma foto de um burro suja? um burrão',
		 ' Porque alargador doi? Porque ele alarga dor.',
		'seu nome é hugo? pq vc é hugostosao']},
		
		{chamadas: ['comandos', 'bot'], respostas: [`aqui esta alguns dos comandos: rolard20, rolard6, piada, instagram, discord, comandos especiais------ esses são apenas alguns dos meus comandos, e vario deles possuem variações tanto para chamar ele quando para as respostas, tambem exitem outros mas vcs vão ter que descobrir ai, se vira, exite tambem os comandos especiais da uma olhada neles ai`]},
		
		{chamadas: ['rolard20'], respostas: [`1`, `1`,`1`, `1`,`2`, `3`,`4`, `5`,`6`, `7`,`8`, `9`,`10`, `11`,`12`, `13`,`14`, `15`,`16`, `17`,`18`, `19`,`20`]},
		
		{chamadas: ['rolard6'], respostas: [`@${tags.username} rolou um 1 ⚀`, `@${tags.username} rolou um 2 ⚁`, `@${tags.username} rolou um 3 ⚂`, `@${tags.username} rolou um 4 ⚃`, `@${tags.username} rolou um 5 ⚄`, `@${tags.username} rolou um 6 ⚅`]},
		
		{chamadas: ['qual a musica?'], respostas: [`a musica é: toca uma pra min, brinks, so não sei, pergunta pro streamer`]},
				
		{chamadas: ['caminhão'], respostas: [`ela roubou meu caminhão 🚚💨💨`, 'o @lugarios roubou meu caminhão 🚚💨💨']},
		
		{chamadas: ['adrix', 'botão', 'botao'], respostas: [`o adrix é um botão`, `o adrix é um botão, segundo a @cafecomaquarela ☕☕`]},
		
		{chamadas: ['docinho', 'doce'], respostas: [`🧁🧁🧁`, `@${tags.username} tome 🧁🧁🧁`,`🍫🍫🍫`, `@${tags.username} tome 🍫🍫🍫`,`🍬🍬🍬`, `@${tags.username} tome 🍬🍬🍬`,`🍮🍮🍮`, `@${tags.username} tome 🍮🍮🍮`,`🍭🍭🍭`, `@${tags.username} tome 🍭🍭🍭`, `@${tags.username} NÃO, tome um cafe ☕☕☕`]},
		{chamadas: ['@sadbeck', 'sadbeck trouxa'], respostas: [`o sad é um trouxa`, `de fato ele é um trouxa`]},
		{chamadas: ['ola','opa','oi','iai','hello'], respostas: [`@${tags.username} iai parça`, `@${tags.username} opa cumpadi`,'aopa']},
		{chamadas: ['@sadbeck trouxa'], respostas: [`de fato ele é trouxa`, `sim o @sadbeck é trouxa`]},
		{chamadas: ['vai beber água', 'vai beber agua', 'vai se hidratar', 'água', 'bebe água', 'agua', 'bebe agua'], respostas: [`💦💦VAI BEBE AGUA JOVEM DESOCUPADO 🤗💦💦`, `vai se hidratar, ta parecendo um difunto`]}

	//{chamadas: ['teste1', 'teste2'], respostas: [`comando`, `comando`]}
	];
//comandos especiais
	let comandosEspeciais = {
		sh: function(){
			if (ListasEspeciais.streamersRecomendados.includes(tags.username))
			client.say(channel, `!sh ${tags.username}`)
		},

		iniciarpedrapapeloutesoura: function(){
			if (tags.username==='sadbeck'&&ListasEspeciais.gameStat===0){
				ListasEspeciais.gameStat=1
			}
		}
	};

//checa se mensagem é um comando



	let listaCompletaDeChamadas=[];
	const respostasValidas = comandos.map((respostaValida) => {
		return respostaValida.respostas
	})

	const chamadasValidas = comandos.map ((chamadaValida)=>{
		return chamadaValida.chamadas
	})

		const quantidadeDeChamadasPorComando=chamadasValidas.length
		for (let i = 0; i<quantidadeDeChamadasPorComando; i++){
		listaCompletaDeChamadas=listaCompletaDeChamadas+','+chamadasValidas[i]+','
	}

	const chamadaExiste = listaCompletaDeChamadas.includes(`,${message.toLowerCase()},`)

//realiza comandos
for (let i = 0; i<quantidadeDeChamadasPorComando; i++)
  if (chamadaExiste == true && chamadasValidas[i].includes(message.toLowerCase())){
  	let randomNum= Math.floor(Math.random() * respostasValidas[i].length);
	nome=(tags['display-name'])
    let responderComo=respostasValidas[i][randomNum]
    client.say(channel, responderComo);
 }

 if (message.toLocaleLowerCase()==='teste'){
	 client.deletemessage(channel, tags.id)
 }
//comandos especiais
 if (comandosEspeciais[message.toLowerCase()])
 comandosEspeciais[message.toLowerCase()]();
 else{
 
 }	
//jogo pedra papel tesoura
let mens=message.toLowerCase()
 if (ListasEspeciais.gameStat===1 && mens[0]==='*' && tags.username==='sadbeck'){
	 ListasEspeciais.oponente1=mens.slice(1)
	 ListasEspeciais.gameStat=2
}
 if (ListasEspeciais.gameStat===2 && message.toLowerCase()==='enter'){
	 ListasEspeciais.gameStat=3
	 ListasEspeciais.oponente2 = tags.username
	client.say(channel, `partida de pedra papel ou tesoura melhor de ${ListasEspeciais.melhorDe} iniciado, entre @${ListasEspeciais.oponente1} e @${ListasEspeciais.oponente2} mande /w @adrixgamer2000ponto1 [pedra, papel, tesoura]`)
	client.say(channel, `!prev ${ListasEspeciais.oponente1} X ${ListasEspeciais.oponente2} ! ${ListasEspeciais.oponente1} ! ${ListasEspeciais.oponente2} ! 1800`)
 }
if (ListasEspeciais.gameStat===3 && ListasEspeciais.pedraPapelTesoura.includes(message.toLowerCase())&&tags.username===ListasEspeciais.oponente1){
	ListasEspeciais.op1jogada=message.toLowerCase()
	client.deletemessage(channel,tags.id)
}
if (ListasEspeciais.gameStat===3 && ListasEspeciais.pedraPapelTesoura.includes(message.toLowerCase())&&tags.username===ListasEspeciais.oponente2){
	ListasEspeciais.op2jogada=message.toLowerCase()
	client.deletemessage(channel,tags.id)

}
if (ListasEspeciais.gameStat===3 && ListasEspeciais.op1jogada.length>3 && ListasEspeciais.op2jogada.length>3){
	ListasEspeciais.gameStat=4
}
//empate
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1jogada === ListasEspeciais.op2jogada){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op1Pontos=ListasEspeciais.op1Pontos+1
	ListasEspeciais.op2Pontos=ListasEspeciais.op2Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em empate`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
//vitorias op1
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op1jogada === 'pedra' && ListasEspeciais.op2jogada === 'tesoura'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op1Pontos=ListasEspeciais.op1Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente1}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op1jogada === 'papel' && ListasEspeciais.op2jogada === 'pedra'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op1Pontos=ListasEspeciais.op1Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente1}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op1jogada === 'tesoura' && ListasEspeciais.op2jogada === 'papel'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op1Pontos=ListasEspeciais.op1Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente1}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
//vitorias op2
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op2jogada === 'pedra' && ListasEspeciais.op1jogada === 'tesoura'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op2Pontos=ListasEspeciais.op2Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente2}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op2jogada === 'papel' && ListasEspeciais.op1jogada === 'pedra'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op2Pontos=ListasEspeciais.op2Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente2}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
if (ListasEspeciais.gameStat===4 && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe && message.toLowerCase()==='resultado' && ListasEspeciais.op2jogada === 'tesoura' && ListasEspeciais.op1jogada === 'papel'){
	ListasEspeciais.round=ListasEspeciais.round+1
	ListasEspeciais.op2Pontos=ListasEspeciais.op2Pontos+1
	client.say(channel, `${ListasEspeciais.oponente1} com ${ListasEspeciais.op1Pontos} pontos jogou ${ListasEspeciais.op1jogada} e ${ListasEspeciais.oponente2} com ${ListasEspeciais.op2Pontos} pontos jogou ${ListasEspeciais.op2jogada}, o round ${ListasEspeciais.round} terminou em vitoria para ${ListasEspeciais.oponente2}`)
	ListasEspeciais.gameStat=3
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
}
//decide vencedor
if (ListasEspeciais.op1Pontos===ListasEspeciais.melhorDe && ListasEspeciais.op2Pontos<ListasEspeciais.melhorDe){
	client.say(channel, `${ListasEspeciais.oponente1} venceu a partida de pedra, papel e tesoura`)
	client.say(channel, `!pred lock`)
	client.say(channel, `!pred0`)
	ListasEspeciais.gameStat=0
	ListasEspeciais.op1Pontos=0
	ListasEspeciais.op2Pontos=0
	ListasEspeciais.round=0
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
	ListasEspeciais.oponente1='wa'
	ListasEspeciais.oponente2='wa'

}
else if(ListasEspeciais.op2Pontos===ListasEspeciais.melhorDe && ListasEspeciais.op1Pontos<ListasEspeciais.melhorDe){
	client.say(channel, `${ListasEspeciais.oponente2} venceu a partida de pedra, papel e tesoura`)
	client.say(channel, `!pred lock`)
	client.say(channel, `!pred1`)
	ListasEspeciais.gameStat=0
	ListasEspeciais.op1Pontos=0
	ListasEspeciais.op2Pontos=0
	ListasEspeciais.round=0
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
	ListasEspeciais.oponente1='wa'
	ListasEspeciais.oponente2='wa'
	}
else if(ListasEspeciais.op2Pontos===ListasEspeciais.melhorDe && ListasEspeciais.op1Pontos===ListasEspeciais.melhorDe){
	client.say(channel, `A partida terminou em empate e o resultado sera decidido aleatoriamente`)
	client.say(channel, `!predlock`)
	const randomNumb= Math.floor(Math.random() * 1)
	client.say(channel, `!pred${randomNumb}`)
	ListasEspeciais.gameStat=0
	ListasEspeciais.op1Pontos=0
	ListasEspeciais.op2Pontos=0
	ListasEspeciais.round=0
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
	ListasEspeciais.oponente1='wa'
	ListasEspeciais.oponente2='wa'
}
//finaliza o jogo
if (message.toLowerCase()==='fnz'){
	ListasEspeciais.gameStat=0
	ListasEspeciais.op1Pontos=0
	ListasEspeciais.op2Pontos=0
	ListasEspeciais.round=0
	ListasEspeciais.op1jogada='wa'
	ListasEspeciais.op2jogada='wa'
	ListasEspeciais.oponente1='wa'
	ListasEspeciais.oponente2='wa'
	client.say(channel, `A partida foi cancelada e o resultado sera decidido aleatoriamente`)
	client.say(channel, `!predlock`)
	const randomNumb= Math.floor(Math.random() * 1)
	client.say(channel, `!pred${randomNumb}`)
}
//melhor de ??
});
