import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import LessonManagement from "./management/LessonManagement";
import ExerciseManagement from "./management/ExerciseManagement";
import UserManagement from "./management/UserManagement";
import ExamManagement from "./management/ExamManagement";
import CommentManagement from "./management/CommentManagement";
import SignIn from "../SignIn";

class Dashboard extends Component {
    state = {
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };
    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };
    render() {
        const { expanded } = this.state;
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <div>
                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/admin/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}

                                onToggle={this.onToggle}
                            >
                                <SideNav.Toggle />
                                <SideNav.Nav defaultSelected="lesson">
                                    <NavItem eventKey="lesson">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-book" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Quản lý bài giảng
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="exercise">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Quản lý bài kiểm tra
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="exam">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-folder" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Quản lý đề thi
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="user">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Quản lý người dùng
                                    </NavText>
                                    </NavItem>
                                    <NavItem eventKey="comment">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-comment" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Phản hồi của người dùng
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                        </div>
                        <div style={{
                            marginLeft: expanded ? 260 : 84,
                            marginTop: 50,
                            paddingRight: 30
                        }}>
                            <main>
                                <Route path="/admin" exact component={props => <LessonManagement />} />
                                <Route path="/admin/lesson" exact component={props => <LessonManagement />} />
                                <Route path="/admin/exercise" component={props => <ExerciseManagement />} />
                                <Route path="/admin/exam" component={props => <ExamManagement />} />
                                <Route path="/admin/user" component={props => <UserManagement />} />
                                <Route path="/admin/comment" component={props => <CommentManagement />} />
                            </main>
                        </div>
                    </React.Fragment>
                )}
                />
            </Router>
        );
    }
}
export default Dashboard;
