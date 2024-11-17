import axios from 'axios'

const apiUrl = 'http://localhost:3000'
const validItems = ['post','comment','user','author']

const getAll = async (itemName) => {
    if(validItems.includes(itemName)) {
        try {
            const response = await  axios.get(`${apiUrl}/blog/get/${itemName}s`)
            return response.data
            }
            catch (err) {
              handleError(err)
            }
    }else {
        console.error('Invalid parameter')
    }
    
}

const getSingle = async (itemName,id) => {
    if (validItems.includes(itemName)){
        try {
            const response = await axios.get(`${apiUrl}/blog/get/${itemName}/${id}`)
            return response.data
            }
            catch(err) {
               handleError(err)
            }
    }else {
        console.error('Invalid parameter')
    }
}

//The data parameter here should be an object
const addItem = async (itemName,data) => {
    if(validItems.includes(itemName)) {
        try {
            const response = await axios.post(`${apiUrl}/blog/add/${itemName}`, data);
            return response.data;
        } catch (err) {
           handleError(err)
        }
    }
    else{
        console.error('Invalid paramter')
    }
   
}

const updateItem = async (itemName,id,data) => {
    if(validItems.includes(itemName)) {
        try {
            const response = await axios.put(`${apiUrl}/blog/update/${itemName}/${id}`,data)
            return response.data
         }
         catch(err) {
           handleError(err)
   }
    }
    else{
        console.error('Invalid paramter')
    }
     
}

const deleteItem = async (itemName,id) => {
    if(validItems.includes(itemName)) {
        try {
            const response = await axios.delete(`${apiUrl}/blog/delete/${itemName}/${id}`)
            return response.data
      }
      catch (err) {
           handleError(err)
      }
    }
    else{
        console.error('Invalid paramter')
    }
  
}

const queryDoc = async (itemName,field,filter) => {
    if(validItems.includes(itemName)) {
        try{
            const response = await axios.get(`${apiUrl}/blog/query/${itemName}/${field}/${filter}`)
            return response.data
         }
         catch(err) {
            handleError(err)
         }
    }
    else{
        console.error('Invalid paramter')
    }
   
}

const handleError = (err) => {
    if(err.response) {
        console.error(`Error :${err.response.status}`)
        console.error(`Error : ${err.response.data}`)
     }
     else if (err.request) {
        console.error('Error: No response was received from server')
        console.error('Request Data', err.request)
     }
     else{
        console.error('Error in setting up request:', err.message)
     }
}

export {getAll, getSingle, addItem, updateItem, deleteItem,queryDoc}
