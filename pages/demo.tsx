import React from 'react';
import {Modal} from '../components'

const Demo: React.FC = () => {
    return (
        <div>
            <h1>Modal Popup</h1>
            <Modal>
                <h1>Modal Content</h1>
            </Modal>
        </div>
    )
}

export default Demo;
