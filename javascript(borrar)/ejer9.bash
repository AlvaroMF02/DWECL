#!/bin/bash

if [ $# -lt 1 ] || [ $# -gt 1 ] #Comprobamos que se haya introducido al menos un parámetro
then
	echo "No has introducido ningún parámetro o has introducido más de uno";
else
	if [ -f $1 ] #Comprobamos que sea un fichero y exista
	then
		grep "[oO][nN][eE]" $1 #Así da igual que sea mayúscula o minúscula o que se intercalen
		grep "[tT][wW][oO]" $1
	fi
fi