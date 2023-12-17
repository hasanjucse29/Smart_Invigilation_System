import ExamsSection from './ExamsSection';
import GlobalNav from './GlobalNav';
import TeachersSection from './TeachersSection';
import './ExamsSection.css';
import Popup from './Popup';

const ScrollPage = () => {
    return (
        <div className="container-fluid">
            <div className="row cnt">
                <div className="col-6">
                    <div className="tableCntSP"><ExamsSection /></div>
                </div>
                <div className="col-6">
                    <div className="tableCntSP"><TeachersSection /></div>
                </div>
            </div>
            <Popup/>
        </div>
    );
};

export default ScrollPage;
