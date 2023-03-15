import PromptSync from "prompt-sync";

const prompt = PromptSync();

const pertenceSequencia = (n) => {
    if(n === 0 || n == 1) {
        return true
    }

    let i = 2;

    while (true) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

        if (fibonacci[i] === n) {
            return true
        } else if (fibonacci[i] > n) {
            return false
        }

        i++;
    }
}

let fibonacci = [0, 1]
let n = Number.parseInt(prompt('Informe um número: '));
const pertenceASequencia = pertenceSequencia(n);

if (pertenceASequencia === true) {
    console.log(`${n} pertence a sequencia de fibonacci`)
} else {
    console.log(`${n} não pertence a sequencia de fibonacci`)
}
