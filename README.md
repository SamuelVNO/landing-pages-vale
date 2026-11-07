# Landing pages de nicho · Vale do Paraíba

Três landing pages de conversão para negócios locais **fictícios** do Vale do Paraíba (SP), num único projeto
Next.js, mais uma home que funciona como vitrine. Cada página tem identidade visual própria (paleta, tipografia,
layout e animações), como se tivesse sido feita por um estúdio diferente.

| Rota | Negócio | Objetivo | Estilo |
| --- | --- | --- | --- |
| `/oficina` | Oficina Torque · Taubaté | Agendar revisão pelo WhatsApp | Industrial, escuro e laranja |
| `/clinica` | Clínica Sorriso Vale · São José dos Campos | Agendar avaliação | Claro e acolhedor, azul suave |
| `/advocacia` | Mendes Advocacia · Jacareí | Solicitar consulta inicial | Editorial de jornal, serifado |
| `/` | Vitrine | Apresentar os três projetos | Lista de estúdio |

## O que cada página tem

- Hero com promessa clara, prova e botão principal.
- Serviços, diferenciais, perguntas frequentes (acordeão) e endereço com mapa que só carrega no clique.
- Formulário curto (nome, telefone, interesse) que valida, grava o contato no Supabase e abre o WhatsApp com a
  mensagem pronta. Campo escondido contra robôs.
- Botão flutuante de WhatsApp, que some quando o formulário está na tela.
- SEO local: `title`, `description`, Open Graph, `canonical` e schema.org (`AutoRepair`, `Dentist`, `LegalService`),
  além de `sitemap.xml` e `robots.txt`.
- Elementos próprios de cada nicho:
  - **Oficina:** ordem de serviço que se preenche sozinha, painel com as luzes do carro que acendem e preenchem o
    formulário, "como funciona" com rolagem horizontal no desktop.
  - **Clínica:** "O que está te incomodando?", que explica o tratamento e preenche o formulário; foto em arco e
    sublinhados à mão. Segue o Código de Ética Odontológica: sem preço, sem "gratuita", sem antes e depois.
  - **Advocacia:** áreas de atuação escritas como artigos de lei e linha do tempo de prazos. Segue o Código de Ética
    da OAB e o Provimento 205/2021: sem depoimentos, sem preço, sem número de clientes, tom informativo.

Depoimentos, nomes, registros profissionais, CNPJ e números de WhatsApp são fictícios e marcados no código.

## Stack

Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · shadcn/ui (Base UI) · Motion ·
Magic UI · Lenis · Rough Notation · react-hook-form · Supabase · Vercel.

## Desempenho

Lighthouse no celular, em produção na Vercel (mediana de 3 rodadas):

| Rota | Performance | Acessibilidade | Boas Práticas | SEO |
| --- | --- | --- | --- | --- |
| `/` | 99 | 100 | 100 | 100 |
| `/oficina` | 95 | 100 | 100 | 100 |
| `/clinica` | 99 | 100 | 100 | 100 |
| `/advocacia` | 96 | 100 | 100 | 100 |

No ar: https://landing-pages-vale.vercel.app As animações usam só `transform` e `opacity`, respeitam "reduzir movimento" e
o Motion carrega depois da primeira pintura.

## Rodar no local

```bash
npm install
cp .env.example .env.local   # preencha as variáveis do Supabase
npm run dev
```

Variáveis (veja `.env.example`):

- `NEXT_PUBLIC_SITE_URL`: URL pública, usada em canonical, Open Graph e sitemap.
- `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY`: projeto do Supabase. A chave só é usada no servidor (server action).

Banco: rode `supabase/migrations/0001_landing_leads.sql` no SQL Editor do Supabase. A tabela `landing_leads`
guarda os contatos com a coluna `origem` (`oficina`, `clinica`, `advocacia`) e, por RLS, só aceita inserção pela
chave pública; a leitura é feita pelo painel do Supabase.

## Créditos das imagens

Fotos do [Unsplash](https://unsplash.com), sob a [Unsplash License](https://unsplash.com/license).

| Arquivo | Fotógrafo | Foto |
| --- | --- | --- |
| `public/img/oficina/hero.jpg` | Alex Gorin | https://unsplash.com/photos/EYRGIm5LE4E |
| `public/img/oficina/oficina.jpg` | Kato Blackmore | https://unsplash.com/photos/KhF58h0hTbc |
| `public/img/oficina/mecanico.jpg` | Jimmy Nilsson Masth | https://unsplash.com/photos/jL9zfzTVSwY |
| `public/img/oficina/motor-br.jpg` | Stefano Zanin | https://unsplash.com/photos/4Pt739lme7E |
| `public/img/clinica/hero.jpg` e `og.jpg` | Harold Hisona | https://unsplash.com/photos/Bg81yWKZlMg |
| `public/img/clinica/clareamento.jpg` | Sum Sum | https://unsplash.com/photos/Vx71zsOqtSU |
| `public/img/clinica/consultorio.jpg` | Atikah Akhtar | https://unsplash.com/photos/XJptUS8nbhs |
| `public/img/clinica/recepcao.jpg` | Amy Vosters | https://unsplash.com/photos/pxOQ-P97sA8 |
| `public/img/clinica/estrutura.jpg` | Benyamin Bohlouli | https://unsplash.com/photos/e7MJLM5VGjY |
| `public/img/advocacia/biblioteca-hero.jpg` e `og.jpg` | Annie Spratt | https://unsplash.com/photos/GWCvnsMtiBg |
| `public/img/advocacia/biblioteca-escritorio.jpg` | Giammarco Boscaro | https://unsplash.com/photos/zeH-ljawHtg |

As fotos da advocacia foram convertidas para preto e branco. As prévias em `public/img/home/` são capturas de tela
das próprias páginas.
