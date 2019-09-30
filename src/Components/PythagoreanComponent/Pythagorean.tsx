import React from 'react';
import './Pythagorean.scss'
import {Col, FormGroup, Label, Row, Table} from 'reactstrap';
import Layout from "../../Layout/Layout";
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import {toast} from "react-toastify";
import {DataService} from "../../Service/data.service";


export default class Pythagorean extends React.Component<{}, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            number_a: 0,
            number_b: 0,
            number_c: 0,
            data: []
        }
    }

    checkNumber(num1:number, num2:number, num3:number){
        return num1 < 0 || num1 > 1000 || num2 < 0 || num2 > 1000 || num3 < 0 || num3 > 1000;

    }
    submitHandler = async () => {
        const {number_a, number_b, number_c} = this.state;
        if (!number_a || !number_b || !number_c || this.checkNumber(number_a,number_b,number_c)){
            toast.error('Enter valid values between 1 to 1000');
            return ;
        } else {
            let d = await DataService.getPythagoreanData(number_a, number_b, number_c);
            if (d) {
                const data = [];
                let used = false;
                debugger;
                for (const dt of this.state.data) {
                    if (d.number_a === dt.number_a && d.number_b === dt.number_b && d.number_c === dt.number_c) {
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
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Layout>
                <div className='heading-pythagorean'>
                    <h1>Pythagorean triplet</h1>
                </div>
                <div className='formStyle-pythagorean'>
                    <div>
                        <Row form>
                            <Col md={3}>
                                <FormGroup>
                                    <Input type="number" name="number_a" onChange={(e) => this.changeHandler(e)}
                                           placeholder='A (1 to 1000)'/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Input type="text" name="number_b" onChange={(e) => this.changeHandler(e)}
                                           placeholder='B (1 to 1000)'/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Input type="text" name="number_c" onChange={(e) => this.changeHandler(e)}
                                           placeholder='C (1 to 1000)'/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <Button color='success' onClick={this.submitHandler}>Submit</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                {this.state.data.length > 0 ? <div className='tableStyle-pythagorean'>
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Number</th>
                            <th>Value</th>
                            <th>Occurrence</th>
                            <th>Is Triplet</th>
                            <th>Datetime</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.data.map((ele, index) => {
                                console.log(ele);
                                return <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{`${ele.number_a}, ${ele.number_b}, ${ele.number_c}`}</td>
                                    <td>{ele.solution}</td>
                                    <td>{ele.occurrence}</td>
                                    <td>{ele.is_triplet? 'TRUE': 'FALSE'}</td>
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
    number_a: number;
    number_b: number;
    number_c: number;
    data: Array<{
        occurrence: number;
        solution: number;
        is_triplet: boolean;
        number_a: number;
        number_b: number;
        number_c: number;
        datetime: string;
    }>
}
