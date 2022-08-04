import {getDataCallback, getDataPromise, getDataPromiseError} from './async'
//done: para test asyncronos

describe('test a operaciones asyncronas',()=>{
    test('haciendo test a callbacks',(done)=>{
         getDataCallback((name)=>{
            expect(name).toBe('roswell')
            done()
         })
         
        
    })

    test("haciendo test a promesas", (done) => {
      getDataPromise()
        .then((name) => {
          expect(name).toBe("roswell");
          done();
        })
        .catch(() => {

        });
    });

    //otra forma de hacer pruebas a promise
    test('haciendo test a promesa con expect', ()=>{
        return expect(getDataPromise()).resolves.toBe('roswell')
    })

    test("haciendo test a promesas rechazada", (done) => {
        getDataPromiseError()
          .then((name) => {
            
          })
          .catch((error) => {
            expect(error).toBe("error");
            done();
          });
      });
  
      //otra forma de hacer pruebas a promise
      test('haciendo test a promesa con expect rechazada', ()=>{
          return expect(getDataPromiseError()).rejects.toBe('error')
      })

})
