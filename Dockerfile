# Docker image that runs the Rarible Protocol MCP server.
# Updates:
# - Switch to Debian slim (glibc) so Bun works.
# - Enable Yarn via Corepack and run `yarn build`.
# - Install Bun (required by the existing build script).
# - Expose port 3030; start server with env-provided API key.
# </ai_context>

FROM node:20-bullseye-slim

# ---- App setup -------------------------------------------------------------
WORKDIR /app

# Copy manifest & install dependencies first (better layer caching)
COPY package.json ./
COPY yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copy the rest of the source and build
COPY . .
RUN yarn build

# ---- Network ---------------------------------------------------------------
# The MCP server listens on 3030 inside the container
EXPOSE 3030

# ---- Entrypoint ------------------------------------------------------------
# Bind to 0.0.0.0 so traffic from outside the container is accepted
ENTRYPOINT ["sh", "-c", "echo 'Starting MCP server...' && npx mcp start --server-url ${SERVER_URL} --transport sse --port 3030 --log-level debug"]