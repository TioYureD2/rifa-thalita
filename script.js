const participantes = [
  { numero: 1, nome: "Alcimara", telefone: "+55 21 99625-8227" },
  { numero: 2, nome: "Tatiana Elvira da Silva", telefone: "+55 21 99455-2542" },
  {
    numero: 3,
    nome: "Kathelyn Gomes de Oliveira",
    telefone: "+55 21 99238-8490",
  },
  {
    numero: 4,
    nome: "Luiz Ricardo Da Silva (namorado da Tati)",
    telefone: "+55 21 99455-2542",
  },
  { numero: 5, nome: "Tatiana Elvira da Silva", telefone: "+55 21 99455-2542" },
  { numero: 6, nome: "Thaisa Machado", telefone: "+55 21 98013-6234" },
  {
    numero: 7,
    nome: "Adriana Medeiros (tia Giu)",
    telefone: "+55 21 96515-3182",
  },
  { numero: 8, nome: "Carla Rangel Manhães", telefone: "+55 22 98874-8796" },
  {
    numero: 9,
    nome: "Adriana Medeiros (tia Giu)",
    telefone: "+55 21 96515-3182",
  },
  { numero: 10, nome: "Kassia de Souza Ramos Machado", telefone: "???" },
  {
    numero: 11,
    nome: "Tatiana Elvira da Silva",
    telefone: "+55 21 99455-2542",
  },
  { numero: 12, nome: "Laura Martins Modesto", telefone: "+55 21 97036-8025" },
  { numero: 13, nome: "Kassia de Souza Ramos Machado", telefone: "???" },
  { numero: 14, nome: "Bruna Rodrigues Rodriguez", telefone: "+591 77990348" },
  { numero: 15, nome: "Carlos Augusto (Guto)", telefone: "???" },
  { numero: 16, nome: "Brendda Carvalho", telefone: "+55 21 96498-6547" },
  { numero: 17, nome: "Arildo (Índio)", telefone: "+55 21 97827-3743" },
  {
    numero: 18,
    nome: "Letícia Rosa de Oliveira Santos",
    telefone: "(contato do pai da Giu)",
  },
  {
    numero: 19,
    nome: "Letícia Rosa de Oliveira Santos",
    telefone: "(contato do pai da Giu)",
  },
  {
    numero: 20,
    nome: "Brenda Rodrigues Rodriguez",
    telefone: "+591 6949-5070",
  },
  { numero: 21, nome: "Thaisa Machado", telefone: "+55 21 98013-6234" },
  {
    numero: 22,
    nome: "Leonardo Pereira Martins Junior",
    telefone: "+???Pagamento confirmado",
  },
  {
    numero: 26,
    nome: "Leonardo Pereira Martins Junior",
    telefone: "+55 21 97731-0183",
  },
  {
    numero: 27,
    nome: "Leonardo Pereira Martins Junior",
    telefone: "+55 21 97731-0183",
  },
  {
    numero: 28,
    nome: "Tatiana Elvira da Silva",
    telefone: "+55 21 99455-2542",
  },
  {
    numero: 29,
    nome: "Letícia Coelho de Oliveira",
    telefone: "+55 27 99283-2977",
  },
  { numero: 30, nome: "Laura Martins Modesto", telefone: "+55 21 97036-8025" },
  {
    numero: 31,
    nome: "Marcelo Henrique Gonzalez",
    telefone: "+55 45 9969-3813",
  },
  { numero: 32, nome: "Ieda (Márcia)", telefone: "+55 21 97149-6290" },
  {
    numero: 34,
    nome: "Rayane Lopes Barbieri Lace",
    telefone: "+55 21 96507-3719",
  },
  { numero: 35, nome: "Thiago Magno", telefone: "+55 21 97027-1922" },
  { numero: 36, nome: "Thiago Magno", telefone: "+55 21 97027-1922" },
  { numero: 37, nome: "Thiago Magno", telefone: "+55 21 97027-1922" },
  {
    numero: 38,
    nome: "Ágatha Christina Machado de Souza",
    telefone: "+55 21 96605-7583",
  },
  { numero: 39, nome: "Brendda Carvalho", telefone: "+55 21 96498-6547" },
  { numero: 40, nome: "Thaisa Machado", telefone: "+55 21 98013-6234" },
  {
    numero: 44,
    nome: "Mariza de Oliveira Gomes Vieira",
    telefone: "+55 21 96605-7583",
  },
  { numero: 45, nome: "Stheffany Vitória", telefone: "@vihhh_rocha" },
  { numero: 46, nome: "Stheffany Vitória", telefone: "@vihhh_rocha" },
  {
    numero: 48,
    nome: "Tatiana Elvira da Silva",
    telefone: "+55 21 99455-2542",
  },
  {
    numero: 49,
    nome: "Tatiana Elvira da Silva",
    telefone: "+55 21 99455-2542",
  },
  { numero: 54, nome: "Dilcea Medeiros", telefone: "+55 21 98998-8682" },
  {
    numero: 60,
    nome: "Marcelo Henrique Gonzalez",
    telefone: "+55 45 9969-3813",
  },
  {
    numero: 64,
    nome: "Thaís Souza Moscon",
    telefone: "+55 21 96630-5628",
  },
  {
    numero: 65,
    nome: "Thaís Souza Moscon",
    telefone: "+55 21 96630-5628",
  },
  {
    numero: 66,
    nome: "Thaís Souza Moscon",
    telefone: "+55 21 96630-5628",
  },
  {
    numero: 67,
    nome: "Ramirez Gomes De Larroque",
    telefone: "+55 21 98864-5865",
  },
  {
    numero: 68,
    nome: "Ramirez Gomes De Larroque",
    telefone: "+55 21 98864-5865",
  },
  {
    numero: 69,
    nome: "Paulo Rodrigues Oliveira Coelho",
    telefone: "+55 27 99283-2977",
  },
  { numero: 70, nome: "Dilcea Medeiros", telefone: "+55 21 98998-8682" },
];

const botaoSortear = document.getElementById("botaoSortear");
const resultadoDiv = document.getElementById("resultado");

botaoSortear.addEventListener("click", function () {
  const indiceSorteado = Math.floor(Math.random() * participantes.length);

  const participanteSorteado = participantes[indiceSorteado];

  resultadoDiv.innerHTML = `
    <p>Número Sorteado: <strong>${participanteSorteado.numero}</strong></p>
    <p>Nome: <strong>${participanteSorteado.nome}</strong></p>
    <p>Telefone: <strong>${participanteSorteado.telefone}</strong></p>
  `;
});
