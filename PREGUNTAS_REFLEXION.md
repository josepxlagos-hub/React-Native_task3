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

## Paso 2 · Petición HTTP

**¿Qué diferencia hay entre que `fetch` "falle" y que el servidor responda con un error? ¿Qué debo revisar en la respuesta?**

> 

## Paso 3 · Estado

**¿Por qué guardo los personajes en estado y no en una variable normal?**

> 

## Paso 4 · useEffect

1. **¿Qué pasa si omito por completo el arreglo de dependencias?**

> 

2. **¿Qué significa dejar el arreglo vacío?**

> 

3. **¿Por qué la función que recibe `useEffect` no debe ser `async` directamente?**

> 

## Paso 5 · FlatList

1. **¿Para qué sirve la prop que extrae la llave de cada elemento?**

> 

2. **¿Por qué usar `FlatList` en lugar de un `ScrollView` con `.map()`?**

> 

## Paso 6 · Carga y error

**¿Por qué es mejor mostrar un mensaje con un botón "Reintentar" que dejar la pantalla vacía?**

> 

## Paso 8 · Paginación

**¿Qué problema aparece si la función de "cargar más" se dispara varias veces seguidas? ¿Cómo lo evité?**

> 

## Paso 9 · Pull to refresh

**¿Por qué usé un estado distinto (`refreshing`) y no el mismo de la carga inicial?**

> 

## Paso 10 · Búsqueda

1. **¿Qué es el debounce y qué problema resuelve?**

> 

2. **¿Para qué sirve la función de limpieza (cleanup) que se devuelve en un `useEffect`? Da un ejemplo de esta práctica.**

> 

3. **Si el usuario escribe rápido y las respuestas llegan en desorden, ¿qué podría salir mal?**

> 

## Cierre

**Menciona dos mejoras que le harías a la app si tuvieras una hora más:**

> 
