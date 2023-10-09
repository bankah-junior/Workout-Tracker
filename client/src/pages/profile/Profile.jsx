import React, { useEffect } from 'react'
import { Footer, Navbar, WorkoutDetails, WorkoutForm } from '../../components'
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useLogout } from '../../hooks/useLogout'

const Profile = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div>
      <Navbar />
      <div className="home relative my-8 px-4 sm:px-12 flex flex-col-reverse sm:flex-row justify-between">
        <div className="sm:w-[30%] relative sm:fixed top-26 sm:right-4">
          <WorkoutForm />
        </div>
        <div className="workouts sm:w-3/5 mb-6">
            <div className='flex flex-col sm:flex-row justify-between sm:items-end'>
              <div className='p-2 sm:p-4 border-2 border-white rounded inline-block text-lg text-white'>
                <h4>{user.username}</h4>
                <h4>{user.email}</h4>
              </div>
              <button className="p-2 mt-4 sm:mt-0 sm:p-4 border-2 border-white rounded text-lg text-white" onClick={handleClick}>Logout</button>
            </div>
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
      </div>      
      <Footer />
    </div>
  )
}

export default Profile