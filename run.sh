docker run -d -p 8080:80 \
  -e MONGO_URL=$MONGO_URL \
  -e REDIS_HOST=$REDIS_HOST \
  -e MYSQL_HOST=$MYSQL_HOST \
  -e MYSQL_USER=$MYSQL_USER \
  -e MYSQL_PASSWORD=$MYSQL_PASSWORD \
  -e MYSQL_DB=$MYSQL_DB \
  -e MYSQL_SSL="$MYSQL_SSL" \
  -e NEW_RELIC_KEY=$NEW_RELIC_KEY \
  -e PORT=$PORT \
  -e ROCK_URL=$ROCK_URL \
  -e ROCK_TOKEN=$ROCK_TOKEN \
  heighliner
