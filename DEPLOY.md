# Deploy / recover from 502 on the server
#
# nginx/openresty 502 = Node is down or wrong APP_PORT.
#
# On the host (example path /opt/apps/extrovis):
#
#   cd /opt/apps/extrovis
#   git pull origin main
#
#   # Restore DB config (gitignored)
#   cp server/config/config.example.json server/config/config.json
#   nano server/config/config.json   # set production MySQL user/pass/host
#
#   cd client && npm ci && npm run build
#   cd ../server && npm ci && npx prisma generate
#
#   # First time only — import dump if DB empty:
#   # mysql -u root -p < ../extrovis.sql
#   # npm run seed:production
#
#   # Restart the app (pick what you use):
#   # pm2 restart extrovis
#   # systemctl restart extrovis
#   # Or: NODE_ENV=production APP_PORT=<nginx-upstream-port> npm run start:production
#
# Confirm locally on the server:
#   curl -s http://127.0.0.1:$APP_PORT/api/health
