import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addComplains,getFreeCops,assignFreeCops } from '../store/actions';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';

const OfficersPage: React.SFC = () => {
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(addComplains());
        setInterval(function(){ dispatch(assignFreeCops()) }, 30000);
    }, []);
    const complains = useSelector((state: any) => state.complains);
    const cops = useSelector((state: any) => state.users);
    const busyCops = useSelector((state: any) => state.busyUsers);
  
    

    const { id } = useParams();
    const sortedComplains = complains.sort((a: any, b: any) => {
        const c: any = new Date(b.complains.createdAt);
        const d: any = new Date(a.complains.createdAt);
        return c - d;
    });
    // console.log("data", id, complains);
    return (
        <>
            <NavBar page="police" name="Complaints and Cops" />
            <div className="hero-wrap" >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center">
                            <div className="col-sm col-md ibox">
                                {
                                    sortedComplains.map((complain: any, index: number) => {
                                        return <Cards key={index} complain={complain} userId={id} />
                                    })
                                }
                            </div>
                            <div className="col-sm col-md ibox profile-card" style={{ padding: '0px' }}>
                                <h1 style={{background:"#212529",marginBottom:"10px"}}>Unassigned Cops</h1>
                                <div className="align-items-center">
                                    {cops.length ==  0 && <h3 style={{marginLeft:"40%"}}>None</h3>}
                                <ul>
                                {
                                    cops.map((cop: any, index: number) => {
                                        return <li key={index}>
                                                <div >
            <img src="https://images.pexels.com/photos/303313/pexels-photo-303313.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="img"/>   
            <span>{cop.name}</span>
            </div>
            <br/>
                                              </li>
                                    })
                                } 
                                </ul>
                                </div>
                                
                                <br/>
                                <h1 style={{background:"#212529",marginBottom:"10px"}}>Cops in Action</h1>
                                <div>
                                {busyCops.length ==  0 && <h3 style={{marginLeft:"40%"}}>None</h3>}

                                    <ul>
                                {

busyCops.map((cop: any, index: number) => {
    return <li key={index}>
        <div >
            <img src="https://images.pexels.com/photos/303313/pexels-photo-303313.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="img"/>   
            <span>{cop.name}</span>
            </div>
          </li>
})
                                    
                                }
                                </ul>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficersPage;