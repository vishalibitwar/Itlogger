import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'please enter the first and last name ' })
    } else {
      addTech({
        firstname,
        lastname
      });
      M.toast({ html: 'Tech Added ' });
    }
    setFirstName('');
    setLastName('');
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="firstname" value={firstname} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="firstname" className="active">FirstName</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input type="text" name="lastname" value={lastname} onChange={e => setLastName(e.target.value)} />
            <label htmlFor="lastname" className="active">LastName</label>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter  </a>
        </div>
      </div>
    </div>
  )
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
