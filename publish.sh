#!/usr/bin/env bash

PURPLE='\033[0;35m'
NC='\033[0m'
GREEN='\033[0;32m'

printf "${PURPLE}Uploading ...${KUBECONFIG}${NC}\n"
az storage blob upload --connection-string "${STORAGE_ACCOUNT_CONNECTION_STRING}" -f session-management.js -c '$root' -n session-management.js --overwrite true
printf "${GREEN}Done${NC}\n"
