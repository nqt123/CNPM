import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';



class CommentManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    deleteComment(commentId) {
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
                fetch('https://nqt-api-cnpm.herokuapp.com/comments/' + commentId, {
                    method: 'DELETE'
                }
                ).then(
                    data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        this.loadComments();
                    }
                )
            }
        })
    }

    loadComments() {
        fetch('https://nqt-api-cnpm.herokuapp.com/comments', {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTAyMmQxZTIyM2RkNTM2YjQ4NWQ1NDkiLCJpYXQiOjE1NzcyMDA5Mjd9.R1m3pwVo72IdroENNdAgc0oSoUsjCHronk3pkbSmdvU'
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ comments: data });
            })
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {
        const { comments } = this.state;
        console.log(comments);
        if (comments) {
            return (
                <div>
                    <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                        <h2>Phản hồi của người dùng</h2>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên người dùng</th>
                                    <th>Tài khoản</th>
                                    <th>Bài</th>
                                    <th>Nội dung</th>
                                    <th>Đánh giá</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {comments.map((c, i) =>
                                    <tr>
                                        <td>{++i}</td>
                                        <td>{c.userId.lastName} {c.userId.firstName}</td>
                                        <td>{c.userId.username}</td>
                                        <td>{c.lessonId != null ? c.lessonId : "Tế bào nhân sơ"}</td>
                                        <td>{c.content}</td>
                                        <td>{c.rated} sao</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Button size="sm" variant="danger" onClick={() => this.deleteComment(c._id)}>
                                                <i className="fa fa-window-close" aria-hidden="true"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                        <h2>Phản hồi của người dùng</h2>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên người dùng</th>
                                    <th>Tài khoản</th>
                                    <th>Nội dung</th>
                                    <th>Đánh giá</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {comments.map((c, i) =>
                                    <tr>
                                        <td>{++i}</td>
                                        <td>Đỗ Tiến Thắng</td>
                                        <td>thangdo0212</td>
                                        <td>{c.content}</td>
                                        <td>{c.rated} sao</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Button size="sm" variant="danger" onClick={() => this.deleteComment(c._id)}>
                                                <i className="fa fa-window-close" aria-hidden="true"></i>
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
}

export default CommentManagement;