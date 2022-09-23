FROM node:16-alpine as builder
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app/.nuxt/dist /app/.nuxt/
COPY --from=builder /app/nuxt.config.js /app/
COPY --from=builder /app/static /app/

COPY --from=builder /app  .
ENV NUXT_HOST=0.0.0.0
ENV PORT=80
CMD [ "npm", "start" ]
