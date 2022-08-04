import {setTimeout} from 'timers'

export const getDataCallback =(callback)=>{ 
      const name = 'roswell'

      setTimeout(()=>{
          callback(name)
      },2000)
}


