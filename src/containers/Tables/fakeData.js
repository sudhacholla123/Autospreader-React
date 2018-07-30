
const tableData = JSON.parse(
  `[{
  "id": 0,
  "key": 0,
  "exchange": "BITFINEX",
  "balance": "BTC 15.64",
  "bid": "6177.4",
  "ask": "52677",
  "lastupdate": "12:10:29.91 ",
  "bitfinex": "6178.9 ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14"
}, {
  "id": 1,
  "key": 1,
  "exchange": "BITMEX",
  "balance": "BTC 15.64",
  "bid": "6177.4",
  "ask": "52677",
  "lastupdate": "12:10:29.91 ",
  "bitfinex": "6178.9 ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14"
}, {
  "id": 2,
  "key": 2,
  "exchange": "BITFINEX",
  "balance": "BTC 15.64",
  "bid": "6177.4",
  "ask": "52677",
  "lastupdate": "12:10:29.91 ",
  "bitfinex": "6178.9 ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14"
}, {
  "id": 3,
  "key": 3,
  "exchange": "BITFINEX",
  "balance": "BTC 15.64",
  "bid": "6177.4",
  "ask": "52677",
  "lastupdate": "12:10:29.91 ",
  "bitfinex": "6178.9 ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14"
}, {
  "id": 4,
  "key": 4,
  "exchange": "BITFINEX",
  "balance": "BTC 15.64",
  "bid": "6177.4",
  "ask": "52677",
  "lastupdate": "12:10:29.91 ",
  "bitfinex": "6178.9 ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14"
},   {
  "id": 8,
  "key": 8,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg",
  "city": "6178.9 ",
  "email": "12:11:32.82 ",
  "firstName": "Gennaro",
  "lastName": "Waters",
  "street": "O'Hara Radial",
  "zipCode": "91831",
  "date": "0.2",
  "bs": "open-source morph convergence",
  "catchPhrase": "Polarised interactive protocol",
  "companyName": "Osinski, Gleason and Schimmel",
  "words": "sapiente et praesentium",
  "sentence": "Omnis in voluptatibus enim unde nobis."
}, {
  "id": 9,
  "key": 9,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mhaligowski/128.jpg",
  "city": "6178.9 ",
  "email": "Hildegard.Durgan@yahoo.com",
  "firstName": "Erling",
  "lastName": "Armstrong",
  "street": "Fanny Lights",
  "zipCode": "96737-2299",
  "date": "0.12",
  "bs": "magnetic utilize infrastructures",
  "catchPhrase": "Phased reciprocal firmware",
  "companyName": "Walker - Cartwright",
  "words": "ut qui excepturi",
  "sentence": "Culpa dolore nisi vero non."
}]`,
);
// console.log(tableData);

// const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  
}
export default fakeData;
