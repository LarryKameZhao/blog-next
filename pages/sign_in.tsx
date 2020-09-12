import { NextPage, GetServerSideProps } from 'next';
import { useState, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { withSession } from 'lib/withSession';
import { User } from '../src/entity/User';
const SignIn: NextPage<{ user: User }> = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState({
    username: [],
    passowrd: [],
    passwordConfirmation: [],
  });
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData);
      axios.post(`/api/v1/sessions`, formData).then(
        () => {
          window.alert('login success');
        },
        (error) => {
          if (error.response) {
            const response: AxiosResponse = error.response;
            if (response.status === 422) {
              setErrors(response.data);
            }
          }
        }
      );
    },
    [formData]
  );
  return (
    <div>
      {props.user && <div>当前登陆用户为:{props.user.username}</div>}
      <h1>sign_in</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            用户名{' '}
            <input
              type='text'
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </label>
          {errors.username && errors.username.length > 0 && (
            <div>{errors.username.join(',')}</div>
          )}
        </div>
        <div>
          <label>
            密码{' '}
            <input
              type='password'
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </label>
          {errors.passowrd && errors.passowrd.length > 0 && (
            <div>{errors.passowrd.join(',')}</div>
          )}
        </div>
        <div>
          <button type='submit'>登陆</button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;

// @ts-ignore
export const getServerSideProps: GetServerSideProps = withSession(
  async (context) => {
    // @ts-ignore
    const user = context.req.session.get('currentUser');
    console.log('user');
    console.log(user);
    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  }
);
