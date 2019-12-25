import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import Swal from 'sweetalert2';

class ExerciseManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            lessons: [],
            exercise: {},
            visible: false,
            edit: false,
            question: '',
            awA: '',
            awB: '',
            awC: '',
            awD: '',
            awTrue: '',
            type: '',
            lessonId: '',
            exerciseId: ''
        }
    }

    openModal() {
        this.setState({
            visible: true,
            edit: false,
            question: '',
            awA: '',
            awB: '',
            awC: '',
            awD: '',
            awTrue: '',
            type: '',
            lessonId: '',
        });
        this.loadLesson();
    }

    openForEdit(exerciseId) {
        this.getExercise(exerciseId, (data) => {
            var exercise = data;
            this.setState({
                visible: true,
                edit: true,
                exerciseId: exerciseId,
                question: exercise.content,
                awA: exercise.answers[0].content,
                awB: exercise.answers[1].content,
                awC: exercise.answers[2].content,
                awD: exercise.answers[3].content,
                awTrue: exercise.correctAnswer,
                type: exercise.type,
                lessonId: exercise.lesson._id
            })
        });
        this.loadLesson();
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    loadLesson() {
        fetch('https://nqt-api-cnpm.herokuapp.com/lessons')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ lessons: data })
            })
    }

    loadExercises() {
        fetch('https://nqt-api-cnpm.herokuapp.com/exercises')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ exercises: data })
            })
    }

    getExercise(exerciseId, callback) {
        fetch('https://nqt-api-cnpm.herokuapp.com/exercises/' + exerciseId)
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ exercise: data })
                callback(data);
            })
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    createExercise() {
        if (!this.state.question
            || !this.state.awA
            || !this.state.awB
            || !this.state.awC
            || !this.state.awD
            || !this.state.awTrue
            || !this.state.type
            || !this.state.lessonId) {
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }

        fetch('https://nqt-api-cnpm.herokuapp.com/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: this.state.question,
                answers: [
                    { "number": 1, "content": this.state.awA },
                    { "number": 2, "content": this.state.awB },
                    { "number": 3, "content": this.state.awC },
                    { "number": 4, "content": this.state.awD }
                ],
                correctAnswer: parseInt(this.state.awTrue),
                lesson: this.state.lessonId,
                type: this.state.type
            })

        })
            .then(results => {
                return results.json();
            }).then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Tạo bài tập thành công',
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

    updateExercise(exerciseId) {
        if (!this.state.question
            || !this.state.awA
            || !this.state.awB
            || !this.state.awC
            || !this.state.awD
            || !this.state.awTrue
            || !this.state.type
            || !this.state.lessonId) {
            return Swal.fire({
                icon: 'error',
                title: 'Các trường không được để trống',
                text: 'Vui lòng điền đầy đủ thông tin!',
            });
        }

        fetch('https://nqt-api-cnpm.herokuapp.com/exercises/' + exerciseId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: this.state.question,
                answers: [
                    { "number": 1, "content": this.state.awA },
                    { "number": 2, "content": this.state.awB },
                    { "number": 3, "content": this.state.awC },
                    { "number": 4, "content": this.state.awD }
                ],
                correctAnswer: parseInt(this.state.awTrue),
                lesson: this.state.lessonId,
                type: this.state.type
            })

        })
            .then(results => {
                return results.json();
            }).then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cập bài tập thành công',
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

    deleteExercise(exerciseId) {
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
                fetch('https://nqt-api-cnpm.herokuapp.com/exercises/' + exerciseId, {
                    method: 'DELETE'
                }
                ).then(
                    data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        this.loadExercises();
                    }
                )
            }
        })
    }

    searchExericse() {
        fetch('https://nqt-api-cnpm.herokuapp.com/exercises?lessonId=' + this.state.lessonId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                if (data != null) {
                    this.setState({ exercises: data })
                } else {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Không có bài tập người dùng tương ứng',
                    });
                }
            })
    }

    componentDidMount() {
        this.loadExercises();
        this.loadLesson();
    }
    render() {
        const { exercises, lessons, question, awA, awB, awC, awD, awTrue, type, lessonId } = this.state;
        return (
            <React.Fragment>
                <div>
                    <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                        <h2>Quản lý bài tập</h2>
                    </div>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="row">
                            <div className="col">
                                <label>Tìm kiếm theo bài</label>
                                <select style={{ marginLeft: 10 }} name="lessonId" value={lessonId} onChange={this.handleChange}>
                                    <option>Hãy chọn bài</option>
                                    {
                                        lessons.map(l =>
                                            <option value={l._id}>{l.title}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <Button size="sm" style={{ width: 100 }} onClick={() => this.searchExericse()}>Tìm kiếm</Button>
                            <Button size="sm" style={{ width: 100, marginLeft: 20 }} onClick={() => this.loadExercises()}>Tất cả</Button>
                        </div>
                        <Button size="sm" style={{ width: 100, marginLeft: 50 }} onClick={() => this.openModal()}>Thêm bài tập</Button>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Bài</th>
                                    <th>Câu hỏi</th>
                                    <th>Các đáp án</th>
                                    <th>Đáp án đúng</th>
                                    <th>Chỉnh sửa</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exercises.map((e, n) =>
                                    <tr>
                                        <td>{++n}</td>
                                        <td>{e.lesson.title}</td>
                                        <td>{e.content}</td>
                                        <td>
                                            <ul style={{ listStyle: 'none' }}>
                                                {
                                                    e.answers.map((a, i) =>
                                                        <li>{++i}. {a.content}</li>
                                                    )
                                                }
                                            </ul>
                                        </td>
                                        <td>{e.correctAnswer}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Button size="sm" onClick={() => this.openForEdit(e._id)}>
                                                <i class="fa fa-wrench" aria-hidden="true"></i>
                                            </Button>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Button size="sm" variant="danger" onClick={() => this.deleteExercise(e._id)}>
                                                <i class="fa fa-window-close" aria-hidden="true"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        <Modal visible={this.state.visible} width="50%" height="80%" effect="fadeInDown">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <form style={{ width: '80%' }}>
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="question"
                                                value={question}
                                                onChange={this.handleChange}
                                                class="form-control" placeholder="Câu hỏi" required />

                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 20 }}>
                                        <div className="col">
                                            <label>Đáp án 1</label>
                                            <input type="text" name="awA" value={awA} onChange={this.handleChange} class="form-control" placeholder="Đáp án A" required />
                                        </div>
                                        <div className="col">
                                            <label>Đáp án 2</label>
                                            <input type="text" name="awB" value={awB} onChange={this.handleChange} class="form-control" placeholder="Đáp án B" required />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 20 }}>
                                        <div className="col">
                                            <label>Đáp án 3</label>
                                            <input type="text" name="awC" value={awC} onChange={this.handleChange} class="form-control" placeholder="Đáp án C" required />
                                        </div>
                                        <div className="col">
                                            <label>Đáp án 4</label>
                                            <input type="text" name="awD" value={awD} onChange={this.handleChange} class="form-control" placeholder="Đáp án D" required />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginTop: 20 }}>
                                        <div className="col" style={{ width: '50%' }}>
                                            <input type="text" name="awTrue" value={awTrue} onChange={this.handleChange} class="form-control" placeholder="Đáp án chính xác" required />
                                        </div>
                                    </div>
                                    <div className="col" style={{ marginTop: 20 }}>
                                        <div className="col">
                                            <label>Loại bài kiểm tra</label>
                                            <select style={{ marginLeft: 10 }} name="type" value={type} onChange={this.handleChange}>
                                                <option>Hãy chọn loại câu hỏi</option>
                                                <option value="Kiểm tra">Kiểm tra</option>
                                                <option value="Thường">Thường</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label>Bài học</label>
                                            <select style={{ marginLeft: 10 }} name="lessonId" value={lessonId} onChange={this.handleChange}>
                                                <option>Hãy chọn bài</option>
                                                {
                                                    lessons.map(l =>
                                                        <option value={l._id}>{l.title}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" style={{ justifyContent: 'center', marginTop: 30 }}>
                                        {this.state.edit == true ?
                                            <Button size="sm" style={{ width: 100 }} onClick={() => this.updateExercise(this.state.exerciseId)}>Lưu</Button> :
                                            <Button size="sm" style={{ width: 100 }} onClick={() => this.createExercise()}>Tạo bài tập</Button>
                                        }
                                        <Button size="sm" style={{ width: 100, marginLeft: 10 }} onClick={() => this.closeModal()}>Hủy</Button>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ExerciseManagement;