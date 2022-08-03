const getValue = (exp) =>{
    switch (exp) {
        case 'definido':
            return {}
        case 'indefinido':
            return undefined
        case 'verdadero':
            return true
        case 'falso':
            return false    
        default:
            return null;
    }
}

describe('testear valores nulls, undefined y booleanos',()=>{
    test('validar si existe o esta definido un valor',()=>{
        expect(getValue('definido')).toBeDefined()
    })
    test('validar si el valor es null',()=>{
        expect(getValue()).toBeNull()
    })
    test('validar si es verdadero',()=>{
        expect(getValue('verdadero')).toBeTruthy()
    })
    test('validar si es falso',()=>{
        expect(getValue('falso')).toBeFalsy ()
    })
    test('validar si el valor es Nan',()=>{
        expect(NaN).toBeNaN()
    })

})