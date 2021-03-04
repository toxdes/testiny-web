#!/bin/bash

# starts the backend server so it's less painful
# Note: Not to be used in production

# root directory where testiny-backend is located
SERVER_ROOT="../testiny-backend"
cd $SERVER_ROOT
yarn dev
