import { Person } from "../personTypes";

export function createLannisterTree(): Person {
    //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
    
const cerseiKids: Person[] = [
            { name: "Joffrey", children: [] },
                { name: "Myrcella", children: [] },
                { name: "Tommen", children: [] },
                
        ];
        
const tywinKids: Person[] = [
        { name: "Cersei", children: cerseiKids },
            { name: "Ser Jaime", children: [] },
            { name: "Tyrion", children: [] },
           
    ];

const tytosKids:Person[] = [
    { name: "Tywin", children: tywinKids },
        { name: "Genna", children: [] },
        { name: "Kevan", children: [] },
        { name: "Tygett", children: [] },
        { name: "Gerion", children: [] },
    ];





    return { name: "Tytos", children: tytosKids };
}
