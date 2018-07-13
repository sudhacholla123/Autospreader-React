import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../components/tables/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar')
  },
  {
    title: <IntlMessages id="antTable.title.firstName" />,
    key: 'firstName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'firstName')
  },
  {
    title: <IntlMessages id="antTable.title.lastName" />,
    key: 'lastName',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'lastName')
  },
  {
    title: <IntlMessages id="antTable.title.city" />,
    key: 'city',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'city')
  },
  {
    title: <IntlMessages id="antTable.title.street" />,
    key: 'street',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'street')
  },
  {
    title: <IntlMessages id="antTable.title.email" />,
    key: 'email',
    width: 100,
    render: object => renderCell(object, 'LinkCell', 'email')
  },
  {
    title: <IntlMessages id="antTable.title.dob" />,
    key: 'date',
    width: 100,
    render: object => renderCell(object, 'DateCell', 'date')
  },
  {
    title: <IntlMessages id="antTable.title.bitmex" />,
    key: 'bitmex',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'bitmex')
  },
 
  {
    title: <IntlMessages id="antTable.title.cexio" />,
    key: 'cexio',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'cexio')
  },
  {
    title: <IntlMessages id="antTable.title.flyer" />,
    key: 'flyer',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'flyer')
  },
  {
    title: <IntlMessages id="antTable.title.flyerfx" />,
    key: 'flyerfx',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'flyerfx')
  }


];
const smallColumns = [columns[1], columns[2], columns[3], columns[4], columns[5], columns[6],columns[7],columns[8],columns[9],columns[10]];
// const sortColumns = [
//   { ...columns[1], sorter: true },
//   { ...columns[2], sorter: true },
//   { ...columns[3], sorter: true },
//   { ...columns[4], sorter: true },
// ];
// const editColumns = [
//   columns[1],
//   columns[2],
//   columns[3],
//   columns[4]
// ];
// const groupColumns = [
//   columns[0],
//   {
//     title: 'Name',
//     children: [columns[1], columns[2]]
//   },
//   {
//     title: 'Address',
//     children: [columns[3], columns[4]]
//   }
// ];
const tableinfos = [
  {
    title: 'GRID',
    value: 'simple',
    columns: clone(smallColumns)
  },
];
export { columns, tableinfos };
