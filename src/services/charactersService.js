import { API_BASE_URL } from '../config/constants';

// ✍️ LO PROGRAMAS TÚ (Paso 2)
//
// Contrato que la pantalla espera de esta función:
//
//   getCharacters({ page, name })  →  Promise<{ results, hasNextPage }>
//
//   - page : número de página (por defecto 1)
//   - name : texto a buscar (por defecto vacío = sin filtro)
//   - results     : arreglo de personajes
//   - hasNextPage : true si existe una página siguiente
//
// Lee las reglas completas en la GUIA_ALUMNO.md, Paso 2.

export async function getCharacters({ page = 1, name = '' } = {}) {
  // TODO Paso 2: implementa la petición HTTP y devuelve el objeto del contrato.
   const search = name.trim();


const url = `${API_BASE_URL}/character?page=${page}${search ? `&name=${encodeURIComponent(search)}` : ''}`;

  const response = await fetch(url);

  if (response.status === 404) {
  return {
    results: [],
    hasNextPage: false
  };
}

if (!response.ok) {
  throw new Error(`Error HTTP: ${response.status}`);
}
  const data = await response.json();

  return {

    results: data.results,
    hasNextPage: data.info.next !== null
  };
}
