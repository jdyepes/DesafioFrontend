//Formato para fechas
export const DATE_FORMATS =
{
    DATE: 'DD-MM-YYYY',
    TIME: 'HH:mm',
    DATETIME: 'DD-MM-YYYYTHH:mm:ss',
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    parse: {
        dateInput: "LL"
      },
      display: {
        dateInput: "DD/MMM/YYYY",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "MM YYYY"
      }
};

// Titulo de la pagina
export const Pages =
{
   TITLE: 'SISTEMA DESAFIO FRONTEND',
   FOOTER: 'Copyright © ' + new Date().getFullYear() + ' JDYEPES. Todos los derechos reservados.'
}
