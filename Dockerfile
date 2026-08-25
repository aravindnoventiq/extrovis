# syntax=docker/dockerfile:1

# —— Client build ——
FROM node:22-bookworm-slim AS client-build
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# —— Server runtime ——
FROM node:22-bookworm-slim AS server
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

COPY server/package.json server/package-lock.json ./server/
WORKDIR /app/server
RUN npm ci

COPY server/ ./
RUN npx prisma generate

COPY --from=client-build /app/client/out /app/client/out

COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh \
  && mkdir -p /app/server/uploads/cvs /app/server/config \
  && if [ ! -f /app/server/config/config.json ]; then \
       cp /app/server/config/config.example.json /app/server/config/config.json; \
     fi

ENV NODE_ENV=production
ENV APP_HOST=0.0.0.0
ENV APP_PORT=4000

EXPOSE 4000
ENTRYPOINT ["/entrypoint.sh"]
