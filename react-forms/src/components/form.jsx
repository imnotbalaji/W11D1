import {useState} from "react";


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

    const [error_message, SetError] = useState({
        name_error:"",
        email_error:"",
        phone_number_error:"",
        phone_type_error:"",
        staff_error:"",
        bio_error:"",
        email_notification_error:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let regex = /^[\w.-]+@[a-zA-Z\d.-]+.[a-zA-Z]{2,}$/;

        let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        SetError({
                name_error:"",
                email_error:"",
                phone_number_error:"",
                phone_type_error:"",
                staff_error:"",
                bio_error:"",
                email_notification_error:""})

        if (user.name === "") {
            // const newError = Object.assign({},error_message, {name_error: "Name cannot be empty" });
            SetError(previousErrors => {
                return Object.assign({}, previousErrors,{name_error: "Name cannot be empty" })
            });
        }
        if (user.bio.length > 280) {
            // const newError = Object.assign({},error_message, {bio_error: "Bio must be <280 characters long" });
            SetError(previousErrors =>  {
                return Object.assign({}, previousErrors,{bio_error: "Bio must be <280 characters long" })
            });
        }

        if (!user.email.match(regex)) {
            // const newError = Object.assign({},error_message, {email_error: "Please Format Email Correctly"});
            SetError(previousErrors =>  {
                return Object.assign({}, previousErrors,{email_error: "Please Format Email Correctly"})
            });
        }

        if (!user.phone_number.match(re)) {
            // const newError = Object.assign({},error_message, {phone_error: "Please Enter a Correct Phone Number"});
            SetError(previousErrors => {
                return Object.assign({}, previousErrors,{phone_error: "Please Enter a Correct Phone Number"})
            });
        }
  
    }

    const handleChange = (incomingKey) => {
       return (e) => {
        const newObj = Object.assign({},user, {[incomingKey]: e.target.value });
        setUser(newObj);
        console.log(user);
       }
    }
//  debugger
    return (<form className="form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={user.name} onChange={handleChange("name")} />
            {error_message && 
                (<p className="error"> {error_message.name_error}  </p>)
            }
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={user.email} onChange={handleChange("email")} />
            {error_message && 
                (<p className="error"> {error_message.email_error}  </p>)
            }
        </div>
        <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input id="phone-number" type="text" value={user.phone_number} onChange={handleChange("phone_number")}/>
            {error_message && 
                (<p className="error"> {error_message.phone_error}  </p>)
            }
        </div>
        <div>
            <label htmlFor="phone-type">Phone Type</label>
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
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" value={user.bio} onChange={handleChange("bio")}/>
            {error_message && 
                (<p className="error"> {error_message.bio_error}  </p>)
            }
        </div>
        <div>
            <label htmlFor="email-notifications">Email Notifications
            <input type="checkbox" name="email-notifications" value={user.email_notifications} onChange={handleChange("email_notifications")}/>
            </label>
        </div>
        <div>
            <button id="submit-button">
                Submit Button
            </button>
        </div>
    </form>
    )

}

export default Form 