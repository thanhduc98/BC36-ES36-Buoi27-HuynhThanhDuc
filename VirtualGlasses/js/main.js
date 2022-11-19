let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const domID = id => document.getElementById(id);
const renderGlassList = (id) => {
    const glasses = dataGlasses.reduce((glasses, arr) => {
        // console.log(arr);
        glasses += `
        <div class="col-md-4 my-4 glassList">
            <img src="${arr.virtualImg}" class="img-fluid" style="cursor: pointer" onclick="addGlass('${arr.id}')">
        </div>
        `
        return glasses;
    }, "");
    domID(id).innerHTML = glasses;
}

renderGlassList("vglassesList");

const renderLayout = (id) => {
    let content = "";
    dataGlasses.forEach(arr => {
        if (arr.id === id) {
            content += `<img src="${arr.virtualImg}" class="img-fluid addedGlass">`;
        }
    });
    return content;
}

const renderContent = (id) => {
    let content = "";
    dataGlasses.forEach(arr => {
        if (arr.id === id) {
            content += `
            <div>
                <h5>${arr.name} - ${arr.brand} (${arr.color})</h5>
                <span class="price">$${arr.price}</span>
                <p class="mb-0">${arr.description}</p>
            </div>
            `;
        }
    });
    return content;
}

window.addGlass = (id) => {
    domID("glassesInfo").style.display = "block";
    domID("avatar").innerHTML = renderLayout(id);
    domID("glassesInfo").innerHTML = renderContent(id);
}

window.removeGlasses = (isAdd) => {
    let beforeAfter = document.getElementsByClassName("addedGlass")[0];
    beforeAfter = isAdd ? beforeAfter.style.display = "block" : beforeAfter.style.display = "none";
}



