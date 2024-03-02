import React from 'react';

function AboutUs() {
  const teamMembers = [
    { id: 1, name: 'Cesar Fimbres', role: 'CEO' },
    { id: 2, name: 'Juan el Borracho', role: 'Mandados' },
    { id: 3, name: 'Liz Duran', role: ' Director' },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Our Team</h2>
      <h2 className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2> 
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-4">
            <div className="card mb-3">
              <img src={`path_to_member_image_${member.id}.jpg`} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

