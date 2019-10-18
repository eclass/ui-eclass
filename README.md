# @eclass/ui-eclass

[![npm](https://img.shields.io/npm/v/@eclass/ui-eclass.svg)](https://www.npmjs.com/package/@eclass/ui-eclass)
[![dependencies](https://img.shields.io/david/eclass/ui-eclass.svg)](https://david-dm.org/eclass/ui-eclass)
[![devDependency Status](https://img.shields.io/david/dev/eclass/ui-eclass.svg)](https://david-dm.org/eclass/ui-eclass#info=devDependencies)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) 
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://github.com/storybookjs/storybook)



### `ui-eclass` es una librería de componentes que se ajusta a los estilos de diseño de Eclass.

Creada con ReactJs y Storybook más que una librería de componentes es un [sistema de diseño](https://www.learnstorybook.com/design-systems-for-developers/) creado en un entorno aislado de su aplicación que busca estandarizar los componentes utilizados en distintas plataformas de eClass.

## Instalación 

- Instalar con `npm` o `yarn`:

`$ npm i ui-eclass`

`$ yarn add ui-eclass`


## Uso

Ejemplos: 

```javascript
import React from 'react';
import V8Button from 'ui-eclass/V8Button';

const App = () => (
    <V8Button onClick={() => console.log('thanks for clicking :)')}>
      Click me!
    </V8Button>
);
```


## Desarrollo de componentes 

instalar dependencias 
`npm i `
`yarn i`

iniciar React Storybook

`yarn develop`

Abrir http://localhost:9009

## Test

`yarn test`

## Estructura de Componentes

```
└──  ui-eclass
    ├── storybook
    └── src
    │   ├── components
    │   │   ├── Button /#raíz
    │   │   │  ├── Button.js /#lógica
    │   │   │  ├── Button.stories.js /#historias storybook
    │   │   ├── MyNewComponent
    │   │   │  ├── Button.js
    │   │   │  ├── Button.stories.js
```

## PropTypes 

Para reflejar los proptypes en la documentación deben definirse en el archivo que contenga la lógica del nuevo componente

### Uso de Ramas

- `master`: código en el ambiente de producción. Todo código que esté acá está publicado y funcional. Además de validado por los `test`. 
- `dev`: Esta rama es una de preproducción, en donde el código antes de ir a `master` debe ser publicado y aprobado. 
-  Es muy importante importante es que cada `feat`/`fix`/`refactor` del sistema que se vaya a crear/modificar. Debe estar contenido por una rama en donde se identifique al usuario y el feature. Ejemplo: `feat/login`.

### Commits


Para versionar nuestro código debemos respetar el estándar de 
Nuestro código se versiona con el estandar de `Semantic Commit Messages` al hacer un `git commit` se ejecutarán las siguientes tareas previas al `commit` 

```sh
❯ Running tasks for src/**/*.js
   ✔ eslint --fix
   ⠼ prettier-standard
     git add
 ↓ Running tasks for src/**/*.test.js [skipped]
   → No staged files match src/**/*.test.js
   ⠧ eslint --fix
   ⠧ prettier-standard
   ⠧ git add
```
Se corre el `eslint` a los archivos y se pasan por `prettier`. Luego si corren estas tareas se pasa al `commit`.

#### Estándar de commit semánticos

```bash
type(scope?): subject
body?
footer?
```
El encabezado del commit no debe tener más de 72 caracteres.
- `type` es **obligatorio**, más abajo podrás encontrar el estándar de sus posibles opciones y usos.
- `scope` es ___opcional___, pero la forma correcta de escribirlo es siempre en `Inglés` usando `lowerCamelCase`. Además debe hacer referencia al cambio realizado.
- `subject` es **obligatorio**, es el encabezado del commit, debe ir en `Español` indicando en resúmen el porqué del commit. 

#### Listado de `type's`
| type  | descripción |
| ------------- | ------------- |
| feat  | Nueva característica  |
| fix  | Solución a errores  |
| docs  | Sólo cambios en documentacion  |
| style  | Cambios que no afectan el código, por ejemplo: espacios en blanco, formato, puntuaciones, comas, etc. |
| refactor  | Un cambio de código que no corrije un error ni agrega una nueva característica  |
| perf  | Un cambio de código que mejora el `performance` de la aplicación  |
| test  | Agrega test nuevos o corrije alguno existente.  |
| build  | Cambios que afectan al `deploy` de la aplicación o dependencias externas   |
| ci  | Cambios en la configuración de la integración continua. 
| chore  | Otros cambios que no modifiquen el `src` o archivos de `test`  |
| revert  | Revierte cambios a un estado anterior en los commit.  |

##### Ejemplo
- Acabamos de añadir una acción que nos trae los paises ordenados por su nombre de forma ascendente a-Z.
```
feat(actions): Agregamos acción para rescatar los paises ordenados por nombre ascendente
^--^  ^------------^
|     |
|     └─> Resúmen del cambio en tiempo presente
|
└───────> Types: chore, docs, feat, fix, refactor, style, or test.
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
