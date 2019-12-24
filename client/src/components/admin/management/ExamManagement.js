import React from 'react';
import Modal from 'react-awesome-modal';
import { Button } from 'react-bootstrap';
import LoaiDethi from '../../LoaiDethi';


class ExamManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý đề thi</h2>
                </div>
                <div>
                    <LoaiDethi />
                </div>
                <Button size="sm" style={{ width: 100, marginTop: 50 }} onClick={() => this.openModal()}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </Button>
                <Modal visible={this.state.visible} width="50%" height="80%" effect="fadeInDown">
                    <div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ExamManagement;