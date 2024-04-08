
const Newsletter = () => {
  return (
   <form  className="form">
    <h4 style={{ textAlign: 'center', marginBottom:'2rem'}}>our newsletter</h4>

      {/* Name */}

      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input 
        type='text'
         className="form-input" 
         name="name" 
         id="name" 
         defaultValue="John" />

         {/* Last Name */}

        <label htmlFor="lastName" className="form-label">last name</label>
        <input 
        type='text'
         className="form-input" 
         name="lastName" 
         id="lastName" 
         defaultValue="John" />


         {/* Email */}
        <label htmlFor="email" className="form-label">Email</label>
        <input 
        type='email'
         className="form-input" 
         name="email" 
         id="email" 
         defaultValue="John@email.com" />

         <button type ="button" className="btn btn-block" style={{marginTop:'0.5rem'}} >
            submit
         </button>
  
      </div>
   </form>
  )
}

export default Newsletter