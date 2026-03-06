# 🤖 NexusAI — Assistente de IA Multilíngue

<p align="center">
  <strong>Uma aplicação full-stack moderna estilo ChatGPT construída com React e Lovable Cloud</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat-square&logo=openai" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite" />
</p>

---

## 📖 Descrição

**NexusAI** é uma aplicação de chat com inteligência artificial que replica a experiência do ChatGPT com uma interface premium, moderna e multilíngue. O projeto foi desenvolvido como desafio educacional da DIO, demonstrando integração full-stack com a API da OpenAI.

---

## 👤 Autor

**Matheus Florindo de Deus**  
🔬 **TROPA CIENTÍFICA** — Núcleo Tático

---

## 🚀 Funcionalidades

- 💬 **Chat com IA** — Converse com GPT-4o-mini em tempo real
- 🌐 **Multilíngue** — Português (BR), English, Français
- 📚 **Histórico de conversas** — Sidebar com gerenciamento de múltiplas conversas
- 📝 **Markdown** — Respostas renderizadas com formatação rica
- ⚡ **Indicador de carregamento** — Animação elegante enquanto a IA processa
- 🎨 **Dark mode** — Interface escura premium por padrão
- 📱 **Responsivo** — Funciona em desktop e mobile
- 🔒 **Seguro** — Chave da API nunca exposta no frontend

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Vite |
| **UI** | Shadcn/UI, Lucide Icons, react-markdown |
| **Backend** | Lovable Cloud (Edge Functions) |
| **IA** | OpenAI API (GPT-4o-mini) |
| **i18n** | Sistema próprio de traduções (JSON) |

---

## 🏗️ Arquitetura

```
src/
├── components/
│   ├── ChatHeader.tsx        # Cabeçalho com logo e seletor de idioma
│   ├── ChatPanel.tsx         # Painel de chat com mensagens
│   ├── ChatSidebar.tsx       # Sidebar com histórico de conversas
│   ├── InputBox.tsx          # Campo de input com botão enviar
│   ├── LanguageSelector.tsx  # Seletor de idioma
│   ├── LoadingIndicator.tsx  # Indicador de carregamento animado
│   ├── Message.tsx           # Bolha de mensagem (user/assistant)
│   └── WelcomeScreen.tsx     # Tela de boas-vindas
├── contexts/
│   └── ChatContext.tsx       # Context para estado compartilhado
├── hooks/
│   ├── useChat.ts            # Hook principal do chat
│   ├── useConversations.ts   # Gerenciamento de conversas
│   └── useI18n.ts            # Hook de internacionalização
├── i18n/
│   ├── index.ts              # Sistema i18n
│   ├── pt-BR.json            # Traduções Português
│   ├── en.json               # Traduções English
│   └── fr.json               # Traduções Français
└── pages/
    └── Index.tsx              # Página principal

supabase/functions/
└── chat/
    └── index.ts              # Edge function para proxy OpenAI
```

---

## ⚙️ Como Executar

### Pré-requisitos

- Conta na [Lovable](https://lovable.dev)
- Chave de API da [OpenAI](https://platform.openai.com/api-keys)

### Configuração

1. **Clone o repositório** no Lovable ou faça remix do projeto
2. **Adicione a chave da OpenAI** nas configurações de Secrets do Lovable Cloud
3. **Pronto!** A aplicação já está rodando

### Desenvolvimento local

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

---

## 🔑 Configuração da API Key

A chave da OpenAI é armazenada de forma segura como secret no Lovable Cloud e acessada apenas pela edge function no servidor. Nunca é exposta no código frontend.

---

## 📸 Screenshots

> Screenshots podem ser adicionados aqui após o deploy.

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

<p align="center">
  Feito com ❤️ por <strong>Matheus Florindo de Deus</strong> — TROPA CIENTÍFICA 🔬 Núcleo Tático
</p>
