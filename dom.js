//header.textContent = "Hello";
    //header.innerHTML = "<h3>Web Development</h3>";
    // console.dir(document);
    // console.log(document.domain);
    // console.log(document.URL);
    // console.log(document.title);
    // document.title = 123;
    // console.log(document.doctype);
    // console.log(document.head);
    // console.log(document.body);
    // console.log(document.all);
    // console.log(document.all[10]);
    // console.log(document.forms);
    // console.log(document.links);
    // console.log(document.images);

    //GETELEMENTBYID//
    console.log(document.getElementById('header-title'));
    var headerTitle=document.getElementById('header-title');
    var header=document.getElementById('main-header');
    console.log(headerTitle);
   // headerTitle.textContent='Hello';
   // headerTitle.innerText=  'good bye';
   // console.log(headerTitle.innerText);
    //headerTitle.innerHTML='<h3>hello</h3>';
    header.style.borderBottom='solid 3px #000';

    //GETELEMENTSBYCLASSNAME//
    var items = document.getElementsByClassName('list-group-item');
    console.log(items);
    console.log(items[1]);
    items[1].textContext='Hello 2';
    items[1].style.fontWeight='bold';
    items[1].style.backgroundColor='yellow';

    for(i=0;i<items.length;i++){
        items[i].style.backgroundColor='skyblue';

    }
    