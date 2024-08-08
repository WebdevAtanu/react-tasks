import React,{useState} from "react";
import { useFormik } from "formik";
import validationrules from "./validrules";

export default function Formik2()
{
    const[info,setInfo]=useState({});
    const formik=useFormik({
        initialValues:{
            name:"",
            age:"",
            email:"",
            loc:"",
            gen:"",
            edu:[],
            job:[]
        },
        validationSchema:validationrules,
        onSubmit:(data,action)=>{
            console.log(data);
            setInfo(data);
            action.resetForm();
        }
    })

    return(
        <>
          <form onSubmit={formik.handleSubmit}>

          <table>
              <tbody>
                  <tr>
                      <td>ENTER USERNAME</td>
                      <td><input type='text' name="name" onChange={formik.handleChange} value={formik.values.name}/></td>
                      <td><span style={{color:'red'}}>{formik.errors.name&&formik.touched.name?formik.errors.name:null}</span></td>
                  </tr>

                   <tr>
                      <td>ENTER AGE</td>
                      <td><input type='number' name='age' onChange={formik.handleChange} value={formik.values.age}/></td>
                      <td><span style={{color:'red'}}>{formik.errors.age&&formik.touched.age?formik.errors.age:null}</span></td>
                  </tr>

                  <tr>
                      <td>ENTER EMAIL</td>
                      <td><input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}/></td>
                      <td><span style={{color:'red'}}>{formik.errors.email&&formik.touched.email?formik.errors.email:null}</span></td>
                  </tr>

                  <tr>
                      <td>SELECT LOCATION</td>
                      <td>
                        <select name="loc" onChange={formik.handleChange} value={formik.values.loc}> 
                            <option value="">select location</option> 
                            <option value="shimla">shimla</option> 
                            <option value="kolkata">kolkata</option> 
                            <option value="howrah">howrah</option> 
                            <option value="new jalpaiguri">njp</option> 
                        </select> 
                      </td>
                      <td><span style={{color:'red'}}>{formik.errors.loc&&formik.touched.loc?formik.errors.loc:null}</span></td>
                  </tr>

                  <tr>
                      <td>SELECT GENDER</td>
                      <td>
                        <input type="radio" name="gen" value='male' onChange={formik.handleChange} />M  
                        <input type="radio" name="gen" value='female' onChange={formik.handleChange}/>F 
                      </td>
                      <td><span style={{color:'red'}}>{formik.errors.gen&&formik.touched.gen?formik.errors.gen:null}</span></td>
                  </tr>

                  <tr>
                      <td>SELECT EDUCATION</td>
                      <td>
                        <input type='checkbox' name='edu' value="bca" onChange={formik.handleChange}/>BCA
                        <input type='checkbox' name='edu' value="mca" onChange={formik.handleChange}/>MCA
                        <input type='checkbox' name='edu' value="btech" onChange={formik.handleChange}/>B.Tech 
                      </td>
                      <td><span style={{color:'red'}}>{formik.errors.edu&&formik.touched.edu?formik.errors.edu:null}</span></td>
                  </tr>

                  <tr>
                      <td>SELECT EDUCATION</td>
                      <td>
                        <select name="job" onChange={formik.handleChange} multiple value={formik.values.job}>
                            <option value="faculty">faculty</option>
                            <option value="developer">developer</option>
                            <option value="doctor">doctor</option>
                            <option value="sales">sales</option>
                        </select>
                      </td>
                      <td><span style={{color:'red'}}>{formik.errors.job&&formik.touched.job?formik.errors.job:null}</span></td>
                  </tr>
              </tbody>
          </table>
              <input type="submit" value="REGISTER" />
              <input type="button" value="RESET" onClick={formik.handleReset}/>
          </form>
        </>
    )
}