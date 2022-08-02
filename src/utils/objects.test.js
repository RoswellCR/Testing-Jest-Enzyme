import {createStore} from './objects'

describe('test a objetos',()=>{
    test('Add un item en store',()=>{
        const store = createStore()

        store.addItem({
            name:'roswell',
            id:1,
            country:'Cuba'
        })

        expect(store.getStore()[0]).toEqual({
            name:'roswell',
            id:1,
            country:'Cuba'
        })
    })

    test('Buscar un item por id',()=>{
        const store = createStore()

        store.addItem({
            name:'roswell',
            id:1,
            country:'Cuba'
        })

        expect(store.getById(1)).toMatchObject({
            name:'roswell',
            
        })
        expect(store.getById(1)).toHaveProperty('name', 'roswell')
    })

})