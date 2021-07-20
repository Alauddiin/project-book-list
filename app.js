// selector
const form =document.querySelector('form')
const submit = document.getElementById('submit')
const booklistTableBody=document.querySelector('.booklist__table-body')




class Book {
    constructor(title,author,isbn){
        this.title= title;
        this.author=author;
        this.isbn= isbn;
    }
}



class UI {


    emptyFields(){
        alert("Please fillup all the fields.")
    }
   




    getBook(book1){
        
        let booklistTableRow = document.createElement('tr')
        booklistTableRow.innerHTML=`
            <td>${book1.title}</td>
            <td>${book1.author}</td>
            <td>${book1.isbn}</td>
            <td><a href="#">Delete</a></i></td>
        `
        
        booklistTableBody.appendChild(booklistTableRow)
        // let storeData= [book1.title,book1.author,book1.isbn]

        // for(let i= 0; i<=storeData.length;i++){
        //   localStorage.setItem('books',JSON.stringify(storeData))
        //   storeData++
        // }
        
    };

    clearFields(e){
        
    document.getElementById('title').value='';
    document.getElementById('author').value='' ;
    document.getElementById('isbn').value='';

    };

    deleteBook(e){
        if(e.hasAttribute('href')){
            e.parentElement.parentElement.remove();
        }
    }
    

   


};


form.addEventListener("submit",newBook)

function newBook(e){

    const titleVal = document.getElementById('title').value
    const authorVal = document.getElementById('author').value
    const isbnVal = document.getElementById('isbn').value
    
    let book1 = new Book(titleVal,authorVal,isbnVal)
    


    let ui = new UI()

    if(titleVal==='' || authorVal==='' || isbnVal===''){
        ui.emptyFields();
    }else{
        ui.getBook(book1);
        ui.clearFields();
    }
    
    
}

booklistTableBody.addEventListener('click',deleteItem)
function deleteItem(e){
   
    const ui = new UI();
    ui.deleteBook(e.target)


    e.preventDefault();
    }



// add to local storage




