#!/bin/bash

# starts the frontend server so it's less painful
# Note: Not to be used in production

# root directory where testiny-web is located
SERVER_ROOT="$HOME/pro/real/testiny-web"
cd $SERVER_ROOT
yarn start
