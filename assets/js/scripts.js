// Selecionar a Seção About
const about = document.querySelector('#about');

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

// Chamar a função getAPIGithub()

getApiGithub();