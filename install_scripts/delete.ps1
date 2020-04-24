
if ( -not ( Test-Path -Path '../build' -PathType Container )) 
{ 
    "Directory ../build does not exist, creating it..."
    mkdir ../build  
    cd ../build
}
else {
    cd ../build
}

if  (-not (Test-Path -Path db2020team14 -PathType Container)) {
    "Directory db2020team14 does not exist, creating it..."
    mkdir db2020team14
}
else { 
    cd db2020team14
    vagrant destroy --force db2020team14
    vagrant box remove db2020team14
    cd ../ 
}

if ( -not (Test-Path -Path ws2020team14 -PathType Container)) {
    "Directory ws2020team14 does not exist"
    mkdir ws2020team14
}
else {
    cd ws2020team14
    vagrant destroy --force ws2020team14
    vagrant box remove ws2020team14
    cd ../
}

if ( Test-Path ubuntu-db-18044-server-virtualbox-*.box )
{ 
    "Removing db vagrant box..."
    del ubuntu-db-18044-server-virtualbox-*.box
}
if ( Test-Path ubuntu-ws-18044-server-virtualbox-*.box )
{
    "Removing ws vagrant box..."
    del ubuntu-ws-18044-server-virtualbox-*.box
}

cd ../install_scripts
