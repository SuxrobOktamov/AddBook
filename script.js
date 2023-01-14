let form = document.getElementById('form');
let bookName = document.getElementById('bookName');
let author = document.getElementById('author');
let type = document.getElementById('type');
let tbody = document.getElementById('tbody');
let count = 1;

let books = [];

function myFunc(item){
    for( let i = 0; i < item.length; i++ ){
        let tr = document.createElement("tr");
        tr.innerHTML = `
   <th>${item[i].id}</th>
            <td class='join'>${item[i].bookName}</td>
            <td>${item[i].author}</td>
            <td>${item[i].type}</td>
        `;
        tbody.appendChild(tr);
    }
};
myFunc(books);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    for(let i = 0; i < books.length; i++ ){
        if( bookName.value == document.querySelectorAll(".join")[i].innerText ){
            alert('Bu kitob kirtilgan!');
            books.pop(document.querySelectorAll(".join")[i].innerText);
            count--;
        }
    };
    
    tbody.innerHTML = '';      
    let obj = {
        bookName: bookName.value,
        author: author.value,
        type: type.value,
        id: count,
    };

    books.push(obj); 
    myFunc(books);
    count++;
    bookName.value = '';
    author.value = ''; 
    console.log(books);

});





