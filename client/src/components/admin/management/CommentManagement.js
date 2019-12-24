import React from 'react';
import { Table, Button } from 'react-bootstrap';


class CommentManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    deleteComment(commentId) {
        fetch('http://localhost:5000/comments/' + commentId, {
            method: 'DELETE'
        }
        ).then(
            data => {
                alert("Xóa thành công");
                this.loadComments();
            }
        )
    }

    loadComments() {
        fetch('http://localhost:5000/comments')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ comments: data })
            })
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {
        const { comments } = this.state;
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
                            {comments.map(l =>
                                <tr>
                                    <td>1</td>
                                    <td>Đỗ Tiến Thắng</td>
                                    <td>thangdo0212</td>
                                    <td>{l.content}</td>
                                    <td>{l.rated} sao</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" variant="danger" onClick={() => this.deleteComment(l._id)}>
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

export default CommentManagement;