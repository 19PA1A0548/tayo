import { useState } from "react";
import {useDispatch} from "react-redux";
import { addcontact } from "./app/contactinfo";
import { useNavigate } from "react-router-dom";
export default function Create(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[data,setData] = useState({
        firstname: "",
        lastname: "",
        status: ""
      }) 

    const handleChange = (e)=>{
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.value
          }));
    }
    const onChangeValue = (e)=>{
        var val = e.target.value;
        setData((prev)=> ({...prev,status:val}));
    }
    const handleClick = ()=>{
        console.log(data);
        dispatch(addcontact(data));
        navigate("/");
    }

    return(
        <div className="contactform">
            <h3>Create Contact</h3>
            <div>
                <p>
                    First Name: <input name="firstname" value={data.firstname} onChange={(e)=>handleChange(e)} type="text"/>
                </p>
                <p>
                    Last Name:  <input name="lastname"value={data.lastname} onChange={(e)=>handleChange(e)} type="text"/>
                </p>
                <p onChange={onChangeValue}>
                    Status: <input type="radio" value="Active" name="status" /> Active
                            <input type="radio" value="In active" name="status" /> Inactive
                </p>
                <button onClick={handleClick}>
                    Save contact
                </button>
            </div>
        </div>
    )
}