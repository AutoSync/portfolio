# 📄 Software Design Document (SDD) — Portfólio Profissional Web

---

## 1. Visão Geral

### 1.1 Objetivo

Desenvolver um portfólio web estático hospedado via GitHub Pages com o objetivo de:

- Apresentar projetos técnicos
- Demonstrar capacidade de arquitetura e raciocínio
- Gerar oportunidades (emprego ou clientes)

### 1.2 Escopo

O sistema consiste em:

- Landing page (Home)
- Página de listagem de projetos
- Página individual de projeto
- Contato

**Fora do escopo (MVP):**

- Backend próprio
- Autenticação
- CMS dinâmico

### 1.3 Stakeholders

| Stakeholder      | Interesse                    |
| ----------------- | ---------------------------- |
| Recrutadores      | Avaliar capacidade técnica   |
| Clientes          | Entender soluções entregues  |
| Usuário (você)    | Posicionamento profissional  |

---

## 2. Arquitetura do Sistema

### 2.1 Visão Geral

```
Usuário → Navegador → GitHub Pages → Arquivos Estáticos
```

### 2.2 Stack Tecnológica

**Opção 1 (Simples):** HTML5 · CSS3 · JavaScript

**Opção 2 (Recomendada):** Next.js (export estático) · Tailwind CSS

### 2.3 Estrutura de Diretórios

```
/portfolio
 ├── index.html
 ├── /projects
 │    ├── index.html
 │    ├── projeto-x.html
 │    └── projeto-y.html
 ├── /assets
 │    ├── css/
 │    ├── js/
 │    └── images/
 └── /data
      └── projects.json
```

---

## 3. Design de Interface (UI/UX)

### 3.1 Princípios

- Clareza > estética
- Foco em decisão técnica
- Baixa fricção de navegação

### 3.2 Estrutura da Home

```
[ HERO ]          → Nome · Especialização · CTA
[ PROJETOS ]      → Cards com resumo
[ SOBRE ]         → Experiência + foco técnico
[ CONTATO ]       → Links diretos
```

### 3.3 Página de Projeto

Cada projeto deve conter: Contexto · Problema · Solução · Arquitetura · Tecnologias · Resultados · Links

---

## 4. Modelagem de Dados

### 4.1 Estrutura (`projects.json`)

```json
[
  {
    "id": "projeto-1",
    "nome": "Sistema de Tráfego Inteligente",
    "descricao": "IA para controle de semáforos",
    "tecnologias": ["Python", "Godot", "OpenCV"],
    "link_repo": "",
    "link_demo": "",
    "imagem": ""
  }
]
```

---

## 5. Componentes do Sistema

| Componente    | Responsabilidade      |
| ------------- | --------------------- |
| Header        | Navegação             |
| Hero          | Apresentação inicial  |
| ProjectCard   | Resumo de projeto     |
| ProjectPage   | Detalhamento          |
| Footer        | Contato               |

**Fluxo:** Home → Lista de Projetos → Projeto Individual → Contato

---

## 6. Requisitos

### 6.1 Funcionais

| ID   | Requisito                               |
| ---- | --------------------------------------- |
| RF01 | Exibir lista de projetos                |
| RF02 | Exibir detalhes de projeto              |
| RF03 | Redirecionar para repositórios externos |
| RF04 | Responsividade                          |

### 6.2 Não Funcionais

| ID    | Requisito                      |
| ----- | ------------------------------ |
| RNF01 | Tempo de carregamento < 2s     |
| RNF02 | Compatível com mobile          |
| RNF03 | SEO básico                     |

---

## 7. Riscos e Mitigações

| Risco               | Impacto | Mitigação              |
| -------------------- | ------- | ---------------------- |
| Portfólio genérico   | Alto    | Foco em projetos reais |
| Falta de contexto    | Alto    | Documentar decisões    |
| Design fraco         | Médio   | Usar framework         |

---

## 8. Considerações Estratégicas

| Aspecto         | Detalhe                                              |
| --------------- | ---------------------------------------------------- |
| **Forças**      | Simplicidade de deploy · Baixo custo · Alta disponibilidade |
| **Fraquezas**   | Limitado para lógica dinâmica · Dependência de estrutura estática |
| **Oportunidade**| Posicionamento como especialista via narrativa técnica |
| **Risco**       | Portfólio virar apenas vitrine sem conversão         |

---

---

# 🗺️ Roadmap — Sprints & Milestones

## Visão do Roadmap

```
MS-0 Setup ──► MS-1 Fundação ──► MS-2 Conteúdo ──► MS-3 Polish ──► MS-4 Live
  Sprint 0        Sprint 1          Sprint 2         Sprint 3        Sprint 4
```

---

## Milestone 0 — Projeto & Setup

> **Objetivo:** Ambiente pronto e decisões de stack definidas.

### Sprint 0 · Setup & Planejamento

