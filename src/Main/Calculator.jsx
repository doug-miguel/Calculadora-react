import React, { Component } from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearmemory = this.clearmemory.bind(this)
        this.setoperation = this.setoperation.bind(this)
        this.adddigit = this.adddigit.bind(this)
    }

    clearmemory() {
        this.setState({ ...initialState })
    }
    setoperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values [0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch {
                values [0] = this.state.values[0]
            }
            values [1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values

            })
        }
    }
    adddigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const correntValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = correntValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValues = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValues
            this.setState({ values })
            console.log(values)
        }
    }

    render() {



        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearmemory} triple />
                <Button label="/" click={this.setoperation} operation />
                <Button label="7" click={this.adddigit} />
                <Button label="8" click={this.adddigit} />
                <Button label="9" click={this.adddigit} />
                <Button label="*" click={this.setoperation} operation />
                <Button label="4" click={this.adddigit} />
                <Button label="5" click={this.adddigit} />
                <Button label="6" click={this.adddigit} />
                <Button label="-" click={this.setoperation} operation />
                <Button label="1" click={this.adddigit} />
                <Button label="2" click={this.adddigit} />
                <Button label="3" click={this.adddigit} />
                <Button label="+" click={this.setoperation} operation />
                <Button label="0" click={this.adddigit} double />
                <Button label="." click={this.adddigit} />
                <Button label="=" click={this.setoperation} operation />
            </div>
        )
    }
}
