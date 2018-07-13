const tableData = JSON.parse(
  `[{
  "id": 0,
  "key": 0,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg",
  "city": "6178.9 ",
  "email": "12:10:29.91 ",
  "firstName": "BITFINEX",
  "lastName": "BTC 15.64",
  "street": "6177.4",
  "zipCode": "52677",
  "date": " ",
  "cexio":"0.02",
  "bitmex":"0.01 ",
  "flyer":"0.14",
  "flyerfx":"-0.14",
  "bs": "back-end optimize e-markets",
  "catchPhrase": "Devolved heuristic focus group",
  "companyName": "Kessler LLC",
  "words": "dignissimos et natus",
  "sentence": "Illum molestiae saepe eaque odit magnam veritatis eligendi est qui."
}, {
  "id": 1,
  "key": 1,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg",
  "city": "6138.9 ",
  "email": "12:10:58.04",
  "firstName": "BITMEX",
  "lastName": "BTC 6.45",
  "street": "6178.4 ",
  "zipCode": "64903",
  "date": "-0.02",
  "cexio":"0.04 ",
  "bitmex":" ",
  "flyer":"0.14",
  "flyerfx":"-0.14",
  "bs": "seamless mesh vortals",
  "catchPhrase": "Managed background migration",
  "companyName": "Doyle and Sons",
  "words": "voluptatum dignissimos possimus",
  "sentence": "Aut similique a qui."
}, {
  "id": 2,
  "key": 2,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg",
  "city": "6978.9 ",
  "email": "12:11:16.00 ",
  "firstName": "CEXIO",
  "lastName": "BTC 0.34",
  "street": "6185.0",
  "zipCode": "46659",
  "date": "0.06",
  "cexio":" ",
  "bitmex":"-0.03",
  "flyer":"0.02 ",
  "flyerfx":"-0.14",
  "bs": "bleeding-edge enhance e-commerce",
  "catchPhrase": "Public-key intermediate hardware",
  "companyName": "Champlin and Sons",
  "words": "est est corrupti",
  "sentence": "Qui consequatur aut dignissimos error qui praesentium sit et unde."
}, {
  "id": 3,
  "key": 3,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg",
  "city": "6178",
  "email": "12:11:16.00 ",
  "firstName": "FLYER",
  "lastName": "BTC 7.99",
  "street": "6174.0",
  "zipCode": "22101",
  "date": "0.04",
  "cexio":"0.02",
  "bitmex":"0.03",
  "flyer":" ",
  "flyerfx":"-0.11 ",
  "bs": "24/7 orchestrate communities",
  "catchPhrase": "Team-oriented fault-tolerant help-desk",
  "companyName": "Shields Inc",
  "words": "aut perspiciatis totam",
  "sentence": "Ut omnis et."
}, {
  "id": 4,
  "key": 4,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg",
  "city": "6178.9 ",
  "email": "12:11:32.82 ",
  "firstName": "FLYER FX",
  "lastName": "BTC 7.99",
  "street": "6178.2 ",
  "zipCode": "93686",
  "date": "0.14",
  "cexio":"0.02",
  "bitmex":"0.03",
  "flyer":"0.1",
  "flyerfx":" ",
  "bs": "sticky e-enable metrics",
  "catchPhrase": "Re-engineered intangible methodology",
  "companyName": "Hoeger Inc",
  "words": "iusto ut voluptatem",
  "sentence": "Praesentium sit exercitationem aut."
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
const sortOption = {};
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
  // getSortAsc(sortKey) {
  //   sortOption.sortKey = sortKey;
  //   sortOption.sortDir = 'ASC';
  //   return this.datas.sort(this.sort);
  // }
  // getSortDesc(sortKey) {
  //   sortOption.sortKey = sortKey;
  //   sortOption.sortDir = 'DESC';
  //   return this.datas.sort(this.sort);
  // }
  // sort(optionA, optionB) {
  //   const valueA = optionA[sortOption.sortKey].toUpperCase();
  //   const valueB = optionB[sortOption.sortKey].toUpperCase();
  //   let sortVal = 0;
  //   if (valueA > valueB) {
  //     sortVal = 1;
  //   }
  //   if (valueA < valueB) {
  //     sortVal = -1;
  //   }
  //   if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
  //     return sortVal * (-1);
  //   }
  //   return sortVal;
  // }
}
export default fakeData;
