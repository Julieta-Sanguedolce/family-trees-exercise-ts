import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): string [] {
let workStack: Person[] = [];
workStack.push(topPerson);
const treeWithStack:string[] = [];
while(workStack.length !== 0) {
    let currentPerson:Person = workStack.pop()!
    treeWithStack.push(currentPerson.name);
    if(currentPerson.children.length !== 0){
        for(let child of currentPerson.children){
            workStack.push(child)
        }
    }
}

return treeWithStack; 

}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
    let workStack: Person[] = [];
    workStack.push(topPerson);
    const treeWithQueue:string[] = [];
    while(workStack.length !== 0) {
        let currentPerson:Person = workStack.shift()!
        treeWithQueue.push(currentPerson.name);
        if(currentPerson.children.length !== 0){
            for(let child of currentPerson.children){
                workStack.push(child)
            }
        }
        
    }
   return treeWithQueue; 
}

export function countPeopleInTree(topPerson:Person): string{
 
    return "There are: " + logAllPeopleInTree(topPerson).length + " people in the tree";
}

export function logIfInTree(name:string,topPerson: Person): void{
    const familyArray: string[] = logAllPeopleInTree(topPerson)
    familyArray.includes(name)?console.log("found "+name):console.log(name+" not found");
}
