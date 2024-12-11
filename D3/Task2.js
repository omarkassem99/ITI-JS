let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        let res = JSON.parse(xhr.response);
        console.log(res);

        
        let tableBody = document.getElementById("dataTable");
        tableBody.innerHTML = ""; 
        for (let i = 0; i < res.length; i++) {
            let row = `<tr>
                <td>${res[i].id}</td>
                <td>${res[i].title}</td>
                <td>${res[i].body}</td>
            </tr>`;
            tableBody.innerHTML += row;
        }
    }
};


function GetDataBYID() {
    let inp = document.getElementById("databyid").value;
    if (!inp) {
        alert("Please enter a valid ID.");
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
            let res = JSON.parse(xhr.response);
            console.log(res);

        
            document.getElementById("title").innerText = res.title;
            document.getElementById("body").innerText = res.body;
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            alert("Data not found for the given ID.");
        }
    };
}
