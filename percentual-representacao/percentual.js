const Filial = (estado, faturamento) => {
    return {
        estado,
        faturamento
    }
}

const faturamento = []

faturamento.push(Filial('SP', 67836.43))
faturamento.push(Filial('RJ', 36678.66))
faturamento.push(Filial('MG', 29229.88))
faturamento.push(Filial('ES', 27165.48))
faturamento.push(Filial('Outros', 19849.53))

const faturamentoTotal = faturamento.reduce((total, filial) => {
    return total += filial.faturamento;
}, 0)

console.log("Percentual de representação do lucro de cada filial\n");

faturamento.forEach((filial) => {
    let percentual = (filial.faturamento/faturamentoTotal) * 100
    console.log(`${filial.estado} - ${percentual.toFixed(2)}%`)
})