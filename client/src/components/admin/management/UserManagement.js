import React from 'react';
import { Table, FormControl, Form, Button, InputGroup } from 'react-bootstrap';

class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    deleteUser(userId) {
        fetch('http://localhost:5000/users/' + userId, {
            method: 'DELETE'
        }
        ).then(
            data => {
                alert("Xóa thành công");
                this.loadUsers();
            }
        )
    }

    loadUsers() {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVkMWYzZGVmYTU5ZDMwYTgwMTQ3MDYiLCJpYXQiOjE1NzcxMjQxMzN9.yn33C7Lao0KCIkyo8Gi17sHXvEyGvsPR-ttSbKXNmIQ'
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ users: data })
            })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý người dùng</h2>
                </div>
                <div>
                    <Form inline style={{ marginLeft: '-0.5%' }}>
                        <InputGroup>
                            <FormControl style={{ width: 300 }} type="text" placeholder="Tên đăng nhập, email" className="ml-sm-2" size="sm" />
                            <InputGroup.Append>
                                <Button size="sm"><i className="fa fa-search" aria-hidden="true"></i></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tài khoản</th>
                                <th>Họ và tên</th>
                                <th>Số điện thoại</th>
                                <th>Giới tính</th>
                                <th>Địa chỉ</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(l =>
                                <tr>
                                    <td>1</td>
                                    <td>{l.username}</td>
                                    <td>{l.lastName} {l.firstName}</td>
                                    <td>{l.phoneNumber}</td>
                                    <td>{l.gender === "male" ? "Nam" : "Nữ"}</td>
                                    <td>{l.location}</td>
                                    <td>{l.email}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Button size="sm" variant="danger" onClick={() => this.deleteUser(l._id)}>
                                            <i class="fa fa-window-close" aria-hidden="true"></i>
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
export default UserManagement;