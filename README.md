
# Fleet Management Backend

Este é o backend para o sistema de gerenciamento de frota, destinado a provedores de serviços de internet. O sistema oferece funcionalidades para gerenciar veículos, documentações, registros de abastecimento, manutenções, equipes, serviços, checklists, ocorrências e análises de desempenho. A aplicação foi construída utilizando Node.js, Express e Sequelize ORM, com MySQL como banco de dados.

---

## 📑 **Tabela de Conteúdos**

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Endpoints da API](#endpoints-da-api)
- [Coleção Postman](#coleção-postman)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---

## 🚀 **Recursos**

- **Autenticação de Usuários:** Registro e login com geração de token JWT.
- **Gerenciamento de Veículos:** CRUD para veículos, incluindo informações técnicas e de aquisição.
- **Documentações:** Cadastro e monitoramento de documentos, com alertas para vencimentos.
- **Registros de Abastecimento:** Controle de abastecimentos, consumo e custos.
- **Manutenções:** Agendamento e registro de manutenções preventivas e corretivas.
- **Gestão de Equipes:** Cadastro e gerenciamento de equipes de campo.
- **Serviços:** Agendamento e gerenciamento de serviços com geolocalização.
- **Checklists:** Criação e acompanhamento de checklists para serviços.
- **Ocorrências:** Registro de ocorrências durante os atendimentos.
- **Análises e Relatórios:** Dashboard com KPIs e indicadores de desempenho.

---

## 🛠️ **Tecnologias Utilizadas**

- **Node.js** e **Express** – Servidor backend e criação de API RESTful.
- **Sequelize ORM** – Mapeamento objeto-relacional para interagir com o banco MySQL.
- **MySQL** – Banco de dados relacional.
- **JWT** – Autenticação e controle de acesso.
- **dotenv** – Gerenciamento de variáveis de ambiente.
- **Nodemon** – Reinício automático do servidor em ambiente de desenvolvimento.

---

## 📂 **Estrutura do Projeto**

```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── analyticsController.js
│   ├── authController.js
│   ├── checklistController.js
│   ├── documentationController.js
│   ├── fuelingRecordController.js
│   ├── maintenanceController.js
│   ├── occurrenceController.js
│   ├── serviceController.js
│   ├── teamController.js
│   └── vehicleController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   ├── Checklist.js
│   ├── Documentation.js
│   ├── FuelingRecord.js
│   ├── Maintenance.js
│   ├── Occurrence.js
│   ├── Service.js
│   ├── Team.js
│   ├── User.js
│   ├── Vehicle.js
│   └── index.js
├── routes/
│   ├── analyticsRoutes.js
│   ├── authRoutes.js
│   ├── checklistRoutes.js
│   ├── documentationRoutes.js
│   ├── fuelingRecordRoutes.js
│   ├── maintenanceRoutes.js
│   ├── occurrenceRoutes.js
│   ├── serviceRoutes.js
│   ├── teamRoutes.js
│   └── vehicleRoutes.js
├── utils/
│   └── logger.js
├── .env
├── package.json
└── server.js
```

---

## 💻 **Instalação**

1. **Clone o repositório:**

```bash
git clone <repository_url>
cd backend
```

2. **Instale as dependências:**

```bash
npm install
```

---

## ⚙️ **Configuração**

1. **Crie o arquivo `.env` na raiz do projeto** com as seguintes variáveis:

```env
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/fleetdb
JWT_SECRET=secret
```

2. **Crie o Banco de Dados:**

```sql
CREATE DATABASE fleetdb;
USE fleetdb;
-- Execute o script de criação das tabelas aqui.
```

---

## 🚦 **Execução**

### Em ambiente de desenvolvimento

```bash
npm run dev
```

### Em ambiente de produção

```bash
npm start
```

---

## 📡 **Endpoints da API**

- `POST /api/auth/register` – Registrar um novo usuário.
- `POST /api/auth/login` – Autenticar usuário e obter token JWT.
- `GET /api/vehicles` – Listar todos os veículos.
- `GET /api/vehicles/:id` – Obter um veículo específico.
- `POST /api/vehicles` – Criar um novo veículo.
- `PUT /api/vehicles/:id` – Atualizar informações de um veículo.
- `DELETE /api/vehicles/:id` – Excluir um veículo.

---

## 📬 **Coleção Postman**

- Importe o arquivo `FleetManagement.postman_collection.json` no Postman.
- Configure as variáveis de ambiente (`base_url` e `token`).

---

## 🤝 **Contribuição**

1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b minha-nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin minha-nova-feature`).
5. Abra um Pull Request.

---

## 📄 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 📧 **Contato**

- **Nome:** Thiago Oliveira
- **Email:** [tg.oliver22@gmail.com](mailto:tg.oliver22@gmail.com)