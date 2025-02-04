# ./email-api/Dockerfile
FROM node:22.13.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm@9.14.4+sha512.c8180b3fbe4e4bca02c94234717896b5529740a6cbadf19fa78254270403ea2f27d4e1d46a08a0f56c89b63dc8ebfd3ee53326da720273794e6200fcf0d184ab
RUN pnpm install
COPY . .
EXPOSE 3001
RUN pnpm build
CMD ["pnpm", "start"]