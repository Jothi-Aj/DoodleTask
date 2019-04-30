
// Generate 5digit Random Number
export function generateID() {

    let id = Math.floor(10000 + Math.random() * 90000);
    return id;
  }

// Find index of data within Object by id
export function getIndex(data, id){
	let clone = JSON.parse(JSON.stringify(data));
	return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}

export function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}
