import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PathRoutes } from '../types/routes';

export const ActivatePage = () => {
  const { loginByActivationLink } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (params.link) {
      loginByActivationLink(params.link);
    }
  }, []);

  useEffect(() => {
    if (user.isActivated) {
      navigate(PathRoutes.HOME);
    }
  }, [user]);

  return <h1>Активация аккаунта</h1>;
};
