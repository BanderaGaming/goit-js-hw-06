const mainList = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

const countCategory = () => { 
    console.log(`Number of categories: ${items.length}`)
};

const categoriesDesc = () => {
    items.forEach(item => {
        console.log(`Category: ${item.querySelector("h2").innerHTML}`);
        console.log(`Elements: ${item.querySelectorAll("li").length}`);
    });

};

countCategory();
    
categoriesDesc();




    


