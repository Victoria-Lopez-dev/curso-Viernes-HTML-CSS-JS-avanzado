# Algunos comandos de Git


git --version | git -v -> la version instalada de git 

## configuracion por unica vez del usuario

git config --global user.name "nombre usuario"
git config --global user.email "email.."
## cambio de directorio

cd "direcion de la carpeta a la que ingresar"

## para primera carga de un repositorio local a remoto

git init
git add . | git add nombre.archivo
git commit -m "mensaje.."
git branch -M main (opcional)
git remote add origin ...
git push -u origin main (master si no implementamos el comando branch -M main)


## para clonar/copiar un repositorio remoto

 git clone direccion-del-repositorio-remoto

## para actualizar un repositorio clonado

### Para la proxima clase: botonera de visual studio code 