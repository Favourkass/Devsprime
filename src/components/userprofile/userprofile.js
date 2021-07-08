import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/actions/userprofile.action'
import { useSelector } from "react-redux";

function UsersContainer ({ userData, fetchUsers }) {
  let user = useSelector((state) => state.user.users);

  useEffect(() => {fetchUsers()}
  , [fetchUsers])

  return (
    <div>
      { user.data===undefined? <p>Loading</p>:
      <p>{user.data.fullname}</p>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
