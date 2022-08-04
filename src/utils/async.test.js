import {getDataCallback} from './async'

describe('test a operaciones asyncronas',()=>{
    test('haciendo test a callbacks',(done)=>{
         getDataCallback((name)=>{
            expect(name).toBe('roswell')
            done()
         })
         //done: para test asyncronos
        
    })
})