import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import Modal from 'react-awesome-modal';


class ExerciseManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    loadExercises() {
        fetch('http://localhost:5000/exercises')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }

    componentDidMount() {
        this.loadExercises();
    }
    render() {
        const { exercises } = this.state;
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý bài tập</h2>
                </div>
                <Button size="sm" style={{ width: 200 }} onClick={() => this.openModal()}>Thêm bài tập</Button>
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Bài</th>
                                <th>Câu hỏi</th>
                                <th>Các đáp án</th>
                                <th>Đáp án đúng</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {exercises.map(l =>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    {/* <td style={{ textAlign: 'center' }}>
                                        <Button size="sm">
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </Button>
                                    </td> */}
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Modal visible={this.state.visible} width="50%" height="80%" effect="fadeInDown">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Form style={{ width: '50%' }}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Câu hỏi</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập vào câu hỏi" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Đáp án A</Form.Label>
                                    <Form.Control type="password" placeholder="Đáp án A" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Đáp án B</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Đáp án C</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Đáp án D</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Đáp án chính xác</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Bài</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Loại</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                               
                                <Button variant="primary" type="submit">
                                    Tạo
                                </Button>
                            </Form>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default ExerciseManagement;