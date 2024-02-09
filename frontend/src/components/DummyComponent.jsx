// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Layout from './Layout'; // Assuming Layout component is defined elsewhere
// import Card from './Card'; // Assuming Card component is defined elsewhere

// const DummyComponent = () => {
//     const [status, setStatus] = useState('');
//     const [changeStatus, setChangeStatus] = useState('');

//     // Dummy data
//     const professional = {
//         professionals: [
//             {
//                 _id: 1,
//                 name: 'John Doe',
//                 service: 'Service A',
//                 sector: 'Sector X',
//                 status: 'Active',
//                 address: {
//                     pincodeData: {
//                         city: 'City A',
//                         district: 'District X',
//                         stateName: 'State Y',
//                         pincode: '123456'
//                     },
//                     cityDistrictTown: 'City A',
//                     landmark: 'Landmark A',
//                     locality: 'Locality A'
//                 }
//             },
//             {
//                 _id: 2,
//                 name: 'Jane Smith',
//                 service: 'Service B',
//                 sector: 'Sector Y',
//                 status: 'Expired',
//                 address: {
//                     pincodeData: {
//                         city: 'City B',
//                         district: 'District Y',
//                         stateName: 'State Z',
//                         pincode: '654321'
//                     },
//                     cityDistrictTown: 'City B',
//                     landmark: 'Landmark B',
//                     locality: 'Locality B'
//                 }
//             }
//         ]
//     };

//     // Dummy function, replace with actual implementation
//     const onProfessionalUpdate = (id) => {
//         console.log('Professional updated with id:', id);
//     };

//     return (
//         <div>
//             {Object.keys(professional.professionals).length === 0 ? (
//                 <div>
//                     No Professionals
//                 </div>
//             ) : (
//                 <Layout>
//                     <Link to='/professionals' className='btn btn-light'>
//                         <i className='fas fa-graduation-cap text-primary' /> Assign Professional
//                     </Link>
//                     <select onChange={(e) => setStatus(e.target.value)}>
//                         <option value={''}>All</option>
//                         <option key={'applied'} value={'applied'}> Applied </option>
//                         <option key={'active'} value={'active'}> Active </option>
//                         <option key={'expired'} value={'expired'}> Expired </option>
//                     </select>
//                     {professional.professionals.map((proItem, index) => (
//                         <Card
//                             style={{
//                                 margin: "10px 0"
//                             }}
//                             key={index}
//                             headerLeft={proItem.name}
//                         >
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     padding: "10px 10px",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 <div>
//                                     <span className="title">Service</span>
//                                     <br />
//                                     <span className="value">{proItem.service}</span>
//                                 </div>
//                                 <div>
//                                     <span className="title">Sector</span> <br />
//                                     <span className="value">{proItem.sector}</span>
//                                 </div>
//                                 <div>
//                                     <span className="title">Status</span> <br />
//                                     <span className="value">{proItem.status}</span>
//                                 </div>
//                                 <div>
//                                     <span className="title">Location</span> <br />
//                                     <small className="form-text">
//                                         {proItem.address.pincodeData.city !== 'NA' && (proItem.address.pincodeData.city)} 
//                                         &nbsp; {proItem.address.pincodeData.district !== 'NA' && proItem.address.pincodeData.district} 
//                                         &nbsp; {proItem.address.pincodeData.stateName !== 'NA' && proItem.address.pincodeData.stateName}
//                                         &nbsp; {proItem.address.pincodeData.pincode !== 'NA' && proItem.address.pincodeData.pincode}
//                                     </small>
//                                     <br/>
//                                     <span className="title">Address Entered</span> <br />
//                                     <small className="form-text">
//                                         &nbsp; {proItem.address.cityDistrictTown !== 'NA' && proItem.address.cityDistrictTown} 
//                                         &nbsp; {proItem.address.landmark !== 'NA' && proItem.address.landmark}
//                                         &nbsp; {proItem.address.locality !== 'NA' && proItem.address.locality}
//                                     </small>
//                                 </div>
//                             </div>
//                             <div
//                                 style={{
//                                     boxSizing: "border-box",
//                                     padding: "5px",
//                                     display: "flex",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         padding: "0 50px",
//                                         boxSizing: "border-box",
//                                     }}
//                                 >
//                                     <select onChange={(e) => setChangeStatus(e.target.value)}>
//                                         <option> Select Status</option>
//                                         <option key={'applied'} value={'applied'}> Applied </option>
//                                         <option key={'active'} value={'active'}> Active </option>
//                                         <option key={'expired'} value={'expired'}> Expired </option>
//                                     </select>
//                                 </div>
//                                 <div
//                                     style={{
//                                         padding: "0 50px",
//                                         boxSizing: "border-box",
//                                     }}
//                                 >
//                                     <button onClick={() => onProfessionalUpdate(proItem._id)}>
//                                         confirm
//                                     </button>
//                                 </div>
//                             </div>
//                         </Card>
//                     ))}
//                 </Layout>
//             )}
//         </div>
//     );
// };

// export default DummyComponent;
