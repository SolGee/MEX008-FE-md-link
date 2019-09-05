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

## 