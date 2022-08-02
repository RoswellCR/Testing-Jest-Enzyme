
export const createStore=()=>{
    let store = [] 
    return {
        addItem:(item)=>{
            store = [...store,item] 
        },
        getStore:()=>{
            return store
        },
        getById:(id)=>{
            return store.filter(item => item.id===id)[0]//[para que retorne la pos 0 del array]
        }
    } 
}