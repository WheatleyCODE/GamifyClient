import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PathRoutes } from '../types/routes';

export const ActivatePage = () => {
  const { loginByActivationLinkReq } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();

  const redirect = () => navigate(PathRoutes.LOGIN);

  const params = useParams();

  useEffect(() => {
    if (params.link) loginByActivationLinkReq(params.link, redirect);
  }, []);

  useEffect(() => {
    if (user.isActivated) navigate(PathRoutes.DASHBOARD);
  }, [user]);

  return <div />;
};
