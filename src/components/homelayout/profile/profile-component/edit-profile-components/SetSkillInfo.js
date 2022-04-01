import style from '../../../../../styles/set_profile.module.css';

function SetSkillinfo() {
    return ( 
        <>
          <div className="p-2">
              <h4>Varsity related info</h4>
              <input className="input-field w-50 me-2" type="text" name="department_name" placeholder=" Enter deprtment name"/>
              <input className="input-field" type="text" name="batch_no" placeholder=" Enter batch no."/>
          </div>
          <div className="mt-5 p-2">
              <h4>Work info</h4>
              <input className="input-field w-100" type="text" name="company_name" placeholder=" Enter compnay name"/>
              <input className="input-field w-50 mt-2 me-2" name="working_stack" type="text" placeholder=" Enter working stack"/>
              <input className="input-field" name="working_city" type="text" placeholder=" Enter working city"/>
          </div>
          <div className="mt-4 p-2">
              <h4>Profile links</h4>
              <input className="input-field w-100 mt-2" name="github" type="text" placeholder=" Github link"/>
              <input className="input-field w-100 mt-2" name="linkdin" type="text" placeholder=" LinkedIn link"/>
              <input className="input-field w-100 mt-2" name="codeforce" type="text" placeholder=" CF link"/>
              <input className="input-field w-100 mt-2" name="hackerrank" type="text" placeholder=" Hackerrank link"/>
              <input className="input-field w-100 mt-2" name="leetcode" type="text" placeholder=" Leetcode link"/>
              <textarea className={`${style.textarea} w-100 input-field`} name="personal_description" type="text" placeholder=" Enter description about working"/>
          </div>
        </>
     );
}

export default SetSkillinfo;