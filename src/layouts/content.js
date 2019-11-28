import { Launches } from "../components/launches";

class Content{
    constructor(){
        this.node= document.createElement('div');
        this.launches=new Launches();
        this.node.appendChild(this.launches.getNode());
    }
    getNode(){
        return this.node;
    }
}
export{
    Content
}