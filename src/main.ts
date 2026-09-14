import { Rat } from './rat';
import './style.css'

const rats: Rat[] = [];

async function generalas(){
    const error = document.getElementById('felhiv')! as HTMLDivElement;
    const hibaP = document.getElementById('hibaP')! as HTMLParagraphElement;
    const hibaH = document.getElementById('hibaH2')! as HTMLHeadElement;
    error.className = "";
    error.classList.toggle('hidden');

    const nev = document.getElementById("nev")! as HTMLInputElement;
    console.log(nev.value);
    const atk = Math.floor(Math.random()*(20-10+1)) + 10;
    const hp = Math.floor(Math.random()*(100-50+1)) +50;
    try {
        const rat = new Rat(nev.value,atk,hp);
        rats.push(rat);
        const kiiras = document.getElementById("kiiras")! as HTMLDivElement;
        const kartya = document.createElement("div") as HTMLDivElement;
        kartya.classList = "kartya";
        const belso = document.createElement("div") as HTMLDivElement;
        belso.classList.add("belso")
        const h2 = document.createElement("h2") as HTMLHeadElement;
        h2.innerText = rat.name;
        const atkP = document.createElement("p") as HTMLParagraphElement;
        atkP.innerText = "Támadás: "+(rat.atk).toString();
        const hpP = document.createElement("p") as HTMLParagraphElement;
        hpP.innerText = "Élet: "+(rat.hp).toString();
        belso.appendChild(h2);
        belso.appendChild(atkP);
        belso.appendChild(hpP);
        kartya.appendChild(belso);
        kiiras.appendChild(kartya);
        hibaH.innerText = 'Siker!';
        hibaP.innerText = 'Sikeres hozzáadás!',
        error.classList.toggle('hidden');
        error.classList.toggle('siker');
        let promise = new Promise((resolve) => {
            setTimeout (() => {
                kartya.classList.toggle("kinyit");
                resolve("siker")
            }, 50);
        })
        .then(() => {
            setTimeout(() => {
                error.classList.toggle('kinyit');
            }, 100);
        });
        return promise;
    }
    catch(err) {
        if (err instanceof Error) {
            hibaP.innerText = err.message;
            hibaH.innerText = "Hiba!";
            error.classList.toggle('hidden');
            error.classList.toggle('err');
            let promise = new Promise((resolve) => {
                setTimeout(()=> {
                    error.classList.toggle('kinyit');
                    resolve('hiba');
                }, 50)
            
            })
            return promise;
        }
    }
}

document.addEventListener("DOMContentLoaded",()=> {
    document.getElementById("form")!.addEventListener("submit",async (e)=> {
        e.preventDefault();
        await generalas();
    });
});