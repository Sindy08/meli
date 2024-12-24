# Meli - Backend y Frontend

Este proyecto cumple con el test práctico de Frontend, implementando una serie de funcionalidades para interactuar con los datos de productos y mostrar la información de manera eficiente y responsive. 

## Requisitos previos

Antes de correr el proyecto, asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **Node.js** v22.12.0
- **npm** (Node Package Manager)

## Instalación

### 1. **Meli - Backend**

Para instalar y correr el backend, sigue estos pasos:

1. Clona el repositorio.
2. Abre la terminal en la carpeta del backend (`meli-backend`).
3. Instala las dependencias ejecutando:

   ```bash
   npm install
4. Inicia el servidor backend con:

   ```bash
   node server.js
   
Los endpoints del backend son los siguientes:

Búsqueda de productos:

    http://localhost:3001/api/items/{id_producto}

Detalle de producto:

    http://localhost:3001/api/items/{id_producto}

### 2. Meli - Frontend
Para instalar y correr el frontend, sigue estos pasos:

1. Clona el repositorio.
2. Abre la terminal en la carpeta del frontend (meli-frontend).
3. Instala las dependencias ejecutando:

    ```bash
    npm install

4. Inicia el servidor frontend con:
    ```bash
    npm run dev
    
5. El servidor de desarrollo estará disponible en:
    ```bash
    http://localhost:5173/

## Herramientas utilizadas

1. React v18.3.1
2. Vite v6.0.3
3. Node.js v22.12.0
4. Express v4.21.2

## Funcionalidades

### 1. Caja de búsqueda

1. Implementación de una caja de búsqueda que cumple con las especificaciones del mockup.
2. La vista es responsive.
3. Mejora: Se agregó un mensaje de bienvenida que se muestra cuando el usuario ingresa por primera vez.

### 2. Resultados de búsqueda

1. Cumple con la especificación del mockup y es responsive.
2. Se agregaron las siguientes mejoras:
    - Se envía solo el ID de la imagen del producto desde el backend. En el frontend, se genera una URL para obtener la imagen en su tamaño correcto.
    - Se incluye el vendedor (seller) del producto.
    - Se calcula el porcentaje de descuento.
    - Se modifica el texto de cuotas (instalments) según el response del backend.
    - Se guarda en el localStorage el valor del vendedor (seller) y las cuotas (instalments) para su uso posterior en la página de detalle del producto.
    - Paginación: Se implementó un sistema de paginación, consumiendo la API de acuerdo a las especificaciones.

    Nota: Las modificaciones relacionadas con el backend fueron implementadas directamente en el código backend.

### 3. Detalle del producto

1. Cumple con las especificaciones del mockup y es responsive.
2. Se agregaron las siguientes mejoras:
    - Se consume el localStorage para mostrar los valores de vendedor y cuotas en el frontend.
    - Según el formato JSON proporcionado, no se encontró el número de publicación, por lo que no se muestra en la interfaz.
    - Se realizó una validación en la descripción del producto para crear un nuevo párrafo con cada salto de línea (\n).
    - Aunque en el mockup el color del título y el texto es diferente, se mantuvo el color referenciado en las especificaciones.

### 4. Responsive

1. Se implementó un @media query con un máximo de 768px para dispositivos móviles.
2. Se ajustó el tamaño de la fuente y las imágenes para una correcta visualización en móviles.

### 5. Optimización SEO

Se tomaron en cuenta las siguientes especificaciones para asegurar la optimización SEO del proyecto:

1. Uso de SEO META in 1 CLICK para mejorar el SEO.
2. Validación del rendimiento con DevTools (Lighthouse y Performance).

### 5. Imágenes de ejemplo

#### 1. Caja de búsqueda

![Caja de búsqueda - Desktop](https://github.com/user-attachments/assets/6cd31b82-85a7-4fd0-aff8-5361978627a2)
![Caja de búsqueda - Mobile](https://github.com/user-attachments/assets/e73fcaf9-baa3-4c6d-aa37-9aa1b121ab03)

#### 2. Búsqueda de búsqueda

![image](https://github.com/user-attachments/assets/497e292b-f1b1-46e9-bd74-9f04437f8038)
![image](https://github.com/user-attachments/assets/b57d7d2f-b3a7-4d2d-b915-b92847c8db30)

![image](https://github.com/user-attachments/assets/89e65ed1-e43e-4a9b-8f99-6db8073ffa68)
![image](https://github.com/user-attachments/assets/3bae6591-c7c1-467e-b634-623cca27e6b7)


#### 3. Detalle del producto

![image](https://github.com/user-attachments/assets/c10edb63-64cc-43a7-8eea-68fc7eb47f6c)

![image](https://github.com/user-attachments/assets/258351e3-1294-4ef8-aa33-19c6c681f347)
![image](https://github.com/user-attachments/assets/8f36a575-e89a-4feb-8010-3ddb28e60ef7)

#### 4. Optimización SEO

![image](https://github.com/user-attachments/assets/75611343-1ab7-454f-a32d-2534ba385454)
![image](https://github.com/user-attachments/assets/41542a99-742e-4bfd-9bee-9e42d04138a9)
![image](https://github.com/user-attachments/assets/4fcf8931-2d2a-4e7e-8991-2edbf4f8686c)

