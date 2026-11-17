# Preguntas de reflexión

_Escribe tus respuestas debajo de cada pregunta._

**Alumno:**

---

## Paso 1 · Explorando la API

| Pregunta | Mi respuesta |
|---|---|
| ¿Cuántos personajes trae cada página? | |
La APIi de Rick and Morty devuelve hasta 20 personajes por página. La última página puede contener menos personajes.. alrededor de 4.
| ¿Qué campo me dice si existe una página siguiente? | |
en este caso para saberlo vemos los campos next y y prev ya que::
next: indica la siguiente página.
prev: indica la página anterior.

| ¿Qué valor tiene ese campo en la última página? | |

en casos como esos tiene el valor null, lo que indica que no existe una página siguiente.

| ¿Qué código HTTP devuelve una búsqueda sin resultados? | |
La api devuelve un error HTTP 404.
| ¿Qué campos del personaje usa `CharacterCard`? | |
Los campos principales son id, name, image, status y species. El identificador también permite distinguir cada personaje dentro de la lista.
## Paso 2 · Petición HTTP

**¿Qué diferencia hay entre que `fetch` "falle" y que el servidor responda con un error? ¿Qué debo revisar en la respuesta?**

> Cuando fetch falla, normalmente significa que ocurrió un problema de red o que no se pudo completar la petición. En ese caso, la promesa se rechaza y puedo capturar el error mediante catch. En cambio, cuando el servidor responde con un código como 404 o 500, fetch puede completar la petición normalmente, aunque la respuesta HTTP indique un error.

## Paso 3 · Estado

**¿Por qué guardo los personajes en estado y no en una variable normal?**

> Porque los personajes son datos que cambian cuando realizo una petición, busco por nombre o cargo nuevas páginas.

## Paso 4 · useEffect

1. **¿Qué pasa si omito por completo el arreglo de dependencias?**

> El efecto se ejecutaría después de cada renderizado. Si dentro del efecto actualizo un estado que provoca otro renderizado, podría generar peticiones repetidas o incluso un ciclo de actualizaciones.

2. **¿Qué significa dejar el arreglo vacío?**

> Significa que el efecto se ejecuta al montar el componente y no vuelve a ejecutarse por cambios de estado o propiedades.

3. **¿Por qué la función que recibe `useEffect` no debe ser `async` directamente?**

> Porque React espera que la función del efecto devuelva una función de limpieza o que no devuelva nada una función async siempre devuelve una promesa, que no corresponde a lo que React espera

## Paso 5 · FlatList

1. **¿Para qué sirve la prop que extrae la llave de cada elemento?**

> La propiedad keyExtractor permite identificar de manera única cada personaje de la lista.

2. **¿Por qué usar `FlatList` en lugar de un `ScrollView` con `.map()`?**

> Porque FlatList está diseñada para mostrar listas grandes de manera eficiente a diferencia de un ScrollView que renderiza todos los elementos creados con .map()

## Paso 6 · Carga y error

**¿Por qué es mejor mostrar un mensaje con un botón "Reintentar" que dejar la pantalla vacía?**

> Porque una pantalla vacía no permite saber si la aplicación está cargando, si ocurrió un problema o si no existen resultados al mostrar un mensaje informa al usuario sobre lo sucedido, mientras que el botón «Reintentar» permite volver a solicitar los datos sin tener que cerrar o reiniciar la aplicación.

## Paso 8 · Paginación

**¿Qué problema aparece si la función de "cargar más" se dispara varias veces seguidas? ¿Cómo lo evité?**

> Si la función se ejecuta varias veces al mismo tiempo, podría solicitar repetidamente una misma página, duplicar personajes o realizar peticiones innecesarias para evitarlo utilicé loadingMoreRef, que permite bloquear inmediatamente una nueva petición mientras otra está en curso.

## Paso 9 · Pull to refresh

**¿Por qué usé un estado distinto (`refreshing`) y no el mismo de la carga inicial?**

> Porque son dos situaciones diferentes, durante la carga inicial todavía no tengo personajes para mostrar, por lo que utilizo loading para presentar un indicador de actividad, en cambio, durante el pull to refresh ya existe una lista y quiero mantenerla visible mientras solicito nuevamente la primera página.

Por eso utilizo refreshing, que permite mostrar el indicador de actualización propio de FlatList sin reemplazar toda la pantalla por un spinner.

## Paso 10 · Búsqueda

1. **¿Qué es el debounce y qué problema resuelve?**

> El debounce es una técnica que espera un tiempo determinado después de la última acción del usuario antes de ejecutar una operación enn mi aplicación utilizo un tiempo de 500 milisegundos para evitar enviar una petición a la API por cada letra escrita reduciendo las solicitudes innecesarias y mejora la eficiencia de la búsqueda.

2. **¿Para qué sirve la función de limpieza (cleanup) que se devuelve en un `useEffect`? Da un ejemplo de esta práctica.**

> La función de limpieza permite cancelar tareas anteriores cuando cambia una dependencia o se desmonta el componente; en mi buscador utilizo clearTimeout(timer) para cancelar el temporizador anterior y actualizar debouncedSearch solo cuando el usuario deja de escribir, mientras que la variable active evita aplicar respuestas de peticiones que ya no están vigentes.

3. **Si el usuario escribe rápido y las respuestas llegan en desorden, ¿qué podría salir mal?**

> Podría ocurrir que una petición antigua termine después de una petición nueva y sobrescriba los resultados correctos. en un ejemplo = si busco Rick y después Mortyy, la respuesta de Rick podría llegar al final y mostrar personajes que ya no corresponden al texto ingresado para evitarlo utilizo requestVersionRef y searchRef, que permiten comprobar si una respuesta todavía corresponde a la búsqueda vigente antes de actualizar los personajes.

## Cierre

**Menciona dos mejoras que le harías a la app si tuvieras una hora más:**

> 1. Detalles del personaje: Agregaría una pantalla para ver más información de cada personaje al tocar su tarjeta. 
> 2. Mejorar la búsqueda: Haría que las búsquedas anteriores se cancelen cuando el usuario escriba otro nombre, para evitar peticiones innecesarias.
