//DEEP COPY


    //Funciones para comprobar que el tipo de dato

function isObject(subject){
    return typeof subject == "object"; // recordar que los arrays tambien son de tipo objeto en js
}

function isArray(subject) {
    return Array.isArray(subject);
}

    // Empieza la funcion de copiado profundo

function deepCopy(subject) {
    let copySubject; // Inicializa la constante que enviara al final

        //comprueba que la variable enviada sea un array o un objeto
    const subjectIsObject = isObject(subject); // si es array u objeto va a dar true
    const subjectIsArray = isArray(subject); // sólo si es array dara un true

    // Es necesario que este ciclo if compruebe primero que es un array, ya que como se vio anteriormente los array también son objetos
    if (subjectIsArray) {
        copySubject = []; // transforma la variable inicializada en un array
        console.log("Es array")
    } else if (subjectIsObject) {
        copySubject = {}; // transforma la variable inicializada en un objeto
        console.log("Es objeto");
    } else {
        return subject; // en caso de que no sea una variable tipo objeto termina la funcion enviando solo el dato a copia
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]); // Comprueba que la Key sea un variable de tipo objeto
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]); // En caso que lo sea llamara la funcion deepCopy de nuevo
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]); // Se envia el valor de la Key que no es de tipo objeto (Number, String o boolean) al array copiado
            } else {
                copySubject[key] = subject[key]; // Se evia copia de la key al objeto copiado
            }
        }
    }
    return copySubject;
}