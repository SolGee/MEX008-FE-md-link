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