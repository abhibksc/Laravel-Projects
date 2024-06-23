


export const signupOperation = async({userName,email,password})=>{


    console.log(userName);
    console.log(email);
    console.log(password);

    const body = JSON.stringify({
        name : userName,
        email : email,
        password : password
    })



    try{

        const login = await fetch('http://localhost:8000/api/register',{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body : body
        })

        if (!login.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! status: ${login.status}`);
        }
        else{
            const response = await login.json();
            console.log(response);
            localStorage.setItem('CurrentUser' , JSON.stringify(response));

            return response;
        }
    }
    catch{

    }

}





export const loginOperation = async({email,password})=>{


    console.log(email);
    console.log(password);

    const body = JSON.stringify({
        email : email,
        password : password
    })



    try{

        const login = await fetch('http://localhost:8000/api/login',{
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : body
        })

        if (!login.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! status: ${login.status}`);
        }
        else{
            const response = await login.json();
            console.log(response);
            localStorage.setItem('CurrentUser' , JSON.stringify(response));


            return response;
        }
    }
    catch{

    }

}