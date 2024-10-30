import functions_framework
from flask import request

@functions_framework.http
def main_http(request):
    # HTML do conteúdo da página
    html_content = """
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Explicação sobre Serviços na Nuvem</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background-color: #f7f7f7; }
                h1 { color: #4285F4; }
                p { color: #555555; line-height: 1.6; }
                img { display: block; margin-left: auto; margin-right: auto; width: 150px; }
                .content { max-width: 800px; margin: auto; }
                .serverless-image { width: 100%; max-width: 500px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="content">
                <img src="data:image/jpeg;base64,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" alt="Google Logo">
                <h1>Serviços de Nuvem e Google Cloud</h1>
                
                <h2>Tipos de Nuvem</h2>
                <p><strong>Nuvem Pública:</strong> Recursos são compartilhados entre vários usuários, e o provedor de serviços gerencia a infraestrutura. Exemplo: Google Cloud.</p>
                <p><strong>Nuvem Privada:</strong> É dedicada a um único usuário ou organização, oferecendo maior controle e segurança sobre os dados e a infraestrutura.</p>
                <p><strong>Nuvem Híbrida:</strong> Combina nuvens públicas e privadas, permitindo que as empresas mantenham uma parte dos dados e operações em ambientes privados e usem a nuvem pública para outras necessidades.</p>

                <img src="https://media.brainly.com.br/image/rs:fill/w:1920/q:75/plain/https://pt-static.z-dn.net/files/d9a/14b958bb20657a72fd4c2a8852f53854.png" alt="Imagem Serverless" class="serverless-image">

                <h2>Serverless</h2>
                <p>Serverless permite que você execute código sem a necessidade de gerenciar servidores. O Google Cloud Functions, por exemplo, é um serviço serverless que executa funções baseadas em eventos.</p>
                
                <img src="https://www.gstatic.com/bricks/image/05160504d56cfbe1aaf1a16ef9f374f6d8e1087ec34a4f21d0e5dc26689f6e99.svg" alt="Imagem Serverless" class="serverless-image">
                
                <h2>Buckets</h2>
                <p>Um Bucket é uma unidade de armazenamento usada no Google Cloud Storage para organizar e armazenar dados, como arquivos e imagens, na nuvem.</p>
                
                <img src="https://database-heartbeat.com/wp-content/uploads/2024/05/title.png" alt="Imagem Buckets" class="buckets-image">

                <h2>Cloud Functions</h2>
                <p>Google Cloud Functions é uma plataforma serverless que permite executar funções em resposta a eventos sem precisar configurar ou gerenciar servidores.</p>

                <img src="https://www.gstatic.com/bricks/image/31b5bfef7017b6db48c0148e9695f8522b442778a14ebeb227910c36241fed0f.svg" alt="google functions" class="functions-image">
                <h2>Google Cloud Storage</h2>
                <p>Google Cloud Storage é um serviço de armazenamento seguro e escalável para dados não estruturados, acessível de forma global.</p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZ3aA46sU6qGZmPO9iWMLpE_pUL0SFOptmI5g_E9kT8Jtcdqtu4TrxkYXGck1FayiEhg&usqp=CAU" alt="google functions" class="functions-image">

            </div>
        </body>
    </html>
    """
    return html_content, 200, {'Content-Type': 'text/html; charset=utf-8'}
