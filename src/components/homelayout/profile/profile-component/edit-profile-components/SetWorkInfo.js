function SetWorkinfo() {
    return (
        <>
            <div>
                <h4>Looking for job.?</h4>
                <div className="mt-2 ms-3">
                    <label><input type="radio" value={"active"} name="job_status" /> Active</label><br />
                    <label><input type="radio" value={"inactive"} name="job_status" /> Inactive</label>
                </div>
            </div>
            <div className="mt-5">
                <h4>Share your CV</h4>
                <input type="file" name="cv"/>
            </div>
        </>
    );
}

export default SetWorkinfo;