| #    | Tarefa                                         | Status |
| ---- | ---------------------------------------------- | ------ |
| 0.1  | Definir stack final (Next.js + Tailwind ou HTML puro) | ⬜     |
| 0.2  | Criar repositório GitHub                       | ⬜     |
| 0.3  | Inicializar projeto (scaffolding)              | ⬜     |
| 0.4  | Configurar linter / formatter (ESLint, Prettier) | ⬜     |
| 0.5  | Criar estrutura de diretórios conforme §2.3    | ⬜     |
| 0.6  | Configurar GitHub Pages (branch deploy)        | ⬜     |

**Entregável:** Repositório funcional com deploy automático vazio.

---

## Milestone 1 — Fundação (Layout & Navegação)

> **Objetivo:** Estrutura visual navegável com dados mock.

### Sprint 1 · Layout Base & Componentes Core

| #    | Tarefa                                           | Status |
| ---- | ------------------------------------------------ | ------ |
| 1.1  | Implementar componente `Header` com navegação    | ⬜     |
| 1.2  | Implementar componente `Footer` com links sociais| ⬜     |
| 1.3  | Implementar seção `Hero` na Home                 | ⬜     |
| 1.4  | Implementar seção `Sobre` na Home                | ⬜     |
| 1.5  | Criar `projects.json` com dados de exemplo       | ⬜     |
| 1.6  | Implementar componente `ProjectCard`             | ⬜     |
| 1.7  | Implementar página de listagem de projetos       | ⬜     |
| 1.8  | Implementar layout base responsivo (mobile-first)| ⬜     |

**Entregável:** Site navegável com Home e lista de projetos (dados mock). ✅ RF01, RF04

---

## Milestone 2 — Conteúdo & Detalhamento

> **Objetivo:** Páginas individuais de projeto e conteúdo real.

### Sprint 2 · Páginas de Projeto & Dados Reais

| #    | Tarefa                                              | Status |
| ---- | --------------------------------------------------- | ------ |
| 2.1  | Implementar template `ProjectPage` (detalhamento)   | ⬜     |
| 2.2  | Roteamento / navegação para projetos individuais    | ⬜     |
| 2.3  | Links para repositórios / demos externos            | ⬜     |
| 2.4  | Substituir dados mock por projetos reais            | ⬜     |
| 2.5  | Escrever conteúdo: contexto, problema, solução, resultados | ⬜     |
| 2.6  | Adicionar imagens / screenshots dos projetos        | ⬜     |
| 2.7  | Implementar seção de Contato (links diretos)        | ⬜     |

**Entregável:** Todos os projetos documentados e acessíveis. ✅ RF02, RF03

---

## Milestone 3 — Polish & Performance

> **Objetivo:** Qualidade visual, performance e SEO.

### Sprint 3 · Refinamento

| #    | Tarefa                                            | Status |
| ---- | ------------------------------------------------- | ------ |
| 3.1  | Otimizar imagens (WebP, lazy loading)             | ⬜     |
| 3.2  | Adicionar meta tags SEO (title, description, OG)  | ⬜     |
| 3.3  | Testar performance (Lighthouse ≥ 90)              | ⬜     |
| 3.4  | Testar responsividade em dispositivos reais       | ⬜     |
| 3.5  | Ajustar tipografia, espaçamento, cores finais     | ⬜     |
| 3.6  | Adicionar favicon e manifest                      | ⬜     |
| 3.7  | Adicionar animações sutis (scroll, hover)         | ⬜     |

**Entregável:** Site polido e otimizado. ✅ RNF01, RNF02, RNF03

---

## Milestone 4 — Deploy & Go-Live

> **Objetivo:** Portfólio publicado e acessível.

### Sprint 4 · Lançamento

| #    | Tarefa                                          | Status |
| ---- | ----------------------------------------------- | ------ |
| 4.1  | Revisão final de conteúdo e links               | ⬜     |
| 4.2  | Validar build de produção                       | ⬜     |
| 4.3  | Deploy final no GitHub Pages                    | ⬜     |
| 4.4  | Configurar domínio customizado (opcional)       | ⬜     |
| 4.5  | Compartilhar em redes / LinkedIn                | ⬜     |

**Entregável:** 🚀 Portfólio live em `https://usuario.github.io/portfolio`

---

## Backlog — Melhorias Futuras (pós-MVP)

| Prioridade | Melhoria                          |
| ---------- | --------------------------------- |
| P1         | Blog técnico                      |
| P2         | Dashboard interativo              |
| P3         | Integração com APIs externas      |
| P4         | Deploy híbrido com Vercel         |
| P5         | Analytics (visitas, cliques)      |

---

## Legenda

| Símbolo | Significado  |
| ------- | ------------ |
| ⬜      | Não iniciado |
| 🔄      | Em progresso |
| ✅      | Concluído    |
| 🚫      | Bloqueado    |