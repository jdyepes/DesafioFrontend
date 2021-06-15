// ruta para los servicios web heroku
export const AppUrlBase = 
{
    URL: 'http://hp-api.herokuapp.com/api/characters'
};

// Endpoint para cada opcion
export const ServicePath =
{
    HOUSE: `${AppUrlBase.URL}/house/`, // nombre de la casa: /house/{{nombreCasa}}
    STUDENT: `${AppUrlBase.URL}/students`, // Lista de estudiantes
    STAFF: `${AppUrlBase.URL}/staff` // Lista de profesores
}