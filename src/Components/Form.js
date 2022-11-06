import useSignUpForm from '../Components/Hooks/useDammy'



const Signup = () => {
    const { formInputs, handleInputChange, handleFormSubmit } = useSignUpForm();
   
    console.log(
      `Your name is: ${formInputs.firstName} ${formInputs.lastName} and your email address is: ${formInputs.email}`
    );
   
    return (
      <form
        onSubmit={handleFormSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            required
            onChange={handleInputChange}
            value={formInputs.firstName} />
            
   <label>Last Name</label>
              <input
              type="text"
              name="lastName"
              required
              onChange={handleInputChange}
           value={formInputs.lastName} />
          </div>
     <div>
       <label>Email</label>
       <input
         type="email"
         name="email"
         required
         onChange={handleInputChange}
         value={formInputs.email} />
      </div>
     <div>
       <label>Password</label>
       <input
         type="password"
         name="password"
         onChange={handleInputChange}
         value={formInputs.password} />
      </div>

     <button type="submit">Sign up</button>
   </form>
 );
};
export default Signup;
