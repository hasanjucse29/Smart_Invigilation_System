import React from 'react';
import './TeachersSection.css';
const TeachersSection = () => {
    return (
        <div className= 'container-fluid'>
            <div className="titleCnt">
                <h3>Exams </h3>
            </div>
            <div className="tableTeachers" id="tableCntTeacher">
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Teacher Name</th>
                    <th>Assigned</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>2</td>
                    <td><button type="button" class="btn btn-success" >Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>3</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>1</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102001</td>
                    <td>Bulbul Ahammad</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                <tr>
                    <td>102002</td>
                    <td>Sabrina Sharmin</td>
                    <td>0</td>
                    <td><button type="button" class="btn btn-success">Add</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default TeachersSection;
