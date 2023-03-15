import PromptSync from "prompt-sync";

const prompt = PromptSync();

let string = prompt('Escreva algo: ')


const inverterString = (string) => {
    let stringInvertida = ''

    for(let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida
}

const novaString = inverterString(string);

console.log(novaString);
