var data = [
    {Name:'A',Parent:null,Size:'1-1-60',isActive:true},
    {Name:'B',Parent:null,Size:'1-1-100',isActive:true},
    {Name:'C',Parent:'A',Size:'1-2-60',isActive:true},
    {Name:'D',Parent:'B',Size:'1-2-100',isActive:false},
    {Name:'E',Parent:'A',Size:'1-2-80',isActive:true},
    {Name:'F',Parent:'C',Size:'2-4-60',isActive:true},
    {Name:'G',Parent:'D',Size:'2-4-100',isActive:false},
    {Name:'H',Parent:'F',Size:'4-8-60',isActive:true},
    {Name:'I',Parent:'H',Size:'8-16-60',isActive:true},
    {Name:'J',Parent:'I',Size:'8-32-60',isActive:true},
]

const recursive = (data)=>{
    
    let parent = {}
    let child = {}
    let noMoreChild = {}

    // first loop create top parent
    data.forEach(ep => {
        if(ep.Parent === null){
            parent[ep.Name] = {
                Size:ep.Size,
                Child:[]
        }}
    });

    // second loop create element has Child
    data.forEach(ec => {
        if(ec.Parent !== null){
            child[ec.Parent] = {
                Size:ec.Size,
                Child:[]
        }}
    });

    // find element don't have child
    let objKey = Object.keys(child)
    let noChild = data.filter(a1 => objKey.filter(a2 => a2 === a1.Name).length === 0);

    // create last object
    noChild.forEach((nc)=>{
        noMoreChild[nc.Name] = {
            Size:nc.Size
        }
    })
    
    // init object key array
    let parentKey = Object.keys(parent)
    let childKey = Object.keys(child)
    let nochildKey = Object.keys(noMoreChild)

    // insert from last child
    data.forEach((r)=>{
        nochildKey.forEach(c=>{
            if(r.Name == c) child[r.Parent].Child.push({[c]:noMoreChild[c]})
        })
        
    })

    // insert child
    data.forEach((r)=>{
        childKey.forEach(c=>{
            if(r.Name == c && r.Parent != null) child[r.Parent].Child.push({[c]:child[c]})
        })
    })

    // insert parent
    let lastOne = []
    parentKey.forEach(p=>{
        lastOne.push({[p]:child[p]})
    })

    // json output
    let result = JSON.stringify(lastOne)
    console.log(result)
}

recursive(data)