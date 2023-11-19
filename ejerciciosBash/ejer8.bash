#!/bin/bash

# Descomprimir el archivo que se ha pasado
archivoDescomps=$(tar xvzf $1)
		
# Busco los nombres de los de chiquitistan buscando por la segunda columna
grep "chiquitistan" $archivoDescomps | cut -d " " -f1;
