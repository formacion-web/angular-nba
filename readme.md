# Angular NBA

![](https://imgur.com/lsvhmxr.png)

## Objetivos

Con este ejercicio aprenderás a: 

- Crear una aplicación estática con Angular CLI.
- Construir una aplicación Angular con un componente.
- Construir una aplicación Angular usando iteradores anidados.

## Requisitos de entrega

Pasar la url del ejercicio por slack.

## Introducción

Crea un tablero con los últimos ganadores de la NBA. 

## Instrucciones
Crea una aplicación angular con el nombre 'angular-nba' para mostrar un tablero con los últimos ganadores de la NBA. En este caso se necesita crear un componente que contendrá un array de campeonatos con los siguientes campos:

- año (campo `year`) del campeonato.
- Nombre del equipo campeón (`champion`).
- Una url (`champion-url`) que muestre la información del equipo.
- Una lista con los mejores jugadores del equipo campeón, llamada:  `best-players`

Toda la información se encuentra en [NBA Champions](https://en.wikipedia.org/wiki/List_of_NBA_champions) de wikipedia. En la aplicación se deben mostrar al menos 3. La aplicación debería parecerse a esto:

![](https://imgur.com/upGDj19.png)

<!-- :::info -->
**Nota** 
Se requiere iterar sobre dos colecciones diferentes para mostrar toda la información: `Championships` y `best-players` de cada equipo.
<!-- ::: -->
