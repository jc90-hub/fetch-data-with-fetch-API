   
document.getElementById("getText").addEventListener("click", displayText)
document.getElementById("getUsers").addEventListener("click", displayUsers)
document.getElementById("getPosts").addEventListener("click", displayPosts)
document.getElementById("add-post").addEventListener("submit", addPost)


function displayText(){
    fetch('sample.txt')
    .then(res => res.text())
    .then (function (data) {
        let output = `<h4>Sample text</h4>`
        output+=data  
        document.getElementById("output").innerHTML=output
    })               
    .catch(err=>console.log(err))
}

function displayUsers(){
    fetch("users.json")
    .then(res => res.json())
    .then(function (data){
        console.log(data)//for debugginng
        let output = `<h4>Users from file</h4>`                                       
        data.forEach(user =>{
            output+=`<ul class="list-group mb-3"> 
                        <li class="list-group-item font-weight-bold">id: ${user.id}</li>
                        <li class="list-group-item">name: ${user.name}</li>
                        <li class="list-group-item">email: ${user.email}</li>
                    </ul>`
        })
        document.getElementById("output").innerHTML= output
        // console.log(output)
    })
    .catch(err => console.log(err))    
} 
        
function displayPosts(){            
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>{                
        let output = `<h4 class="mb-3">100 Posts from API</h4>`
        posts.forEach(function (post){
            output+=`<div class="card card-body mb-3">
                    <h5>title: ${post.title}</h5>
                    <p>body: ${post.body}</p>                   
                    </div>` 
        })

        document.getElementById("output").innerHTML = output
        // console.log(output)
    })
    .catch(err => console.log(err))
} 


function addPost(e){

    e.preventDefault()
    alert("check the 'console.log' for new form entry")
    let title = document.getElementById("title").value
    let body= document.getElementById("body").value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({title:title, body:body}),
        
    })
    .then((res) => res.json())
    .then((posts) => console.log(posts));
}

