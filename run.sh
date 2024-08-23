#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Init a new Node project
npm init -y

# Install Express
npm install express