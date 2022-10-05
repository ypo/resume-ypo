FROM node:16-alpine as builder
WORKDIR /app

COPY . .
RUN npm install 
RUN npm run build

RUN npm install --only=production
RUN npm prune --production
RUN npm cache clean --force

FROM node:16-alpine as final
USER node:node
WORKDIR /app

COPY --from=builder --chown=node:node /app/.nuxt /app/.nuxt
COPY --from=builder --chown=node:node /app/nuxt.config.js /app/nuxt.config.js
COPY --from=builder --chown=node:node /app/package.json /app/package.json
COPY --from=builder --chown=node:node /app/node_modules /app/node_modules
COPY --from=builder --chown=node:node /app/static /app/static
COPY --from=builder --chown=node:node /app/content /app/content

ENV NODE_ENV production
ENV NUXT_HOST=0.0.0.0
ENV PORT=80
CMD [ "npm", "start" ]
