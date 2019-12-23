import React from 'react';
import { Table, FormControl, Form, Button, InputGroup } from 'react-bootstrap';

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

    componentDidMount() {
        fetch('http://localhost:5000/exercises')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }
    render() {
        const { exercises } = this.state;
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý bài tập</h2>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Câu hỏi</th>
                                <th>Các đáp án</th>
                                <th>Đáp án đúng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {exercises.map(l =>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm">
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ExerciseManagement;