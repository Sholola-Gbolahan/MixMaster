import { Form } from "react-router-dom";
import axios from "axios";

// Posting URL
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

  // exporting action for  form submision also setup like loader
export const action = async ({ request }) => {
  // getting FormdData value from the request
  const formData = await request.formData();
  // Getting form data from entries array and turning values into object
  const data = Object.fromEntries(formData);

  // Postig form data into the URL
  const response = await axios.post(newsletterUrl, data);
  console.log(response);

  return null;
};

const Newsletter = () => {
  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>

      {/* Name */}

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="John"
        />

        {/* Last Name */}

        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="John"
        />

        {/* Email */}
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="John@email.com"
        />

        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: "0.5rem" }}>
          submit
        </button>
      </div>
    </Form>
  );
};

export default Newsletter;
