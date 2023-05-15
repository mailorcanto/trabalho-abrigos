//TRABALHO ABRIGOS

//obs: abrir console no navegador antes de acessar index.html

function menu(){    
    var opcao = Number(prompt(`===== ABRIGOS TEMPORÁRIOS =====
    1. Cadastrar abrigo
    2. Listar abrigos
    3. Procurar abrigos
    4. Sair
    Escolha uma opção:`))
    switch (opcao){
        case 1:
            cadastrarAbrigo();
            break
        case 2:    
            listarAbrigos();
            break
        case 3:
            procurarAbrigos();
            break
        case 4:
            break
        default:
            console.log('Escolha uma opção!')
            menu();                             
    }
}

//abrigos pré-cadastrados
var abrigo0 = {
    nome: 'Casa do Caminho',
    endereco: 'Rua do Amanhecer, 123, Centro',
    telefone: '(51) 1234-5678',
    capacidade: 20,
    cidade: 'Canoas'
}
var abrigo1 = {
    nome: 'Abrigo Esperança',
    endereco: 'Rua da Solidariedade, 321, Bairro',
    telefone: '(51) 9876-5432',
    capacidade: 30,
    cidade: 'São Leopoldo'
}
var abrigo2 = {
    nome: 'Casa dos Amigos',
    endereco: 'Av. da Fraternidade, 456, Centro',
    telefone: '(51) 5555-4444',
    capacidade: 25,
    cidade: 'Novo Hamburgo'
}
var abrigo3 = {
    nome: 'Abrigo do Bem',
    endereco: 'Rua da Esperança, 789, Bairro',
    telefone: '(51) 7777-8888',
    capacidade: 35,
    cidade: 'Canoas'
}
var abrigo4 = {
    nome: 'Casa dos Anjos',
    endereco: 'Av. da Paz, 159, Centro',
    telefone: '(51) 3333-2222',
    capacidade: 15,
    cidade: 'Porto Alegre'
}
//abrigos pré-cadastrados

var arrayAbrigos =[abrigo0,abrigo1,abrigo2,abrigo3,abrigo4];

function cadastrarAbrigo (){
    var nome = prompt('Informe nome do abrigo');
    var endereco = prompt ('Informe endereço do abrigo');
    var telefone = prompt('Informe telefone do abrigo');
    var capacidade = Number(prompt('Informe  capacidade do abrigo'));
    var cidade = prompt('Informe cidade do abrigo:')
    var confirmaDados = prompt(`Nome do abrigo: ${nome}
    Endereço do abrigo: ${endereco}
    Telefone do abrigo: ${telefone}
    Capacidade do abrigo: ${capacidade}
    Cidade do abrigo: ${cidade}
    CONFIRMA DADOS? (s para 'sim', n para 'não', outra tecla para voltar ao menu`)

    if(confirmaDados == 's'){
        var abrigo = {
            nome: nome,
            endereco: endereco,
            telefone: telefone,
            capacidade: capacidade,
            cidade: cidade
        }
        arrayAbrigos.push(abrigo);
        var continuar = Number(prompt('Digite 1 para continuar cadastrando, 2 para listar abrigos ou 3 para voltar ao menu'));
        switch (continuar){
            case 1:
                cadastrarAbrigo();
                break
            case 2:
                listarAbrigos();
                break
            case 3:
                menu();
                break
            default:
                break                                
        }
    } 
    else if(confirmaDados=='n'){
        cadastrarAbrigo();
    }
    else{
        menu();
    }
}

function listarAbrigos(){ //usando console.log para exibir informações, caixa de prompt do navegador é muito pequena
    console.log(`código | nome | endereço | telefone | capacidade | cidade`)
    for (i = 0; i < arrayAbrigos.length; i++){
    console.log(`${i} | ${arrayAbrigos[i].nome} | ${arrayAbrigos[i].endereco} | ${arrayAbrigos[i].telefone} | ${arrayAbrigos[i].capacidade} | ${arrayAbrigos[i].cidade}
    `)
    }
    menu();
}

function procurarAbrigos(){ //usando console.log para exibir informações, caixa de prompt do navegador é muito pequena
    cidade = prompt('Em que cidade você está?');
    console.log(`código | nome | endereço | telefone | capacidade | cidade`)
    for (i = 0; i < arrayAbrigos.length ; i++){
        if (arrayAbrigos[i].cidade == cidade){
            console.log(`${i} | ${arrayAbrigos[i].nome} | ${arrayAbrigos[i].endereco} | ${arrayAbrigos[i].telefone} | ${arrayAbrigos[i].capacidade} | ${arrayAbrigos[i].cidade}`)
        }
    }
    menu();
}

menu();
