import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import { deletecontact } from "./app/contactinfo";
import {Link} from "react-router-dom";

export default function Contact(){
    const dispatch = useDispatch();

    const data = useSelector((state)=>state.contact);
    console.log(data.info);
    var le = data.info.length;

    const handleDelete = (tmp)=>{
        dispatch(deletecontact({firstname:tmp}));
    }
    return(
        <div className="contactcont">
            {le==0 && 
            <div className="nocontact">
                <p>No contact found</p>
                <p>Please add contact from</p>
                <p>Create contact button</p>
            </div>
            }
            <div className="contactcardscontainer">
                {
                    data.info.map((i,j)=>{
                        return <div key={j} className="contactcard">
                                    <div className="contactname">
                                        <p>
                                            {i.payload.firstname}
                                        </p>
                                    </div>
                                    <div>
                                        <button className="contactbtn">
                                            <Link to={`update/${j}`} className="link">
                                                Edit
                                            </Link>
                                        </button>
                                        <button className="contactbtn" onClick={()=>handleDelete(i.payload.firstname)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                    })
                }
            </div>
            <div className="createcontactbtn">
                <button>
                    <Link to="/create" className="link">
                        Create contact
                    </Link>
                </button>
            </div>
        </div>
    )
}