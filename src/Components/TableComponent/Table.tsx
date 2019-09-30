import React from 'react';
import { Table } from 'reactstrap';
import './Table.scss';
import Layout from "../../Layout/Layout";
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import {DataService} from "../../Service/data.service";


export default class TableComponent extends React.Component<{}, MyState> {
    constructor(props:any) {
        super(props);
        this.state = {
            value: 0,
            data : []
        }
    }

     submitHandler = async () => {

        let data = await DataService.getData(this.state.value);
        this.setState({data})
    };

    changeHandler = (e: any) => {
        this.setState({
            value:e.target.value
        })
    }
    render() {
        return (
            <Layout>
                <div className='formStyle'>
                    <div>
                        <InputGroup>
                            <Input onChange={(e) => this.changeHandler(e)}/>
                            <InputGroupAddon addonType="append">
                                <Button onClick={this.submitHandler} color="success">Submit!</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
                <div className='tableStyle'>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>DateTime</th>
                    <th>Value</th>
                    <th>Number</th>
                    <th>Occurrences</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map((ele,index) => {console.log(ele);
                    return <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{ele.dateTime.toString()}</td>
                        <td>{ele.name}</td>
                        <td>{ele.value}</td>
                        <td>{ele.occurrences}</td>
                    </tr>
                })
                }
                </tbody>
            </Table>
                </div>

            </Layout>
        );
    }
}

interface MyState  {
    value: number,
    data: Array<{
        occurrences: any;
        value: any;
        name: any;
        dateTime: any;
    }>
}
