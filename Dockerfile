FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY next-env.d.ts ./next-env.d.ts
COPY tsconfig.json ./tsconfig.json

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD [ "yarn", "dev" ]

