#!/bin/bash

BUILD_DIR=$1
ENV_FILE_PATH=$2

get_env_value() {
    local VAR_NAME="$1"
    grep "^${VAR_NAME}=" .env | cut -d '=' -f 2-
}

while IFS= read -r line || [ -n "$line" ]; do
    if [[ $line != \#* ]]; then
        VAR_NAME=$(echo "$line" | cut -d '=' -f 1)
        VAR_VALUE=$(get_env_value "$VAR_NAME")
        if [ -n "${!VAR_NAME}" ]; then
            VAR_VALUE="${!VAR_NAME}"
        fi
        for file in $BUILD_DIR/*.js; do
            sed -i "s|__${VAR_NAME}__|${VAR_VALUE}|g" "$file"
        done
    fi
done < "$ENV_FILE_PATH"

nginx -g "daemon off;"