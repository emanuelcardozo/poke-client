const utils = {
  isEmpty: obj =>{
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },

  isAString: value => {
    return typeof(value) === "string";
  },

  capitalize: ([first, ...rest]) => {
    return first.toUpperCase() + rest.join("");
  }
}

export default utils
