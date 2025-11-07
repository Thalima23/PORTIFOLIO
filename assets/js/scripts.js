// Selecionar a Seção About
const about = document.querySelector('#about');

// Selecionar o formulário
const formulario = document.querySelector('#formulario');

// Expressao regular p/ validaçao de e-mail

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Função para buscar os dados no GitHub
async function getApiGithub() {
    try{

        // passo 1: Fazer uma requisção do tipo GET para o perfil do GitHub

        const dadosPerfil = await fetch('https://api.github.com/users/Thalima23');

        // passo 2: Converter a Resposta da API para Json
        const perfilJson = await dadosPerfil.json();

        // passo 3: criar o HTML/CSS com os dados do perfil

        let conteudo = `
        
         <!-- Foto do Pefil-->
            <figure class="about_image">
                <img 
                src="${perfilJson.avatar_url}"
                alt= "Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>

            <!--Conteúdo do Perfil-->
            <article class="about_content">

                <h2> Sobre mim</h2>
                <p>🎓 Bióloga em transição de carreira para a área de tecnologia.


👩🏽‍💻Estudante de Análise e Desenvolvimento de Sistemas e participante do bootcamp Generation Brasil – Full Stack Java.

📚 Atualmente, estou desenvolvendo projetos em Java, Spring Boot e MySQL, com foco em criar soluções eficientes e de impacto.

🚀 Apaixonada por aprendizado contínuo, curiosidade e desafios que me fazem crescer como desenvolvedora.

                </p>

                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                    <div class="stats-wrapper">
                    <div class="stat-item">
                        <p class="stat-number">${perfilJson.followers}</p>
                        <p class="stat-label">Seguidores</p>

                    </div>
                    <div class="stat-item">
                        <p class="stat-number">${perfilJson.public_repos}</p>
                         <p class="stat-label">Repositórios</p>
                    </div>
                </div>
            </article>
            
    
        `;
    
    //PASSO 04: Adicionar o HTML dentro da Seção About

        about.innerHTML += conteudo;

    }catch(error){
        console.error(error);
    }
}

// Função de envio e validação do formulário
formulario.addEventListener('submit', function(event){

    // Impedir o envio automático do formulário
    event.preventDefault();
    
    //validação do campo nome
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    // Nome precisa ter no mínimo 3 caracteres
    if(campoNome.value.length < 3){
        txtNome.innerHTML = ' O Nome deve ter no mínimo 3 caracteres'
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';

    }

// Verifica se o e-mail é válido
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    // E-mail precisa ter no mínimo 3 caracteres
    if(!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Digite um e-mail válido!'
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';

    }

// Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    // Campo Assunto precisa ter no mínimo 5 caracteres
    if(campoAssunto.value.length < 5){
        txtAssunto.innerHTML = ' O campo Assunto deve ter no mínimo 5 caracteres'
        campoAssunto.focus();
        return;
    }else{
        txtAssunto.innerHTML = '';

    }

    // Validação do campo mensagem
    const campoMensagem = document.querySelector('#mensagem');
    const txtMensagem = document.querySelector('#txtMensagem');

// Campo Mensagem precisa ter no mínimo 10 caracteres
    if(campoMensagem.value.length < 5){
    txtMensagem.innerHTML = 'Digite pelo menos 5 caracteres na mensagem';
    campoMensagem.focus();
        return;
    } else {
    txtMensagem.innerHTML = '';
}

    // Se passou por todas as validações, envia o formulário
    formulario.submit();
})

// Chamar a função getAPIGithub()

getApiGithub();