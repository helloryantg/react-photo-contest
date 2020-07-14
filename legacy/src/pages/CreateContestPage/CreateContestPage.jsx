import React from 'react';
import { Link } from 'react-router-dom';
import './CreateContestPage.css';

const CreateContestPage = (props) => (
        <div className="CreateContestPage">
            <form className="flexed_column_center" onSubmit={props.handleCreateContest} >
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="description" name="description"  />
                <input type="text" placeholder="start date" name="startDate" />
                <input type="text" placeholder="endDate" name="endDate" />
                <button>Create Contest</button>
                <Link onClick={props.handleMainPageClick} to='/'>Cancel</Link>
            </form>        
        </div>
);

export default CreateContestPage;