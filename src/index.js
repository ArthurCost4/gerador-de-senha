import Gerador from './gerarSenha'

console.log('ola,mundo')
try {
    const form = new Gerador
} catch (error) {
    throw new Error('ops, algo de errado não está certo')
}
