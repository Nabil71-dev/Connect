import style from '../../../../../styles/set_profile.module.css';

function SetSkillinfo() {
    return ( 
        <>
          <div className="p-2">
              <h4>Varsity related info</h4>
              <input className="input-field w-50 me-2" type="text" placeholder=" Enter deprtment name"/>
              <input className="input-field" type="text" placeholder=" Enter batch no."/>
          </div>
          <div className="mt-5 p-2">
              <h4>Work info</h4>
              <input className="input-field w-100" type="text" placeholder=" Enter compnay name"/>
              <input className="input-field w-50 mt-2 me-2" type="text" placeholder=" Enter working stack"/>
              <input className="input-field" type="text" placeholder=" Enter working city"/>
          </div>
          <div className="mt-4 p-2">
              <h4>Profile links</h4>
              <input className="input-field w-100 mt-2" type="text" placeholder=" Github link"/>
              <input className="input-field w-100 mt-2" type="text" placeholder=" LinkedIn link"/>
              <input className="input-field w-100 mt-2" type="text" placeholder=" CF link"/>
              <input className="input-field w-100 mt-2" type="text" placeholder=" Kackerrank link"/>
              <input className="input-field w-100 mt-2" type="text" placeholder=" Leetcode link"/>
              <textarea className={`${style.textarea} w-100 input-field`} type="text" placeholder=" Enter description about working"/>
          </div>
        </>
     );
}

export default SetSkillinfo;