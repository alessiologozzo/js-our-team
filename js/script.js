import { TeamMember } from "./TeamMember.js";

// --> Main
let row = document.getElementsByClassName("row")[0];

let teamMember = new Array();
teamMembersInit();

for(let i = 0; i < 6; i++)
    createCards(teamMember[i]);
// --> /Main


function teamMembersInit(){
    
    teamMember.push(new TeamMember("Wayne", "Barnett", "Founder & CEO", "./img/wayne-barnett-founder-ceo.jpg"));
    teamMember.push(new TeamMember("Angela", "Caroll", "Chief Editor", "./img/angela-caroll-chief-editor.jpg"));
    teamMember.push(new TeamMember("Walter", "Gordon", "Office Manager", "./img/walter-gordon-office-manager.jpg"));
    teamMember.push(new TeamMember("Angela", "Lopez", "Social Media Manager", "./img/angela-lopez-social-media-manager.jpg"));
    teamMember.push(new TeamMember("Scott", "Estrada", "Developer", "./img/scott-estrada-developer.jpg"));
    teamMember.push(new TeamMember("Barbara", "Ramos", "Graphic Designer", "./img/barbara-ramos-graphic-designer.jpg"));
}

function createCards(teamMember){

    let col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4", "d-flex", "py-3");

    let card = document.createElement("div");
    card.classList.add("card", "al-bg-dark");

    let cardImg = document.createElement("img");
    cardImg.src = teamMember.imgPath;
    cardImg.classList.add("al-img");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-center");

    let cardTitle = document.createElement("h4");
    cardTitle.textContent = teamMember.name + " " + teamMember.surname;

    let cardSubtitle = document.createElement("h6");
    cardSubtitle.textContent = teamMember.role;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    col.appendChild(card);

    row.appendChild(col);
}