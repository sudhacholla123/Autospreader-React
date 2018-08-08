import React from 'react'
import Box from '../../components/utility/box';
import basicStyle from '../../settings/basicStyle';
import Button from "../../components/uielements/button";
import PlaceOrder from './PlaceOrder';
import Input, {
    InputSearch,
    InputGroup,
    Textarea
} from '../../components/uielements/input';
import Select, { SelectOption } from '../../components/uielements/select';
import Routine from './Routine'


const Option = SelectOption;

//Displays Component with "+RoutineGroup"
//OnClick "+RoutineGroup" creates to NewRoutine


class RoutineGroup extends React.Component {
    constructor(props) {
        super()
        this.state = {
            back: false,
            routine_group_array: []
        }
        this.back = this.back.bind(this);
        this.add = this.add.bind(this);
    }
    //appending new routine group to the array
    add() {
        const routine_group_array = this.state.routine_group_array.concat(Routine);
        this.setState({ routine_group_array });
    }
    //going back to create stratgey component
    back() {
        this.setState({
            back: true,
        });
    }

    render() {
        const routine_group_array = this.state.routine_group_array.map((Element, index) => {
            return <Element key={index} index={index} />
        });
        if (this.state.back) {
            return (<PlaceOrder />)
        }

        return (
            <div>
                <Box>
                    <div style={{ paddingRight: 45 }}>
                        <Button type="primary" onClick={this.add} className="isoOrderBtn">
                            <b>+ Routine Group</b>
                        </Button>{routine_group_array}
                    </div>
                </Box>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 45 }}>
                    <Button type="submit" onClick={this.back} className="isoOrderBtn">
                        <b>Create Stratagey</b>
                    </Button>
                </div>
            </div>
        )
    }
}
export default RoutineGroup;              