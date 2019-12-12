@echo off
"C:\Bitnami\wampstack-7.3.11-0/mysql\bin\mysql.exe" --defaults-file="C:\Bitnami\wampstack-7.3.11-0/mysql\my.ini" -u root -e "DELETE FROM mysql.user WHERE User='';"
"C:\Bitnami\wampstack-7.3.11-0/mysql\bin\mysql.exe" --defaults-file="C:\Bitnami\wampstack-7.3.11-0/mysql\my.ini" -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '%1';"
