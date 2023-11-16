#!/bin/bash

#Extraemos el archivo
if [ $# -lt 1 ] || [ $# -gt 1 ] #Comprobamos que se haya introducido al menos un parámetro
then
	echo "No has introducido ningún parámetro o has introducido más de uno";
else
	if [ -f $1 ] #Comprobamos que sea un fichero y exista
	then
		#Descomprimimos
		tar -xzvf $1
		#Metemos las líneas que contengan ALBORAN en un archivo
		archivo1="alboran1.txt"
		archivo2="alboran2.txt"
		archivo3="alboran3.txt"
		resultado=$(grep "ALBORAN" $archivo1 $archivo2 $archivo3 > toatoa.txt)
		#Comprimimos el archivo
		tar -czvf toatoa.tar.gz toatoa.txt
		
		#Borramos el .txt que ha hecho al descomprimir
		rm toatoa.txt
	fi
fi