const btnrandom = document.getElementById("btnrandom");
const question = document.getElementById("question");
const reponse = document.getElementById("reponse");

let data = [];

const getData = async () => {
  const req = await fetch("https://exam-quq2.onrender.com/examapi/v1/blague");
  console.log(req);
  const dbblague = await req.json();
  console.log("result", dbblague);
  data = dbblague.result;
};

getData();

btnrandom.addEventListener("click", () => {
  console.log("Click");
  const randomblague = choisirBlagueAleatoire();
  question.textContent = randomblague.question;
  reponse.textContent = randomblague.reponse;
});

function choisirBlagueAleatoire() {
  if (data && data.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * data.length);
    const randomblague = data[indexAleatoire];
    return randomblague;
  } else {
    console.error("Aucune donnée de blague chargée ou la liste est vide.");
    return null;
  }
}