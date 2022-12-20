


export class BFSNode{
  visited:boolean
  value:any
  parent:BFSNode
  generation:number
  constructor(value:any){
    this.value = value
  }

  getUsable: (nodes:BFSNode[])=> BFSNode[]
}

export function BFS(start:BFSNode,nodes:BFSNode[]){
  nodes.forEach(el=>el.visited = false)
  const que: BFSNode[] =[]
  start.visited = true
  start.generation = 0
  que.push(start)
  while(que.length >0){
    let v = que.shift()
    for(let child of v.getUsable(nodes)){
      child.generation = v.generation+1
      if(child.value == 27){
        return child.generation
      }
      if(!child.visited){
        child.visited = true
        que.push(child)
      }
    }
  }
  return 100_000
}