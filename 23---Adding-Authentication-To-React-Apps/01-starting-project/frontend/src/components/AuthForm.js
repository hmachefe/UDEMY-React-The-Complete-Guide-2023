import { Form, useActionData, useNavigation, useSearchParams } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { Link } from 'react-router-dom';

  function AuthForm() {

  // we get action data if our router related action() returns something.
  // Something else other than return redirect()
  // Where action() has been implemented in the Authentication file, 

  const data = useActionData();
  const navigation = useNavigation();

  // query parameters are officially called search params
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) =>
              <li key={error}>
                {error}
              </li>
            )}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? "Submitting ... ": "Save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
