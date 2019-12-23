import React from 'react';
import { Table } from 'react-bootstrap';


class CommentManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/comments')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ comments: data })
            })
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