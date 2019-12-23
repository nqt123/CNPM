import React from 'react';
import { Table, Button } from 'react-bootstrap';
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
                        <div>
                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default ExerciseManagement;