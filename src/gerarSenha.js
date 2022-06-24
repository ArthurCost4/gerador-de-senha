export default class Gerador {
    constructor() {
        this.formPassword = document.getElementById('form');
        this.gerarSenha()
    }


    gerarSenha() {
        this.formPassword.addEventListener(
            'submit',
            (event) => {
                this.handleSubmit(event)
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault()
        const a = this.geraSenha()
        this.viewPassword(a)
    }

    //captura e verifica o input de quantidade
    sizePassword() {
        const numberCharacter = document.querySelector('.numberCharacter').value

        if (numberCharacter <= 0) return alert('Digita um numero faz favor')
        if (numberCharacter > 30) return alert('O numero tem que estar entre 0-30')

        return numberCharacter
    }

    //checa os inputs selecionados
    checkBoxConfirm(){
        const recursosSenha = []
        const campos = document.getElementsByName('recursos')
        
        for(let i=0; i<campos.length;i++){
            if(campos[i].checked == true){
                recursosSenha.push(campos[i].value)
            }
        }
        if(recursosSenha.length <1){
            alert('Tem que ter pelo menos um campo selecionado')
            return
        }
        return recursosSenha  
    }

    //constroi um array com os recursos a serem usados na senha
    buildArrRecursos(){
        const checkbox = this.checkBoxConfirm()
        //console.log(checkbox)
        const arrRecursos = []

        for(let i=0; i<checkbox.length; i++){
            const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const lower = 'abcdefghijklmnopqrstuvwxyz'
            const num = '1234567890'
            const special = '!@#$%&'

            if(checkbox[i]=='upperCase'){
                arrRecursos.push(upper)
            }else if(checkbox[i]=='lowerCase'){
                arrRecursos.push(lower)
            }else if(checkbox[i]=='numbers'){
                arrRecursos.push(num)
            }else if(checkbox[i]=='charEspecial'){
                arrRecursos.push(special)
            }
        }
        const arrJunto = arrRecursos.reduce((acum, valorAtual)=>{
            return acum += valorAtual
        })
        return arrJunto
    }

    //aqui é onde as senhas serão geradas e retornadas para a visualização
    geraSenha(){
        const sizePassword = this.sizePassword()
        const arrRecursos = this.buildArrRecursos()

        var makePassworld = ''

        const result = this.setNewPassword(makePassworld, sizePassword, arrRecursos)
        return result

    }

    //com os recursos e a quantidade setada, aqui serao construidas as novas senhas
    setNewPassword(acum, sizePassword, maxChar) {
        for (var i = 0; i < sizePassword; i++) {

            var randomPass = Math.floor(Math.random() * maxChar.length);

            acum += maxChar.substring(randomPass, randomPass + 1);
          }
          return acum
    }

    //mostra na tela a senha gerada
    viewPassword(result){
        const output = document.getElementById('output')
        output.innerHTML = result
        console.log(output.innerHTML)
        return output
    }

}