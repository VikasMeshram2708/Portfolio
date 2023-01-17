import './Styles/Dashboard.css';

const Dashboard = () => {

  const handleGit = () => {
    window.open('https://github.com/VikasMeshram2708');
  };

  const handleLi = () => {
    window.open('https://www.linkedin.com/in/vikas-meshram-639099221/');
  };

  return (
    <>
      <div className="container card mb-4 mt-5">
        <div className="card-body text-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width:' 150px'}}/>
          <h5 className="my-3 fs-4">Vikas Meshram</h5>
          <p className="form-label fs-5 mb-1">Full Stack Developer</p>
          <p className="form-label fs-5 mb-4">Gondia, Maharashtra, India.</p>
          <p className="form-label fs-5"><i>meshramvikas744@gmail.com</i>
          </p>
          <div className="d-flex justify-content-center mb-2">
            <button onClick={handleGit} type="button" className="btn btn-secondary">Github</button>
            <button onClick={handleLi} type="button" className="btn btn-outline-primary ms-1">Linkedin</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;