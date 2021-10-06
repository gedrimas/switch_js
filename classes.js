class Vector {
  constructor(vectors) {
    this.vectors = vectors;
  }

  checkVectors(vct) {
    if (Object.keys(vct.vectors).length !== 3) throw Error();
  }

  add(vectors) {
    this.checkVectors(vectors);
    return new Vector(this.vectors.map((item, i) => item + vectors.vectors[i]));
  }

  subtract(vectors) {
    this.checkVectors(vectors);
    return new Vector(this.vectors.map((item, i) => item - vectors.vectors[i]));
  }

  norm(vectors) {
    this.checkVectors(vectors);
    const dotedArr = this.vectors.map((item, i) => item * vectors.vectors[i]);
    return dotedArr.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  dot(vectors) {
    this.checkVectors(vectors);
    const dotedArr = this.vectors.map((item, i) => item * vectors.vectors[i]);
    return dotedArr.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }
}

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

const t = a.dot(b);
console.log(t);
