# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Objetivo del proyecto

Desarrollar una libreria funcional que se capaz de retornar los links que se encuentran dentro de un archivo markdown y validar aquellos que aun funcionan o no desde la línea de comandos o como una API en un archivo JavaScript requiriendola como módulo. La estadísticas tambien forman parte de los resultados a obtener en este proyecto.

## Instalación

1. Tener instalado [nodejs](https://nodejs.org/en/)
2. Abrir la terminal en tu computadora.
3. Posicionarte en la carpeta del proyecto que quieras analizar.
4. Pegar el siguiente comando en terminal:

`npm install md-links-solg`

**Manera Global**

`npm install -g md-links-solg`

## ¿Cómo se usa?

*md-links-solg* puede ser ejecutado desde la terminal o partiendo de una archivo de JavaScript.

### Desde terminal

1. Tener instalado `md-links-solg`
2. Teclear en terminal `sol-md-links` + Enter
3. Para saber cuales links aun estan vigentes agrega la [flag](https://golang.org/pkg/flag/) `--validate`:
* `sol-md-links README.md --validate`

Esto retornara un listado de los links con su estatus 'OK' o 'FAIL', además de contener los enunciados con los links que ya no funcionan.

4. Para saber cuantos links son, agrega la [flag](https://golang.org/pkg/flag/) `--stats`:
* `sol-md-links README.md --stats`

Esto retornara el total de links, y cuantos de ellos son no se repiten.

5. Si deseas saber cuantos links estan "rotos" deberas incluir ambas banderas.

* `sol-md-links README.md --stats --validate` 

Esto retornara el total de links, cuantos de ellos son no se repiten y cuantos estan rotos.

### API

1. Tener instalado `md-links-solg`
2. Requerirla desde:
`const mdLinks: require(md-links-solg)
mdLinks('./README.md');`

* El resultado aparecera en la terminal

3. Para incluir las opciones ([flag](https://golang.org/pkg/flag/))

`const mdLinks: require(md-links-solg)
mdLinks('./README.md', {validate: true});`

## Plan de acción

#### GitHub 
- [x] Forkear y clonar repositorio de [Laboratoria](https://www.laboratoria.la/)
- [x] Instalar dependencias ([jest](https://jestjs.io/),[eslint](https://eslint.org/))
- [x] Revisar la documentación sugerida para resolver el proyecto.

#### NPM
- [x] Crear una cuenta en NPM.
- [x] Crear archivo package.json desde `npm init`
- [x] Vincular proyecto con NPM.
- [x] Versionar archivo package.json.
- [x] Subir archivos a NPM.

#### Elegir librería
- [x] (Markdown-it)[https://github.com/markdown-it/markdown-it]

#### Modulos
- [x] index.js -> Función maestra
- [x] stats.js -> Función de estadística de los links
- [x] validate.js -> Función para revisar la vigencia de los links
- [x] md.js -> Función que detecta si es un archivo .md
- [x] readMD.js -> Función que recorre un archivo .md
- [x] statsvalidate.js -> Función que añade los links que estan rotos a la estadística
- [x] filterFile.js -> Función que analiza y guarda los links que hay en un archivo .md

#### Test

*index.js*

- [x] Test que compruebe que si sea una función.
- [x] Test que ejecute la función (sin parámetros).
- [x] Test que consolee el resultado si recibe una ruta sin archivo MD.
- [x] Test que consolee el resultado en caso de que el archivo MD no contenga links.
- [] Test que ejecute la función con un solo parámetro (validate).
- [] Test que ejecute la función con un solo parámetro (stats).
- [] Test que ejecute la función con dos parametros (path y validate).

*readfile.js*

- [] Test que compruebe que es una función.
- [] Test que revise que lo que retorna es una string.

*md.js*

- [] Test que compruebe que si sea una función.
- [] Test que retorne true al recibir un archivo MD.
- [] Test que retorne false al recibir un archivo que sea TXT.

*filterFile.js*

- [] Test que compruebe que si sea una función.
- [] Test que revisa que pasa si recibe un archivo sin links.
- [] Test que revisa que pasa si recibe un archivo con puros links.
- [] Test que revisa que pasa si recibe un archivo con links y texto variado.

*validate.js*
- [] Test que compruebe que si sea una función.
- [] Test que pase un arreglo de links no rotos revisar su retorno de ok.
- [] Test que pase un arreglo de links rotos y no rotos, revisar que su retorno sea ok o fail.
- [] Test que pase un arreglo de links rotos revisar que su retorno sea fail.

*stats.js*
- [] Test que compruebe que si sea una función.
- [] Test que pase un arreglo de links no rotos revisar y que regrese el total de los links.
- [] Test que pase un arreglo de links rotos y no rotos que regrese el total de los links de c/u.
- [] Test que pase un arreglo de links rotos y que regrese el total de los links rotos.

 *statsvalidate.js*
 - [] Test que compruebe que si sea una función.
 - [] Test que comprueba el total de links rotos.

## Diagrama de flujo
![Diagrama de flujo](https://github.com/SolGee/MEX008-FE-md-link/blob/master/diagrama-flujo.jpeg)

## Autores

Solanyi Sandoval

