import './index.css'
const UserItem = (props)=>{
    const {userDetails} = props
    const {
        title,
        firstName ,
        lastName ,
        email ,
        streetNumber ,
        streetName ,
        city ,
        state ,
        country ,
        postcode,
        imgUrl
    } = userDetails
    return(<div className="user-card">
        <img src={imgUrl} className="user-image" alt = {firstName}/>
        <div class="user-text-container">
            <h2 className="name">{title}, {firstName} {lastName}</h2>
            <p className="email">{email}</p>
            <p className="address">{streetNumber},{streetName},{city}</p>
            <p className="address">{state},{country},{postcode}</p>

        </div>
    </div>)
}

export default UserItem;