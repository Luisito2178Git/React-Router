import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const JobDetails = () => {

  const jobDetails = useLoaderData();
  const Navigate = useNavigate();

  return (
    <div className='job-details'>
      <button onClick={()=>{Navigate("/jobs")}}>Return</button>
      <p><b>Job Title:</b> {jobDetails.title}</p>
      <p><b>Salary:</b> {jobDetails.salary}</p>
      <p><b>Job Location:</b> {jobDetails.location}</p>
      <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam aperiam fuga sequi, aliquid fugit qui corrupti enim unde, dolore amet ipsa molestiae deleniti facere necessitatibus sed eum atque cum.</p>
      <button> Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
  const {id} = params;
  const res = await fetch("http://localhost:3000/jobs/" + id);
  if(!res.ok){
    throw Error("Could not found job details");
  }
  return await res.json();
  
}