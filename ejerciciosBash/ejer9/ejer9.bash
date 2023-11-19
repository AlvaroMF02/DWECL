#!/bin/bash

# Variable con el archivo que paso
archivo="$1"

# Busco on y two en el archivo en minuscula o mayuscula
grep -i -e "one" -e "two" "$archivo"