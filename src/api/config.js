export const ERR_OK = 0;
export const apiDomain = 'http://127.0.0.1:8000/';

export const imageDeleteUrl =  apiDomain + 'api/image/delete';

export const loginUrl =  apiDomain + 'oauth/token';
export const userUrl =  apiDomain + 'api/user';

export const videoUrl =  apiDomain + 'api/admin/video';
export const videoStoreUrl =  apiDomain + 'api/admin/video';


export const artStoreUrl =  apiDomain + 'api/admin/art';
export const artUrl =  apiDomain + 'api/admin/art';

export const articleUrl =  apiDomain + 'api/admin/article';

export const videoHomeUrl =  apiDomain + 'api/video';
export const videoShowUrl =  apiDomain + 'api/admin/video';
export const videoRecommendUrl =  apiDomain + 'api/video/recommend';

export const topicUrl =  apiDomain + 'api/topic';
export const akiraUrl =  apiDomain + 'api/akira';
export const tagUrl =  apiDomain + 'api/tag';
export const weekUrl =  apiDomain + 'api/week';
export const commitUrl =  apiDomain + 'api/commit';
export const searchUrl =  apiDomain + 'api/video/search';


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