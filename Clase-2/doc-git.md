

## Para inicializar un repositorio en GIT:

git init

## Para dar seguimiento a un archivo con GIT

Cuando incializamos un repo los archivos inicialmente estan en estado "Untracked" / Sin seguimiento

git add index.html (Esto le da seguimiento al archivo index.html)
o
git add . (esto le da seguimiento a todos los archivos de tu directorio root (raiz))

## Para exceptuar o NO dar seguimiento archivos:

O pueden ingnorar archivos creando en la raiz el archivo .gitignore


## Versionar

Para versionar el codigo debe estar añadido, el codigo que se versiona es el que esta añadido hasta el momento

git commit -m "Primera version en GIT" (Crea una version en tu repositorio)


## Para cambiar el nombre del branch principal (opcional)
git branch -M main

## Configuramos una direccion remota para nuestro repositorio local
git remote add origin https://github.com/Matu-Dev-JS/2026_UTN_PWI_LUN_MIE_SEP_TM_TEST_REPOSITORIO.git

## Enviar el codigo a la direccion remota
git push -u origin main


## Como subir cambios a github?

git add .
git commit -m 'descripcion'
git push



## Para crear una rama usamos

git checkout -b <nombre-rama>

## para movernos entre ramas

git checkout <nombre-rama>

## crear la ramificacion en github

git push -u origin <nombre-rama>

## Si ya existe

git push


## Para combinar ramas usamos git merge