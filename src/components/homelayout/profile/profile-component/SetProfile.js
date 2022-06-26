import { Formik, Form } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaperPlane, faUpload } from '@fortawesome/free-solid-svg-icons'

import SetSkillinfo from './edit-profile-components/SetSkillInfo';
import SetUserinfo from './edit-profile-components/SetUserInfo';
import style from '../../../../styles/set_profile.module.css';
import logo from '../../../../styles/assets/Logo.svg'
import pic from '../../../../styles/assets/Picture.svg';


function EditProfile() {
  const navigate = useNavigate()

  const [job, setJob] = useState()
  const [description, setDescription] = useState()
  const [profilepic, setProfilepic] = useState(null);
  const [cv, setCv] = useState(null);

  const profilepicUpload = (e) => {
    e.preventDefault()

    if (profilepic) {
      const form_Data = new FormData()

      form_Data.append('user_pic', profilepic);
      fetch(`http://localhost:8080/user/profilepic/${sessionStorage.getItem('currentuser')}`, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        method: 'POST',
        body: form_Data
      })
        .then(response => response.json())
        .then(result => {
          alert(result.message)
        })
    }
  }
  const cvUpload = (e) => {
    e.preventDefault()
    if (cv) {
      const form_Data = new FormData()

      form_Data.append('cv', cv);
      fetch(`http://localhost:8080/user/profilepic/${sessionStorage.getItem('currentuser')}`, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        method: 'POST',
        body: form_Data
      })
        .then(response => response.json())
        .then(result => {
          alert(result.message)
        })
    }
  }
  const profileData = data => {
    data.personal_description = description;
    const form_Data = new FormData()

    form_Data.append('username', data.username);
    form_Data.append('fullname', data.fullname);
    form_Data.append('personalweb', data.personalweb)
    form_Data.append('department_name', data.department_name)
    form_Data.append('batch_no', data.batch_no)
    form_Data.append('job_status', job)
    form_Data.append('company_name', data.company_name)
    form_Data.append('working_stack', data.working_stack)
    form_Data.append('company_city', data.company_city)
    form_Data.append('github', data.github)
    form_Data.append('linkdin', data.linkdin)
    form_Data.append('codeforce', data.codeforce)
    form_Data.append('hackerrank', data.hackerrank)
    form_Data.append('leetcode', data.leetcode)
    form_Data.append('personal_description', data.personal_description);

    fetch(`http://localhost:8080/user/updateprofile/${sessionStorage.getItem('currentuser')}`, {
      headers: {
        'authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      method: 'POST',
      body: form_Data
    })
      .then(response => response.json())
      .then(result => {
        alert(result.message)
        navigate(-1)
      })
  }

  return (
    <>
      <Formik initialValues={
        { fullname: '', username: '', personalweb: '', department_name: '', batch_no: '', company_name: '', working_stack: '', company_city: '', github: '', linkdin: '', codeforce: '', hackerrank: '', leetcode: '' }} onSubmit={(value) => { profileData(value) }} >
        {() => (
          <Form>
            <div className="container-fluid pt-4">
              <div className="row">
                <img src={logo} alt="logo" className={`${style.logo} ms-3`} />
              </div>
              <div className="row">
                <div className="col-5 ms-3 me-1">
                  <img className={`${style.picup}`} src={pic} alt="profile-pic" /><br />
                  <input onClick={(e) => setProfilepic(e.target.files[0])} type="file" name="user_pic" />
                  <button className="button-main" onClick={profilepicUpload}>Picture <FontAwesomeIcon icon={faUpload} /></button>
                  <SetUserinfo />
                  <div className="mt-5">
                    <h3>Looking for job.?</h3>
                    <div className="mt-2">
                      <label><input onBlur={(e) => { setJob(e.target.value) }} type="radio" value={"active"} name="job_status" /> Active</label><br />
                      <label><input onBlur={(e) => { setJob(e.target.value) }} type="radio" value={"inactive"} name="job_status" /> Inactive</label>
                    </div>
                  </div>
                </div>
                <div className="col-6 pt-5">
                  <div className="mb-5 p-2">
                    <marquee><h4 className="text-success">Just input your data as you want to update your profile</h4></marquee>
                    <h3>Share your CV</h3>
                    <input onClick={(e) => setCv(e.target.files[0])} className="mb-2" type="file" name="cv" />
                    <button className="button-main" onClick={cvUpload}>CV upload <FontAwesomeIcon icon={faUpload} /></button>
                  </div>
                  <SetSkillinfo />
                  <div className="form__group field p-2">
                    <textarea onBlur={(e) => { setDescription(e.target.value) }} className={`${style.textarea} form__field w-100`} name="personal_description" type="text" placeholder=" Enter description about working" />
                    <label htmlFor="personal_description" className="form__label"> Enter description about working</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="container text-end mt-4">
              <button className="button-main mb-5" type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Submit</button>
              <NavLink to="/home"><button className="button-main ms-4 mb-5"><FontAwesomeIcon icon={faHouse} /> Home</button></NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditProfile;
