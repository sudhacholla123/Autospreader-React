import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const dataSource = [{
    exchange :"Bitfinex",
    bitfinex: '',
    bitmex: '0.02',
    cexio: '0.04',
    flyer: '0.01',
    flyer_fx: '0.04',
    coinfloor_uk: 0.01
  }, {
    exchange :"Bitmex",
    bitfinex: '1',
    bitmex: '',
    cexio: 0.03,
    flyer: '0.03',
    flyer_fx: '-0.02',
    coinfloor_uk: 0.01
  },{
    exchange :"Cexio",
    bitfinex: '0.01',
    bitmex: '0.02',
    cexio: '',
    flyer: '0.01',
    flyer_fx: '0.04',
    coinfloor_uk: 0.01
  },{
    exchange :"Flyer",
    bitfinex: '1',
    bitmex: '-0.2',
    cexio: 0.03,
    flyer: '',
    flyer_fx: '-0.02',
    coinfloor_uk: 0.01
  },{
    exchange :"Flyer_fx",
    bitfinex: '0.01',
    bitmex: '0.02',
    cexio: '0.04',
    flyer: '0.01',
    flyer_fx: '',
    coinfloor_uk: 0.03
  },{
    exchange :"Coinfloor_uk",
    bitfinex: '0.01',
    bitmex: '0.02',
    cexio: '-0.06',
    flyer: '0.01',
    flyer_fx: '0.04',
    coinfloor_uk: "",
  }];

class SpreadCal extends React.Component {
  constructor(props) {
    super(props)  
  }
  
  render() {
    return (
      <div>
        <div>
          <BootstrapTable data={dataSource}>
            <TableHeaderColumn isKey dataField='exchange'> Exchange</TableHeaderColumn>
            <TableHeaderColumn dataField='bitfinex'> Bitfinex</TableHeaderColumn>
            <TableHeaderColumn dataField='bitmex'>Bitmex </TableHeaderColumn>
            <TableHeaderColumn dataField='cexio'>Cexio</TableHeaderColumn>
            <TableHeaderColumn dataField='flyer'>Flyer </TableHeaderColumn>
            <TableHeaderColumn dataField='flyer_fx'>Flyer_fx </TableHeaderColumn>
            <TableHeaderColumn dataField='coinfloor_uk'>coinfloor_uk </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}
export default SpreadCal; 