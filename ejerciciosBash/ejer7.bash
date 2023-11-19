#!/bin/bash

# Archivo comprimido 
comprimido="comprimido.tar"
# Descomprimir
tar -xf "$comprimido"

# Busco en los tres archivos que estaban en el tar la palabra Alboran
grep "Alboran" texto1 texto2 texto3 > txtConAlboran

# Creo el gz y le comprimo txtConAlboran
toatoa="toatoa.gz"
gzip -c txtConAlboran > "$toatoa"
