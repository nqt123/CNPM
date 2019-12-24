import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

class UserManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    deleteUser(userId) {
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
                fetch('http://localhost:5000/users/' + userId, {
                    method: 'DELETE'
                }
                ).then(
                    data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        this.loadUsers();
                    }
                )
            }
        })
    }

    loadUsers() {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTAyMmQxZTIyM2RkNTM2YjQ4NWQ1NDkiLCJpYXQiOjE1NzcyMDA5Mjd9.R1m3pwVo72IdroENNdAgc0oSoUsjCHronk3pkbSmdvU'
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                if (data != null) {
                    this.setState({ users: data })
                    console.log(this.state.users);
                }
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
                                <th>Chức vụ</th>
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
                                    <td>{l.position === "User" ? "Người dùng" : "Quản trị"}</td>
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