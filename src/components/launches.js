import { getAllLaunches } from "../utilities/space-x-service";
import { Launch } from "./launch";

class Launches{
    constructor(){
        this.node=document.createElement('launches');

        getAllLaunches().then(data=>{
            //Zadrzavamo misije koje imaju slike
            data=data.filter(element=>{
                return element.links.mission_patch!=null;
            })
            data.forEach(element=>{
                let launch=new Launch(element);
                this.node.appendChild(launch.getNode());
            })
        })
    }

    getNode(){
        return this.node;
    }


}

export{
    Launches
}