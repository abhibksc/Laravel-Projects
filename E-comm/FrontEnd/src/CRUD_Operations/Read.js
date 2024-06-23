



export const getStoreData = async()=>{




  
    try{

        const login = await fetch('http://localhost:8000/api/storeData')

        if (!login.ok) {
            throw new Error(`HTTP error! status: ${login.status}`);
        }
        else{
            const response = await login.json();
            console.log(response);
            // localStorage.setItem('CurrentUser' , JSON.stringify(response));


            return response;
        }
    }
    catch{

    }


}