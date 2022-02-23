let validateButton = document.getElementById("validate");

function checkIndex(number){
    if(typeof parseInt(number) !== "number" || number.length !== 6){
        return true;
    }else{
        return false
    }
}

validateButton.addEventListener("click", ()=>{
    let ime = document.getElementById("ime");
    let prezime = document.getElementById("prezime");
    let indexNum = document.getElementById("index");
    let predmet = document.getElementById("predmet");
    let ocenka = document.getElementById("ocenka");
    let validated = document.getElementById("validated");
    let tbody = document.createElement("tbody");
    let table = document.getElementsByTagName("table")[0];
    let good = '✔';
    let bad = '❌';
    let id = 0;
    if(ime.value.length < 3 || prezime.value.length < 3 || predmet.value.length < 3 || checkIndex(indexNum.value)){
        validated.innerText = bad;
        alert("Please enter at least 3 characters on every input, and your indexnum must be number from length 6");
    }else{
        validated.innerText = good;
        let button = document.createElement("input");
        button.setAttribute("value", "Dodadi");
        button.setAttribute("type", "submit");
        validated.after(button);

        button.addEventListener("click", ()=>{
            let tr = document.createElement("tr");
            let elements = [ime, prezime, indexNum, predmet, ocenka];
            for (const element of elements) {
                let td = document.createElement("td");
                td.innerText = element.value;
                tr.appendChild(td);
            }
            let actionstd = document.createElement("td");
            let confirm1 = document.createElement("input");
            confirm1.setAttribute("value", "✔");
            confirm1.setAttribute("type", "submit");
            confirm1.setAttribute("class", "confirm");
            let deleteB = document.createElement("input");
            deleteB.setAttribute("value", "❌");
            deleteB.setAttribute("type", "submit");
            deleteB.setAttribute("class", "delete");
            actionstd.appendChild(confirm1);
            actionstd.appendChild(deleteB);
            tr.appendChild(actionstd);
            tbody.appendChild(tr);
            table.appendChild(tbody);
            button.remove();
            for (const element of elements) {
                element.value = "";
            }
            validated.innerHTML = "";
            
            confirm1.addEventListener("click", ()=>{
                let row = confirm1.parentNode.parentNode;
                row.style.backgroundColor = `green`;
                confirm1.nextElementSibling.remove();
                confirm1.remove();
            });

            deleteB.addEventListener("click", () => {
                let row = deleteB.parentNode.parentNode;
                row.remove();
            });
        });
    }
});
