import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './AddEdit.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo ✌️" />

      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default AddEditPage;
