import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div>
      <h1>Volunteer Registration</h1>
      <form>
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" name="name" />

        </div>
        <div>

          <label for="email">Email: </label>
          <input type="email" id="email" name="name" />
        </div>
        <div>
          <label>Task: </label>
          <select id="tasks">
            <option value="clean-up">Clean Up</option>
            <option value="set-up">Set Up</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default SignUp
