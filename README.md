### Aplicación de películas con Ionic
- Uso de componentes reutilizables
- Pantalla de películas con ion-slides
- Pantalla detalle de película
- Almacenamiento de favoritos por medio del IonicStorageModule y NativeStorage
- Uso de Pipes
- Uso dark theme (solo en web)
- Manejo del API The Movie Database

### Uso
Para hacerlo funcionar hay que ir a la carpeta src/app/environments/ y renombrar el archivo **environment.dist.ts** por **environment.ts** y crear una copia del mismo llamado **environment.prod.ts**.
Dentro de los dos archivos hay que colocar tu API KEY de The Movie Database en la línea:  `apiKeyTMDB: 'YOUR_API_KEY'`

### The Movie Database API
- Documentación: https://developers.themoviedb.org/3/getting-started/introduction

### Imágenes
| <img src="https://github.com/jxlanda/peliculas_ionic/blob/master/GitHub/inicio.PNG?raw=true?raw=true" alt="drawing" width="200"/> | <img src="https://github.com/jxlanda/peliculas_ionic/blob/master/GitHub/detalles.PNG?raw=true?raw=true" alt="drawing" width="200"/> | <img src="https://github.com/jxlanda/peliculas_ionic/blob/master/GitHub/busqueda.PNG?raw=true?raw=true" alt="drawing" width="200"/> | <img src="https://github.com/jxlanda/peliculas_ionic/blob/master/GitHub/favoritos.PNG?raw=true?raw=true?raw=true" alt="drawing" width="200"/> |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|

| <img src="https://github.com/jxlanda/peliculas_ionic/blob/master/GitHub/inicio_dark.PNG?raw=true?raw=true" alt="drawing" width="200"/> |
|----------------------------------------------------------------------------------------------------------------------------------------|

