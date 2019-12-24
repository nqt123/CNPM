import React from 'react';
import { Table, FormControl, Form, Button, InputGroup } from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import Swal from 'sweetalert2';


class LessonManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
            lesson: {},
            visible: false,
            linkVideo: '',
            lessonId: ''
        }
    }

    openModal(lessonId) {
        fetch('http://localhost:5000/lessons/' + lessonId)
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({
                    lesson: data,
                    visible: true,
                    linkVideo: data.video,
                    lessonId: lessonId
                })
            })
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    updateLesson(lessonId) {
        if (!this.state.linkVideo) {
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }
        fetch('http://localhost:5000/exercises/' + lessonId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                video: this.state.linkVideo
            })

        })
            .then(results => {
                return results.json();
            }).then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cập bài bài giảng công',
                });
                this.loadExercises();
                this.closeModal();
            }).catch(erorr => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Thông tin không chính xác',
                    text: 'Vui lòng kiểm tra lại',
                });
            })
    }

    loadLesson() {
        fetch('http://localhost:5000/lessons')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }

    handleChange = event => {
        this.setState({ linkVideo: event.target.value });
    };

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
                                <th>Đường dẫn video</th>
                                <th>Số lượt đã xem</th>
                                <th>Số lượt tải về</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map(l =>
                                <tr>
                                    <td>{l.order}</td>
                                    <td>{l.title}</td>
                                    <td>{l.section.title}</td>
                                    <td>{l.video}</td>
                                    <td>{l.viewNumber}</td>
                                    <td>{l.downloaded}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" onClick={() => this.openModal(l._id)}>
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <Modal visible={this.state.visible} width="80%" height="50%" effect="fadeInDown">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <form style={{ width: '80%' }}>
                            <div className="row">
                                <div className="col">
                                    <label>Đường dẫn video bài giảng</label>
                                    <input
                                        type="text"
                                        name="video"
                                        value={this.state.linkVideo}
                                        onChange={this.handleChange}
                                        class="form-control" placeholder="Đường dẫn video bài giảng" required />
                                    <div className="row" style={{ marginTop: 20, justifyContent: 'center' }}>
                                        <Button size="sm" style={{ width: 100 }} onClick={() => this.updateLesson(this.state.lessonId)}>Lưu</Button>
                                        <Button size="sm" style={{ width: 100, marginLeft: 20 }} onClick={() => this.closeModal()}>Hủy</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default LessonManagement;