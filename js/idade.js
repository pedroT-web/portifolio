    let calculoIdade = 0
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDate();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoAtual = dataAtual.getFullYear();

    let infoAno = [diaAtual, mesAtual, anoAtual]
    let infoNiver = [23, 7, 2007]

    if (infoNiver[1] < infoAno[1]) {
      calculoIdade = infoNiver[2] - infoAno[2];
    }else if(infoAno[1] == infoNiver[1] && infoNiver[0] < infoAno[0]){
      calculoIdade = infoNiver[2] - infoAno[2];
    } else {
      calculoIdade = (infoAno[2] - infoNiver[2]) - 1;
    }

    const idadeAtual = document.getElementById("idade")
    idadeAtual.innerText = calculoIdade;

console.log(calculoIdade);