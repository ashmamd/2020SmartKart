#!/usr/local/bin/bash

cd ../build
vagrant box add ./ubuntu-db-18044-server-virtualbox-*.box --name db2020team14
vagrant box list
mkdir db2020team14
cd db2020team14
vagrant init db2020team14
vagrant up

cd ../
vagrant box add ./ubuntu-ws-18044-server-virtualbox-*.box --name ws2020team14
vagrant box list
mkdir ws2020team14
cd ws2020team14
vagrant init ws2020team14
vagrant up

./startingvagrant.sh