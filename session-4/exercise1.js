const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
  };
  
  function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed
    const copy = { ...data };
    
    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;
    
    return copy;
  }
  
  const newRegistry = cloneAndModify(registry);
  
  console.log(registry.active.length); // 2
  console.log(registry.active[0].name); // Gamma
  console.log(registry.version);       // undefined
  

//registry
// active = [
//         { id: 1, name: "Gamma" },
//         { id: 2, name: "Beta" }
//     ]
// archived = []
// version is "undefined" as it only exist in copy object
    
//     copy (newRegistry)
//      active = [
//         { id: 1, name: "Gamma" },
//         { id: 2, name: "Beta" }
//     ]
//      archived =  []
//      version = 2.0
