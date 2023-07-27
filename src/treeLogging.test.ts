import { createStarkTree } from "./families/stark";
import { logAllPeopleInTree,logAllPeopleInTreeWithQueue}
from "./treeLogging";
import {createBritishSuccessionTree} from "./families/britain"

 test("check for stack", () => {
    expect(logAllPeopleInTree(createStarkTree())).toEqual(["Rickard", "Brandon","Eddard", "Jon", "Robb", "Sansa", "Arya", "Bran", "Rickon", "Lyanna", "Benjen"])
 });

 test("check for queue", () => {
    expect(logAllPeopleInTreeWithQueue(createBritishSuccessionTree())).toEqual(["Queen Elizabeth II", "Charles", "Andrew", "Edward", "Anne", "William", "Harry", "Beatrice", "Eugenie", "James", "Louise","Peter","Zara","George","Charlotte","Louis","Archie","August","Savannah","Isla","Mia","Lena","Lucas"])
 });