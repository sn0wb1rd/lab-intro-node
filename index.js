class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  };

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b
    })
  
    this.length = this.items.length
    return this.items
  };

  get(pos) {
    if (!(this.items.indexOf(pos) === -1)){
      return this.items.find(elem => elem == pos)      
    }
    else {
      throw new Error('OutOfBounds');
    }
  };

  max() {
    if (this.length != 0){
      return Math.max(...this.items)
    }
    else {
      throw new Error('EmptySortedList');
    }
  };

  min() {
    
    if (this.length != 0){
      return Math.min(...this.items)
    }
    else {
      throw new Error('EmptySortedList');
    }
  };

  sum() {
    if (this.length != 0){
       return this.items.reduce(function (accumulator, currentValue){
        accumulator += currentValue
        return accumulator;
      }, 0);
    }
    else {
      return 0
    }
  };

  avg() {
    if (this.length != 0){
      // return sum() / this.length // does not work?!
      let sumNbr = this.items.reduce(function (accumulator, currentValue){
        accumulator += currentValue
        return accumulator;
      }, 0);
      return sumNbr / this.length
    }
    else {
      throw new Error('EmptySortedList');
    };
  };
};

module.exports = SortedList;
