import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import { updatecontact } from "./app/contactinfo";
import { useNavigate } from "react-router-dom";
export default function Edit(){
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[data,setData] = useState({
        firstname: "",
        lastname: "",
        status: ""
      }) 
    const values = useSelector((state)=>state.contact);
    useEffect(()=>{
        console.log(id);
        console.log(values.info[id]);
        setData(values.info[id].payload);
    },[])

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
        dispatch(updatecontact(data));
        navigate("/");
    }
    return(
        <div className="contactform">
            <h3>Update Contact</h3>
            {data&&<div>
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
                    Update contact
                </button>
            </div>}
        </div>
    )
}