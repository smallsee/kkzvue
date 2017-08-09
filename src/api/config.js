export const ERR_OK = 0;
export const apiDomain = 'http://127.0.0.1:8000/';

export const imageDeleteUrl =  apiDomain + 'api/image/delete';

export const loginUrl =  apiDomain + 'oauth/token';
export const userUrl =  apiDomain + 'api/user';

export const videoUrl =  apiDomain + 'api/admin/video';
export const videoStoreUrl =  apiDomain + 'api/admin/video';

export const videoHomeUrl =  apiDomain + 'api/video';

export const AkiraUrl =  apiDomain + 'api/akira';
export const TagUrl =  apiDomain + 'api/tag';


export const LoginUrl =  apiDomain + 'api/user/login';
export const UserInfoUrl =  apiDomain + 'api/user/me';

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer  ' + tokenData.access_token
  };

  return headers
};