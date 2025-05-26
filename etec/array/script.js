const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const dataAtual = new Date();
const mesAtual = dataAtual.getMonth();
const diaAtual = dataAtual.getDate();
const anoAtual = dataAtual.getFullYear();

const containerMeses = document.getElementById("meses");

meses.forEach((mes, index) => {
    const spanMes = document.createElement("span");
    spanMes.textContent = mes;
    spanMes.classList.add("mes");
    if (index === mesAtual) {
        spanMes.classList.add("atual");
    }
    containerMeses.appendChild(spanMes);
});

const containerDias = document.getElementById("dias-maio");
containerDias.innerHTML = "";

const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
diasSemana.forEach(dia => {
    const span = document.createElement("span");
    span.textContent = dia;
    span.classList.add("dia-semana");
    containerDias.appendChild(span);
});

const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
for (let i = 0; i < primeiroDia; i++) {
    const vazio = document.createElement("span");
    vazio.classList.add("dia", "dia-vazio");
    containerDias.appendChild(vazio);
}

const totalDias = new Date(anoAtual, mesAtual + 1, 0).getDate();
for (let dia = 1; dia <= totalDias; dia++) {
    const spanDia = document.createElement("span");
    spanDia.textContent = dia;
    spanDia.classList.add("dia");

    if (dia === diaAtual) {
        spanDia.classList.add("dia-atual");
    }

    containerDias.appendChild(spanDia);
}
