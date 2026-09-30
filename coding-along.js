const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "Hi! Don't get eaten by the dinosauroos";
sect.appendChild(para);

const textNode = document.createTextNode(" The best in the west");
const linkPara = document.querySelector("p");
linkPara.appendChild(textNode);
sect.appendChild(linkPara);
