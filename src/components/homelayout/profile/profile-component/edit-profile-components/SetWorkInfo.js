function SetWorkinfo() {
    return (
        <>
            <div>
                <h4>Looking for job.?</h4>
                <div className="mt-2 ms-3">
                    <label><input type="radio" /> Active</label><br />
                    <label><input type="radio" /> Inactive</label>
                </div>
            </div>
            <div className="mt-5">
                <h4>Share your CV</h4>
                <input type="file" />
            </div>
        </>
    );
}

export default SetWorkinfo;