# 🚀 Retenz.app — Plataforma de Fidelidade & Retenção B2B (Micro-SaaS)

> **Solução B2B para redução de churn em PMEs através de automação de programas de recompensa e retenção de clientes.**

---

## 🎯 Problema Real

Pequenos e médios comércios enfrentam **alta taxa de rotatividade de clientes (churn)** e alto custo de aquisição (CAC). A maioria não possui ferramentas simples e acessíveis para incentivar a recorrência de compras, dependendo de cartões de papel ou planilhas manuais propensas a perdas e fraudes.

---

## 💡 O que o Retenz.app Resolve

- **Para o Lojista:** Centraliza a gestão da carteira de clientes, automatiza o acúmulo de pontos/cashback por valor gasto e fornece métricas de retenção em tempo real.
- **Para o Consumidor:** Oferece consulta instantânea de saldo e resgate transparente de recompensas no momento do checkout via QR Code.
- **Para o Negócio (Segurança):** Elimina duplicidade de resgates e fraudes via motor transacional isolado e _pessimistic locking_ no banco de dados.

---

## 🛠️ Stack Tecnológica

- **Backend:** Node.js (v20+), TypeScript, NestJS
- **Frontend:** React, TypeScript, Next.js / Tailwind CSS
- **Banco de Dados & ORM:** PostgreSQL, TypeORM
- **Infraestrutura & Segurança:** Docker, JWT, Passport.js, Jest (Unit & E2E)

---

## ⚙️ Esteira de Desenvolvimento & Status do Projeto

### **1. Core & Autenticação**

- [x] Modelagem de banco de dados relacional e isolamento multi-tenant (`tenant_id`).
- [x] Autenticação segura via JWT e controle de acesso baseado em funções (RBAC).
- [x] Filtros globais de exceção e padronização de respostas de erro (RFC 7807).

### **2. Motor Transacional de Pontos**

- [x] Lançamento de pontos com validação rígida via DTOs (`class-validator`).
- [x] Motor de resgate de recompensas com trava transacional (_Pessimistic Lock_) contra _race conditions_.
- [x] Extrato transacional auditável (créditos e débitos).

### **3. Gestão de Recompensas & Clientes**

- [x] CRUD de catálogo de prêmios com limite de estoque e regra de conversão ($1 = X pontos).
- [x] Painel de busca e cadastro simplificado de clientes no balcão/caixa.
- [x] Documentação interativa da API via Swagger (`/api/docs`).

### **4. Qualidade & Suíte de Testes**

- [x] Testes unitários de Use Cases e Regras de Negócio com Jest.
- [x] Testes de integração (E2E) para rotas críticas de pontuação e autenticação.
- [ ] _[Em andamento]_ Job assíncrono para expiração automática de pontos inativos.

### **5. Expansão & Integrações**

- [ ] _[Backlog]_ Webhooks de notificação via WhatsApp API para atualização de saldo.
- [ ] _[Backlog]_ Dashboard com gráficos de frequência de compra e taxa de retorno.

---

## 🚀 Como Rodar Localmente

```bash
# 1. Clonar repositório
git clone https://github.com/seu-usuario/retenz-app.git && cd retenz-app

# 2. Configurar ambiente (.env) e subir banco
cp .env.example .env
docker-compose up -d

# 3. Instalar dependências e rodar migrations
npm install
npm run typeorm migration:run

# 4. Executar servidor e testes
npm run start:dev
npm run test
```

---

<p align="center">
  Desenvolvido por <strong>Henrique Araújo</strong> • 
  <a href="https://henriquearaujo.dev">henriquearaujo.dev</a> • 
  <a href="https://www.linkedin.com/in/henriquearaujodev/">LinkedIn</a>
</p>
