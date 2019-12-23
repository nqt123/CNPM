import React from 'react';
import LoaiDethi from '../../Dethi';

class ExamManagement extends React.Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%', borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: 2, borderStyle: 'solid', marginBottom: 20 }}>
                    <h2>Quản lý đề thi</h2>
                </div>
                <div>
                    <LoaiDethi />
                </div>
            </div>
        );
    }
}

export default ExamManagement;