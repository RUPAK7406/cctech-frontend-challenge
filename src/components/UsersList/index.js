import {Component} from 'react';
import UserItem from '../UserItem'
import './index.css'

class UsersList extends Component{

    state = {usersData : []}

    getUserDetails = async () =>{
        let details = await fetch('https://randomuser.me/api/?results=10')
        let response =  await details.json()
        const formatedData = response.results.map(eachItem=>({
            title : eachItem.name.title,
            firstName : eachItem.name.first,
            lastName : eachItem.name.last,
            email : eachItem.email,
            streetNumber : eachItem.location.street.number,
            streetName : eachItem.location.street.name,
            city : eachItem.location.city,
            state : eachItem.location.state,
            country : eachItem.location.country,
            postcode : eachItem.location.postcode,
            imgUrl : eachItem.picture.large

        }))
        this.setState({usersData : formatedData})
       
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        const {usersData} = this.state;
        
        
        return(<div className="users-list-container">
            {usersData.map(eachUser=> <UserItem  userDetails = {eachUser}/>)}
        </div>)
    }
}

export default UsersList 