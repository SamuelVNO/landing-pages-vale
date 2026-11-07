-- Leads das três landing pages, separados pela coluna origem.
create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  origem text not null check (origem in ('oficina', 'clinica', 'advocacia')),
  nome text not null check (char_length(nome) between 2 and 80),
  telefone text not null check (telefone ~ '^[0-9]{10,11}$'),
  interesse text not null check (char_length(interesse) between 1 and 120)
);

create index if not exists landing_leads_origem_created_at_idx on public.landing_leads (origem, created_at desc);

alter table public.landing_leads enable row level security;

-- O site só insere. Ninguém lê pela chave pública; a leitura é pelo painel do Supabase.
create policy "site insere leads"
  on public.landing_leads for insert
  to anon
  with check (true);
