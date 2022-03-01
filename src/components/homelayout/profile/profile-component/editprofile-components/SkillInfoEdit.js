import style from '../../../../../styles/editprofile.module.css';

function SkillinfoEdit() {
    return ( 
        <>
          <div>
              <h4>Varsity related info</h4>
              <input className="input-field input me-1" type="text" placeholder=" Enter deprtment name"/>
              <input className="input-field input" type="text" placeholder=" Enter batch no."/>
          </div>
          <div className="mt-5">
              <h4>Work info</h4>
              <input className="input-field input me-1" type="text" placeholder=" Enter compnay name"/>
              <input className="input-field input" type="text" placeholder=" Enter working stack"/>
              <input className="input-field input mt-2" type="text" placeholder=" Enter working city"/>
          </div>
          <div className="mt-5">
              <h4>Profile links</h4>
              <input className="input-field input me-1" type="text" placeholder=" Github link"/>
              <input className="input-field input mt-2" type="text" placeholder=" LinkedIn link"/>
              <input className="input-field input mt-2 me-1" type="text" placeholder=" CF link"/>
              <input className="input-field input mt-2" type="text" placeholder=" Kackerrank link"/>
              <input className="input-field input mt-2" type="text" placeholder=" Leetcode link"/>
              <textarea className={`${style.textarea} input-field`} type="text" placeholder=" Enter description about working"/>
          </div>
        </>
     );
}

export default SkillinfoEdit;