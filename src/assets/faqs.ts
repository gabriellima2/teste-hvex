import { IFAQ } from "@/interfaces/IFAQ";

export const faqs: IFAQ[] = [
	{
		id: "0",
		question:
			"Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?",
		answer:
			"O Omni trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para concessionárias, fabricantes de transformadores, ou empresas privadas que desejam ter mais controle  e informações de sua rede elétrica",
	},
	{
		id: "1",
		question:
			"O omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?",
		answer:
			"Não, nesse caso o caso recomendamos a utilização de um modelo específico.",
	},
	{
		id: "2",
		question: "O omni trafo pode ser utilizado como um medidor de faturamento?",
		answer:
			"Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária.",
	},
	{
		id: "3",
		question:
			"Ele pode ser instalado em transformadores que já estão em campo ?",
		answer:
			"Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente.",
	},
];
