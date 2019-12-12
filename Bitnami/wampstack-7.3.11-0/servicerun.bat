@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist "C:\Bitnami\WAMPST~1.11-\hypersonic\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\server\hsql-sample-database\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\ingres\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\ingres\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\mysql\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\mysql\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\postgresql\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\postgresql\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\elasticsearch\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\elasticsearch\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\logstash\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\logstash\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\logstash-forwarder\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\logstash-forwarder\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\openoffice\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\openoffice\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\apache-tomcat\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\apache-tomcat\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\apache2\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\apache2\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\resin\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\resin\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\activemq\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\activemq\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\jboss\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\jboss\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\wildfly\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\wildfly\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\jetty\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\jetty\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\subversion\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\subversion\scripts\servicerun.bat" START)
rem RUBY_APPLICATION_START
if exist "C:\Bitnami\WAMPST~1.11-\lucene\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\lucene\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\mongodb\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\mongodb\scripts\servicerun.bat" START)
if exist "C:\Bitnami\WAMPST~1.11-\third_application\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\third_application\scripts\servicerun.bat" START)
goto end

:stop
echo "Stopping services ..."
if exist "C:\Bitnami\WAMPST~1.11-\third_application\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\third_application\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\lucene\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\lucene\scripts\servicerun.bat" STOP)
rem RUBY_APPLICATION_STOP
if exist "C:\Bitnami\WAMPST~1.11-\subversion\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\subversion\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\jetty\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\jetty\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\hypersonic\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\server\hsql-sample-database\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\jboss\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\jboss\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\wildfly\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\wildfly\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\resin\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\resin\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\activemq\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\activemq\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\openoffice\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\openoffice\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\apache2\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\apache2\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\apache-tomcat\scripts\servicerun.bat" (start "" /MIN /WAIT "C:\Bitnami\WAMPST~1.11-\apache-tomcat\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\logstash-forwarder\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\logstash-forwarder\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\logstash\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\logstash\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\elasticsearch\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\elasticsearch\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\ingres\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\ingres\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\mysql\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\mysql\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\mongodb\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\mongodb\scripts\servicerun.bat" STOP)
if exist "C:\Bitnami\WAMPST~1.11-\postgresql\scripts\servicerun.bat" (start "" /MIN "C:\Bitnami\WAMPST~1.11-\postgresql\scripts\servicerun.bat" STOP)

:end
