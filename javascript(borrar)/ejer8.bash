#!/bin/bash

#Descomprimimos el archivo
if [ $# -lt 1 ] || [ $# -gt 1 ] #Comprobamos que se haya introducido al menos un parámetro
then
	echo "No has introducido ningún parámetro o has introducido más de uno";
else
	if [ -f $1 ] #Comprobamos que sea un fichero y exista
	then
		#Descomprimimos y sacamos el nombre del archivo
		nombre=$(tar xvzf $1)
		
		#Sacamos los nombres de la gente de chiquitistan
		grep "chiquitistan" $nombre | cut -d " " -f1;
		
		#Borramos el .txt que ha hecho al descomprimir
		rm personahes.txt
	fi
fi
