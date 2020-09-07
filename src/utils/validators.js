const validate = (value) => {
  if (value.length <= 0) {
    return 'Campo obligatorio';
  } else if (value.length < 10) {
    return 'Debe tener minimo 10 caractes';
  } else if (value.length > 40) {
    return 'Debe tener maximo 40 caractes';
  } else if (!/^[a-zA-Z $]+$/.test(value)) {
    return 'Debe contener solo letras';
  } else if (/\b[a-zA-Z]{3}\b/.test(value)) {
    return 'Debe tener palabras con mas de 3 letras';
  } else {
    return '';
  }
};
export { validate };
