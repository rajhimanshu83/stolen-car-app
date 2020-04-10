import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { complainsStatusChange, assignUnassignStatus } from '../store/actions';

const AdapterLink = ((props: any) => (
    <Link {...props} />
));

const Cards: React.FC<any> = (props) => {
    const dispatch: any = useDispatch();
    const complain = props.complain.complains;
    const officerAssigned = props.complain.officerAssigned;
    let assigned = false;
    if (officerAssigned && officerAssigned.officerUserId === props.userId) {
        assigned = true;
    }

    return (
        <React.Fragment>
            <div className="center">

            <div className="card">
            <div className="additional">
                <div className="user-card">
                <svg width="110" height="110" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" className="center">
                <defs>
                <clipPath id="scene">
                    <circle cx="125" cy="125" r="115"/>
                </clipPath>
                <clipPath id="lips">
                    <path d="M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z" />
                </clipPath>
                </defs>
                <circle cx="125" cy="125" r="120" fill="rgba(0,0,0,0.15)" />
                <g stroke="none" strokeWidth="0" clipPath="url(#scene)">
                <rect x="0" y="0" width="250" height="250" fill="#b0d2e5" />
                <path id="start" className="st0" d="M182.6,156.7l49.9,78.1c6.5,10.2-0.8,23.6-12.9,23.6H80.4c-12.1,0-19.4-13.4-12.9-23.6l49.9-78.1l0,0
                       c-17.4-11.2-28.8-31.1-27.9-53.5c1.2-31.2,26.5-56.6,57.6-58c34.8-1.6,63.4,26.1,63.4,60.5c0,4.4-0.5,8.7-1.4,12.9
                       c-0.6,2.7-1.3,5.2-2.2,7.7c-0.9,2.5-2,4.9-3.2,7.3C198.8,143,191.5,151,182.6,156.7"/>

  <path id="end" className="st0" d="M182.6,156.7l49.9,78.1c6.5,10.2-0.8,23.6-12.9,23.6H80.4c-12.1,0-19.4-13.4-12.9-23.6l49.9-78.1l0,0
    c-17.4-11.2-28.8-31.1-27.9-53.5c1.2-31.2,26.5-56.6,57.6-58c34.8-1.6,63.4,26.1,63.4,60.5c0,4.4-31.5,9.3-31.5,9.3s-28.1,3.5-29,6
    s54.9,10.3,53.6,12.6C198.8,143,191.5,151,182.6,156.7"/>
                </g>
                </svg>
                <div className="level center name">
                    {complain.customerName || "Unknown"}
                </div>
                <div className="level_complete center name">
                    {complain.isCompleted ? "Resolved" : "Unsolved"}
                </div>
          </div>

            </div>
            <div className="general">
            {!complain.isCompleted && complain.assignedTo && <button type="button" className={assigned ? "card-button red-button" : "card-button"}
            onClick={() => dispatch(complainsStatusChange(complain.id, !complain.isCompleted ))}>Mark Resolved</button>}
                <h1>{complain.carModel || "Unknown"}</h1>
                <p>{complain.notes || "No Description"}</p>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Cards;