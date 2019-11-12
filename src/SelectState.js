import React, {PureComponent} from 'react';

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


class SelectState extends PureComponent{

    render(){
        const {name, value, handleChange} = this.props
    return(
        <div>
            <select name={name} value = {value} onChange = {handleChange}>
                <option key = {(Math.random()*32).toString()} value="none" disabled >None Selected</option>
                {
                    states.map((state, index) => (
                        <option key = {(Math.random()*index).toString()} value={state} >{state}</option>
                    ))
                }
            </select>
        </div>
    )
    }
}

export default SelectState;