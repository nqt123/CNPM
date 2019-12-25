import React from 'react';
import Modal from 'react-awesome-modal';
import { Button, Table, FormControl, InputGroup, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../../../App.css';



class LessonManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
            lesson: {},
            visible: false,
            linkVideo: '',
            lessonId: '',
            edit: false,
            title: '',
            content: '',
            order: '',
            sectionTitle: '',
            searchText: ''
        }
    }

    openModal() {

        this.setState({
            visible: true,
            edit: false,
            title: '',
            content: '',
            order: '',
            sectionTitle: '',
            linkVideo: '',

        })

    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    openForEdit(lessonId) {
        this.getLesson(lessonId, (data) => {
            var lesson = data;
            this.setState({
                visible: true,
                edit: true,
                lessonId: lessonId,
                title: lesson.title,
                linkVideo: lesson.video,
                order: lesson.section.order,
                sectionTitle: lesson.section.title,
                content: lesson.content
            })
        });
    }

    getLesson(lessonId, callback) {
        fetch('https://nqt-api-cnpm.herokuapp.com/lessons/' + lessonId)
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lesson: data })
                callback(data);
            })
    }

    updateLesson(lessonId) {
        if (!this.state.linkVideo) {
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }
        fetch('https://nqt-api-cnpm.herokuapp.com/exercises/' + lessonId, {
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
        fetch('https://nqt-api-cnpm.herokuapp.com/lessons')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    createLesson() {
        if (!this.state.title
            || !this.state.linkVideo
            || !this.state.order
            || !this.state.sectionTitle
            || !this.state.content) {
            this.closeModal();
            console.log(this.state);
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }

        fetch('https://nqt-api-cnpm.herokuapp.com/lessons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                section: {
                    order: this.state.order,
                    title: this.state.sectionTitle
                },
                content: this.state.content,
                video: this.state.linkVideo ? this.state.linkVideo : "https://youtube.com",
            })

        })
            .then(results => {
                return results.json();
            }).then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Tạo bài giảng thành công',
                });
                this.loadLesson();
                this.closeModal();
            }).catch(erorr => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Thông tin bài giảng không chính xác',
                    text: 'Vui lòng kiểm tra lại',
                });
            })
    }


    updateLesson(lessonId) {
        if (!this.state.title
            || !this.state.linkVideo
            || !this.state.order
            || !this.state.sectionTitle
            || !this.state.content) {
            this.closeModal();
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }

        fetch('https://nqt-api-cnpm.herokuapp.com/lessons/' + lessonId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                section: {
                    order: this.state.order,
                    title: this.state.sectionTitle
                },
                video: this.state.linkVideo ? this.state.linkVideo : "https://youtube.com",
                content: this.state.content
            })

        })
            .then(results => {
                return results.json();
            }).then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cập nhật bài giảng thành công',
                });
                this.loadLesson();
                this.closeModal();
            }).catch(erorr => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Thông tin không chính xác',
                    text: 'Vui lòng kiểm tra lại',
                });
            })
    }

    searchLesson() {
        fetch('https://nqt-api-cnpm.herokuapp.com/lessons?title=' + this.state.searchText, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                if (data != null) {
                    this.setState({ lessons: data })
                } else {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Không bài giảng người dùng tương ứng',
                    });
                }
            })
    }

    deleteLesson(lessonId) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                fetch('https://nqt-api-cnpm.herokuapp.com/lessons/' + lessonId, {
                    method: 'DELETE'
                }
                ).then(
                    data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        this.loadLesson();
                    }
                )
            }
        })
    }

    componentDidMount() {
        this.loadLesson();
    }

    render() {
        const { linkVideo, title, content, order, sectionTitle, lessons } = this.state;
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý bài giảng</h2>
                </div>
                <div>
                    <Form inline style={{ marginLeft: '-0.5%' }}>
                        <InputGroup>
                            <FormControl style={{ width: 300 }} name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder="Tên bài giảng" className="ml-sm-2" size="sm" />
                            <InputGroup.Append>
                                <Button size="sm" onClick={() => this.searchLesson()}><i className="fa fa-search" aria-hidden="true"></i></Button>
                            </InputGroup.Append>
                            <InputGroup.Append style={{ marginLeft: 10 }}>
                                <Button size="sm" onClick={() => this.loadLesson()}>Tất cả</Button>
                            </InputGroup.Append>
                            <InputGroup.Append style={{ marginLeft: 10 }}>
                                <Button size="sm" onClick={() => this.openModal()}>Thêm bài giảng</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Bài</th>
                                <th>Tên bài giảng</th>
                                <th>Chương</th>
                                <th>Tên chương</th>
                                <th>Nội dung bài giảng</th>
                                <th>Đường dẫn video</th>
                                <th>Số lượt đã xem</th>
                                <th>Số lượt tải về</th>
                                <th>Chỉnh sửa</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody className="auto-scroll">
                            {lessons.map((l, i) =>
                                <tr>
                                    <td>{++i}</td>
                                    <td>{l.title}</td>
                                    <td>{l.section.order}</td>
                                    <td>{l.section.title}</td>
                                    <td>{l.content}</td>
                                    <td>{l.video}</td>
                                    <td>{l.viewNumber}</td>
                                    <td>{l.downloaded}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" onClick={() => this.openForEdit(l._id)}>
                                            <i class="fa fa-wrench" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" variant="danger" onClick={() => this.deleteLesson(l._id)}>
                                            <i class="fa fa-window-close" aria-hidden="true"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <Modal visible={this.state.visible} width="50%" height="80%" effect="fadeInDown">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <form style={{ width: '80%' }}>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        name="title"
                                        value={title}
                                        onChange={this.handleChange}
                                        class="form-control" placeholder="Tiêu đề bài giảng" required />

                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 20 }}>
                                <div className="col">
                                    <input type="text" name="linkVideo" value={linkVideo} onChange={this.handleChange} class="form-control" placeholder="Đường dẫn bài giảng" required />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 20 }}>
                                <div className="col">
                                    <input type="text" name="order" value={order} onChange={this.handleChange} class="form-control" placeholder="Số chương" required />
                                </div>
                                <div className="col">
                                    <input type="text" name="sectionTitle" value={sectionTitle} onChange={this.handleChange} class="form-control" placeholder="Tên chương" required />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 20 }}>
                                <div className="col" style={{ width: '50%' }}>
                                    <textarea style={{ height: 200 }} type="text" name="content" value={content} onChange={this.handleChange} class="form-control" placeholder="Nội dung cho bài" required />
                                </div>
                            </div>
                            <div className="row" style={{ justifyContent: 'center', marginTop: 30 }}>
                                {this.state.edit == true ?
                                    <Button size="sm" style={{ width: 100 }} onClick={() => this.updateLesson(this.state.lessonId)}>Lưu</Button> :
                                    <Button size="sm" style={{ width: 100 }} onClick={() => this.createLesson()}>Tạo bài giảng</Button>
                                }
                                <Button size="sm" style={{ width: 100, marginLeft: 10 }} onClick={() => this.closeModal()}>Hủy</Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}
export default LessonManagement;