# Requerimientos del Proyecto Final - ReactJS

## 1. Arquitectura y Estructura de Archivos

- [x] **Modularización por Carpetas:** Cada componente debe residir en su propia carpeta.
- [ ] **Encapsulamiento de Estilos:** Cada carpeta de componente debe contener:
    - [x] Archivo de lógica y maquetación: `*.jsx`
    - [ ] Archivo de estilos locales: `*.module.css`

## 2. Árbol de Componentes

El proyecto debe contar, como mínimo, con la siguiente jerarquía:

- [x] **Layout:** Componente de envoltura que utiliza `{children}` para definir la estructura general.
- [x] **Header:** Cabecera de la aplicación.
- [x] **Nav:** Barra de navegación.
- [x] **ItemListContainer:** Contenedor encargado de la lógica de obtención de datos.
- [x] **ItemList:** Componente encargado de iterar sobre la lista de productos/elementos.
- [x] **Item:** Presentación individual de cada elemento.
- [x] **Footer:** Pie de página.

## 3. Manejo de Datos y Props

- [x] **Renderizado Dinámico:** Uso obligatorio del método `.map()` para transformar arreglos de datos en elementos de interfaz.
- [ ] **Paso de Información:** Implementar diferentes estrategias de pasaje de _props_:
    - [ ] _Spread operator_ (`{...objeto}`)
    - [x] Pasaje de objeto completo (`objeto={objeto}`)
    - [ ] Pasaje explícito de propiedades (`prop={valor}`)

## 4. Estado y Ciclo de Vida (Hooks)

- [ ] **useState:** Gestión de estados locales (datos, flags, contadores).
- [ ] **useEffect:** Manejo de efectos secundarios, específicamente para la fase de montaje y peticiones asincrónicas.
- [ ] **Eventos:** Implementación de manejadores de eventos (ej: `onClick`) integrados con la actualización del estado.

## 5. Consumo de Datos (Peticiones Asincrónicas)

- [ ] **Estrategia de Fetching:**
      [x] - Uso de la Fetch API con la cadena de promesas: `.then()`, `.then()`, `.catch()`, `.finally()`.
      [ ] - Las peticiones deben realizarse dentro de un `useEffect`.
- [ ] **Fuentes de Datos:**
    - [x] Archivo local `.json` ubicado en la carpeta `/public`.
    - [x] Consumo de una API externa.
- **Gestión de Estados de Carga:**
    - [ ] Almacenamiento de datos en el estado.
    - [x] Indicador de carga (_loading state_).
    - [x] Manejo y visualización de errores en caso de fallo de la petición.
