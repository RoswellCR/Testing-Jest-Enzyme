import {setTimeout} from 'timers'

export const getDataCallback =(callback)=>{ 
      const name = 'roswell'

      setTimeout(()=>{
          callback(name)
      },2000)
}

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("roswell");
    }, 2000);
  });
};

getDataPromise()
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    //manejar error
  });

  export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('error');
      }, 2000);
    });
  }; 
