function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaRetangulo aceita somente numeros")
    }
    return l * a
}
function calcularAreaTriangulo(b, a){
    if(typeof b !== "number" || typeof a !== "number"){
        throw new Error("calcularAreaTriangulo aceita somente numeros")
    }
    return (b * a)/2
}
function calcularAreaCirculo(r){
    if(typeof r !== "number"){
        throw new Error("calcularAreaCirculo: Raio precisa ser do tipo number, numero")
    }
    const pi = Math.PI
    return pi * r**2
}
