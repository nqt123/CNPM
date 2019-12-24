import React from 'react';
import { Table, FormControl, Form, Button, InputGroup } from 'react-bootstrap';
import Modal from 'react-awesome-modal';

class LessonManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
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

    loadLesson() {
        fetch('http://localhost:5000/lessons')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }

    componentDidMount() {
        this.loadLesson();
    }

    render() {
        const { lessons } = this.state;
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý bài giảng</h2>
                </div>
                {/* <div>
                    <Form inline style={{ marginLeft: '-0.5%' }}>
                        <InputGroup>
                            <FormControl style={{ width: 300 }} type="text" placeholder="Tên bài giảng" className="ml-sm-2" size="sm" />
                            <InputGroup.Append>
                                <Button size="sm"><i className="fa fa-search" aria-hidden="true"></i></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </div> */}
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Bài</th>
                                <th>Tên bài giảng</th>
                                <th>Tên chương</th>
                                <th>Số lượt đã xem</th>
                                <th>Số lượt tải về</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map(l =>
                                <tr>
                                    <td>1</td>
                                    <td>{l.title}</td>
                                    <td>{l.section.title}</td>
                                    <td>{l.viewNumber}</td>
                                    <td>{l.downloaded}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" onClick={() => this.openModal()}>
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInDown">
                    <div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default LessonManagement;