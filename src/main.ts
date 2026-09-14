import { Rat } from './rat';
import './style.css'


function generalas(){
    const nev = document.getElementById("nev")! as HTMLInputElement;
    console.log(nev.value);
    const atk = Math.floor(Math.random()*(20-10+1)) + 10;
    const hp = Math.floor(Math.random()*(100-50+1)) +50;
    try {
        const rat = new Rat(nev.value,atk,hp);
        const kiiras = document.getElementById("kiiras")! as HTMLDivElement;
        const kartya = document.createElement("div") as HTMLDivElement;
        const belso = document.createElement("div") as HTMLDivElement;
        kartya.classList = "kartya";
        const h2 = document.createElement("h2") as HTMLHeadElement;
        h2.innerText = rat.name;
        const atkP = document.createElement("p") as HTMLParagraphElement;
        atkP.innerText = "Támadás: "+(rat.atk).toString();
        const hpP = document.createElement("p") as HTMLParagraphElement;
        hpP.innerText = "Élet: "+(rat.hp).toString();
        kartya.appendChild(h2);
        kartya.appendChild(atkP);
        kartya.appendChild(hpP);
        kiiras.appendChild(kartya);
        let promise = new Promise((resolve) => {
            setTimeout (() => {
                resolve("siker")
            }, 5000);
        })
        return promise;
    }
    catch(err) {
        if (err instanceof Error) {

        }
    }
}

document.getElementById('test')!.addEventListener('click', ()=> {
        const kartya = document.getElementsByClassName('kartya');
        kartya[0].classList.toggle("kinyit");
})

document.addEventListener("DOMContentLoaded",()=> {
    document.getElementById("form")!.addEventListener("submit",async (e)=> {
        e.preventDefault();
        await generalas();
        // const kartya = document.getElementsByClassName('kartya');
        // kartya[0].classList.toggle("kinyit");
    })
})