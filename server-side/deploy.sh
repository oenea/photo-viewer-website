#!/bin/sh
sudo apt update && sudo apt upgrade -y
sudo apt install php php-mongodb php-gd -y
sudo apt install composer unzip
sudo apt install mongodb-server
sudo mkdir -p /var/www/prod/
sudo mkdir -p /var/www/dev/
sudo ln -s /var/www/prod /var/www/dev
if [ -e /etc/apache2/ports.conf ]; then
	sudo mv /etc/apache2/ports.conf /etc/apache2/ports.conf.old
fi
sudo mv ports.conf /etc/apache2/

if [ -e /etc/apache2/sites-available/000-default.conf ]; then
	sudo mv /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf.old
fi 
sudo mv 000-default.conf /etc/apache2/sites-available/

if [ -e /etc/apache2/sites-available/010-dev.conf ]; then
	sudo mv /etc/apache2/sites-available/010-dev.conf /etc/apache2/sites-available/010-dev.conf.old
fi 
sudo mv 010-dev.conf /etc/apache2/sites-available/

sudo ln -s /etc/apache2/sites-available/010-dev.conf /etc/apache2/sites-enabled/
sudo ln -s /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-enabled/

sudo mv src /var/www/dev/
sudo ln -s /var/www/dev/ /var/www/prod/

