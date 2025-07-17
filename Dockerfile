# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS base

# Instala pnpm
RUN npm install -g pnpm

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install --frozen-lockfile

# Copia o resto dos arquivos da aplicação
COPY . .

# Build da aplicação Next.js
RUN pnpm run build

# Cria um usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Cria diretório .next e ajusta permissões
RUN mkdir .next
RUN chown -R nextjs:nodejs .next
RUN chown -R nextjs:nodejs /app

# Muda para o usuário não-root
USER nextjs

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Define as variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
