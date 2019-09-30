import React from 'react';
import {Table} from 'reactstrap';
import './Table.scss';
import Layout from "../../Layout/Layout";
import {toast} from "react-toastify";
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import {DataService} from "../../Service/data.service";


export default class TableComponent extends React.Component<{}, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: 0,
            data: []
        }
    }

    submitHandler = async () => {
        if (!this.state.value || this.state.value < 0 || this.state.value > 100) {
            toast.error('Enter a valid value between 1 to 100');
        } else {
            let d = await DataService.getDifferenceData(this.state.value);
            if (d) {
                const data = [];
                let used = false;
                for (const dt of this.state.data) {
                    if (d.number === dt.number) {
                        data.push(d);
                        used = true;
                    } else data.push(dt);
                }
                if (!used)
                    data.push(d);
                this.setState({data});
            }
        }
    };

    changeHandler = (e: any) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <Layout>
                <div className='heading'>
                    <h1>Difference Calculator</h1>
                </div>
                <div className='formStyle'>
                    <div>
                        <InputGroup>
                            <Input type='number' onChange={(e) => this.changeHandler(e)}
                                   placeholder='Valid integer between 1 to 100'/>
                            <InputGroupAddon addonType="append">
                                <Button onClick={this.submitHandler} color="success">Submit!</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
                {this.state.data.length > 0 ?  <div className='tableStyle'>
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Number</th>
                            <th>Value</th>
                            <th>Occurrence</th>
                            <th>Datetime</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((ele, index) => {
                            console.log(ele);
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{ele.number}</td>
                                <td>{ele.value}</td>
                                <td>{ele.occurrence}</td>
                                <td>{new Date(ele.datetime).toISOString()}</td>
                            </tr>
                        })
                        }
                        </tbody>
                    </Table>
                </div>: null}

            </Layout>
        );
    }
}

interface MyState {
    value: number,
    data: Array<{
        occurrence: number;
        value: number;
        number: number;
        datetime: string;
    }>
}
