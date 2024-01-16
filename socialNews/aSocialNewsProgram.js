class Links{
  constructor(){
    this.linkArray = [];
  }

  display(){
    if(this.linkArray.length > 0){
    this.linkArray.forEach(link => {
      alert(`The links are: ${link.name} ${link.url} ${link.author}`);
    })
  }else{
    alert("There are no links");
  }
  }

  add_link(name, url, author){
    const newLink = new Link(name, url, author);
    this.linkArray.push(newLink);
  }

  delete_link(index){
      if(index >= 0 && index < this.linkArray.length){
        this.linkArray.splice(index,1);
        alert(`Link at index ${index} deleted.`);
      }else{
        alert(`Invalid index ${index}. No link deleted.`);
      }
  }
}

class Link{
  constructor(name, url, author){
    this.name = name;
    this.url = url;
    this.author = author;
  }
}

const linkManager = new Links();

// linkManager.add_link('Google', 'https://google.com', 'Google');
// linkManager.add_link('Facebook', 'https://facebook.com', 'Facebook');


do{
  var input = Number(prompt(`
  1. Show links
  2. Add links
  3. Remove links
  0. Quit
  `)
  );

  switch(input){
    case 1:
      showLinks();
      break;
    case 2:
        addLinks();
        break;
    case 3:
      removeLinks();
      break;
    case 0:
        alert('Quiting');
        break;
    default:
        alert("wrong input");
  }
}while(input!==0)


function showLinks(){
  linkManager.display();
}

function removeLinks(){

  linkManager.display();
  var index = parseInt(prompt("Enter the index you want to delete"));
  linkManager.delete_link(index-1);
  linkManager.display(); // display after deletion
}

function addLinks(){
  var name = prompt("Enter the name of link: ");
  var url = prompt("Enter the url of links: ");
  var author = prompt("Enter the author of the link: ");
  linkManager.add_link(name, url, author);
  
}