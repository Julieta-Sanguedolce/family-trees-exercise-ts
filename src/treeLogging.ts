import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
let workStack: Person[] = [];
workStack.push(topPerson);

while(workStack.length !== 0) {
    let currentPerson:Person = workStack.pop()!
    console.log(currentPerson.name);
    if(currentPerson.children.length !== 0){
        for(let child of currentPerson.children){
            workStack.push(child)
        }
    }
    
}


}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    let workStack: Person[] = [];
    workStack.push(topPerson);
    
    while(workStack.length !== 0) {
        let currentPerson:Person = workStack.shift()!
        console.log(currentPerson.name);
        if(currentPerson.children.length !== 0){
            for(let child of currentPerson.children){
                workStack.push(child)
            }
        }
        
    }
    
}

