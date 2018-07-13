import React from 'react'
import firebase from 'firebase';

class AutospreaderData extends React.Component{
  constructor(props){
    super(props)
    this.state ={bitfinex:'',
                  exchange_list:["cexio", "bitfinex", "bitmex", "flyer", "flyer_fx", "coinfloor_uk"]
                }
  }
  componentDidMount() {
    const ref = firebase.database().ref("bitfinex");
      ref.on('value', snapshot =>  {
        this.setState({
          bitfinex : snapshot.val()
        });
        console.log(this.state.bitfinex);
      })
  }
  
  render() {
    return (
      <h6>
      { 
        this.state.bitfinex.latency
      }
      </h6>
    );
  } 
}
export default AutospreaderData;              