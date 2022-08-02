import { createStore } from "./arrays";

describe('Haciendo pruebas a listas/arrays', ()=>{
    test('probando agregar una nueva fruta', ()=>{
        const store = createStore()

        store.addFruit('fresa')

        expect(store.getFruits()).toStrictEqual(['fresa'])

    })

    test('probando agregar dos nueva fruta', ()=>{
        const store = createStore()

        store.addFruit('fresa')
        store.addFruit('melon')

        expect(store.getFruits()).toStrictEqual(['fresa', 'melon'])
        
    })

    test('probando si contiene fruta especifica', ()=>{
        const store = createStore()

        store.addFruit('fresa')
        store.addFruit('melon')

        expect(store.getFruits()).toContain('melon')
        expect(store.getFruits()).not.toContain(['manzana'])
    })
    
    test('probando la longitud del array', ()=>{
        const store = createStore()

        store.addFruit('fresa')
        store.addFruit('melon')
        store.addFruit('pera')

        expect(store.getFruits()).toHaveLength(3)
    })

    test('probando add un objeto con info de frutas', ()=>{
        const store = createStore()

        store.addFruit({
            name:'fruta',
            price:10
        })
        
        expect(store.getFruits()).toContainEqual({
            name:'fruta',
            price:10
        })
    })



})