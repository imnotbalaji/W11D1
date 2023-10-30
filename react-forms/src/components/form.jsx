import useState from "react";


const Form = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_number: "",
        phone_type: "", 
        staff: "",
        bio: "",
        email_notifications: ""
    })

    const handleSubmit = () => {
        console.log("submitted")
    }

    const handleChange = (incomingKey) => {
        console.log(incomingKey)
    }

    return (<form className="form" onSubmit={handleSubmit}>
        <div>
            <label htmlfor="name">Name</label>
            <input id="name" type="text" value={user.name} onChange={handleChange("name")}></input>
        </div>
        <div>
            <label htmlfor="email">Email</label>
            <input id="email" type="text" value={user.email} onChange={handleChange("email")}></input>
        </div>
        <div>
            <label htmlfor="phone-number">Phone Number</label>
            <input id="phone-number" type="text" value={user.phone_number} onChange={handleChange("phone_number")}></input>
        </div>
        <div>
            <label htmlfor="phone-type">Phone Type</label>
            <select id="phone-type" name="phone-type" value={user.phone_type} onChange={handleChange("phone_type")}>
                <option value="home">Home</option>
                <option value="work">work</option>
                <option value="mobile">mobile</option>
            </select>
        </div>
        <div>
            <label> Instructor
            <input type="radio" name="staff" value={user.staff} onChange={handleChange("staff")}/>
            </label>
            <label> Student
            <input type="radio" name="staff" value={user.staff} onChange={handleChange("staff")}/>
            </label>
        </div>
        <div>
            <label htmlfor="bio">Bio</label>
            <textarea id="bio" value={user.bio} onChange={handleChange("bio")}/>
        </div>
        <div>
            <label htmlfor="email-notifications">Email Notifications
            <input type="checkbox" name="email-notifications" value={user.email_notifications} onChange={handleChange("email_notifications")}/>
            </label>
        </div>
        <div>
            <button id="submit-button" value="submit">
                Submit Button
            </button>
        </div>
    </form>
    )

}

export default Form 