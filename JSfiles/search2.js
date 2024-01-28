var array = [
{
    id : "1",
    name : "Sudheer",
    company: "VMC",
    location: "Banglore"
},
{
    id : "2",
    name : "Harish",
    company: "VMC",
    location: "Banglore"
},
{
    id : "3",
    name : "Narun Kumar",
    company: "VMC",
    location: "Banglore"
},
{
    id : "4",
    name : "Akshay kumar",
    company: "VMC",
    location: "Banglore"
},
{
    id : "5",
    name : "Omkar",
    company: "VMC",
    location: "Banglore"
}
]

   function showtable(curarray){
    document.getElementById("mytable").innerHTML =`
    <tr class="bg-primary text-white fw-bold"> 
    <td>ID</td>
    <td>Name</td>
    <td>Company</td>
    <td>Location</td>

    </tr>
    `;

    if(curarray == ""){
        document.getElementById("error").innerHTML = <span class ="text-danger">Details Not Found !.. </span>
    } else{
        document.getElementById("error").innerHTML = "";

        for(i == 0; i < curarray.length; i++){
            document.getElementById("mytable").innerHTML += `
            <tr> 
            <td>${curarray[i].id}</td>
            <td>${curarray[i].name}</td>
            <td>${curarray[i].company}</td>
            <td>${curarray[i].location}</td>
            </tr>
            `
        }
    }

}
 showtable(array);