<h2>Clone do projeto</h2>

Clonar o repositório

```bash
git clone https://github.com/magdacastro/basic-form
```

<h2>Frontend - Opção 1 (Usando o servidor de desenvolvimento)</h2>

Entrar no diretório *basic-form/frontend*

Rodar `npm i`

Manter executando em um shell o comando `ng serve`

Abrir o navegador no endereço: `127.0.0.1:4200`

<h2>Frontend - Opção 2 (Usando o express)</h2>

Entrar no diretório *basic-form/server*

Rodar `npm i`

Manter executando em um shell o comando `npx nodemon app.js`

Abrir o navegador no endereço: `127.0.0.1:4200`

<h2>Backend</h2>

Entrar no diretório *basic-form/backend*

Rodar `npm i`

Configurar as variáveis de ambiente para envio de e-mail, por exemplo:

```env
APP_PORT=3000

MAIL_DRIVER=gmail
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=magdacatianedecastro@gmail.com
MAIL_PASSWORD=sgaiizwpfqztzrvn

MAIL_TO=contato@overmind.ai
```

Manter executando em um shell o comando `npx nodemon app.js`
