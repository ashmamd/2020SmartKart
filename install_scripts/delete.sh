cd ../build

cd db2020team14
vagrant global-status
vagrant destroy default

cd ../ws2020team14
vagrant destroy default

cd
cd ~/2020-team14w/build
rm ubuntu-db-18044-server-virtualbox-*.box
rm ubuntu-ws-18044-server-virtualbox-*.box