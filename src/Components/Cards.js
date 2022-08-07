import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

function Cards() {
    const [list,setList]=useState([])
useEffect(()=>{
axios.get('https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/dam-details').then(response=>{
    setList(response.data)
})
},[])

  return (
    <div>
        
 <Card style={{ width: '500px', height:'50%'}} className='pr-3'>
    
            <Card.Body>

        <ol className='list-group list-group-numbered'>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Dam Name</div>
                </div>
                <span className='badge bg-primary'>idukki dam</span>

            </li>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Project id</div>
                </div>
                <span className='badge bg-primary'>101</span>

            </li>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Inspection start date</div>
                </div>
                <span className='badge bg-primary'>2</span>

            </li>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Inspection end date</div>
                </div>
                <span className='badge bg-primary'>3</span>

            </li>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>River</div>
                </div>
                <span className='badge bg-primary'>periyar</span>

            </li>
            <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Location of dam</div>
                </div>
                <span className='badge bg-primary'>idukki</span>

            </li>
            
        </ol>
        
        <div className='text-center'>
        <Button variant="primary" onClick={()=>{fetch()}}>Open Soft Copy Report</Button>
        </div>
     
      </Card.Body>
    
      
    </Card>
     
    </div>
  )
}

export default Cards