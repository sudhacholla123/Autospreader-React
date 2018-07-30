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
    title: <IntlMessages id="antTable.title.exchange" />,
    key: 'exchange',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'exchange')
  },
  {
    title: <IntlMessages id="antTable.title.balance" />,
    key: 'balance',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'balance')
  },
  {
    title: <IntlMessages id="antTable.title.bid" />,
    key: 'bid',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'bid')
  },
  {
    title: <IntlMessages id="antTable.title.ask" />,
    key: 'ask',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'ask')
  },
  {
    title: <IntlMessages id="antTable.title.lastupdate" />,
    key: 'lastupdate',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'lastupdate')
  },
  {
    title: <IntlMessages id="antTable.title.bitfinex" />,
    key: 'bitfinex',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'bitfinex')
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
const tableinfos = [
  {
    title: 'GRID',
    value: 'simple',
    columns: clone(smallColumns)
  },
];
export { columns, tableinfos };
