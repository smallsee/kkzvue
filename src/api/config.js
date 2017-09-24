export const ERR_OK = 0;
export const has_delete = 1001;
export const has_store = 1002;
export const apiDomain = 'http://127.0.0.1:8000/';

export const imageDeleteUrl =  apiDomain + 'api/image/delete';

export const loginUrl =  apiDomain + 'oauth/token';
export const RegisterUrl =  apiDomain + 'api/user/register';
export const userUrl =  apiDomain + 'api/user';

export const videoUrl =  apiDomain + 'api/admin/video';
export const videoStoreUrl =  apiDomain + 'api/admin/video';



export const artUrl =  apiDomain + 'api/admin/art';
export const artHotUrl =  apiDomain + 'api/art/hot';

export const articleUrl =  apiDomain + 'api/admin/article';
export const articleHotUrl =  apiDomain + 'api/article/hot';

export const videoHomeUrl =  apiDomain + 'api/video';
export const videoHomeHotUrl =  apiDomain + 'api/video/hot';
export const videoShowUrl =  apiDomain + 'api/admin/video';
export const videoRecommendUrl =  apiDomain + 'api/video/recommend';

export const topicUrl =  apiDomain + 'api/topic';
export const akiraUrl =  apiDomain + 'api/akira';
export const tagUrl =  apiDomain + 'api/tag';
export const weekUrl =  apiDomain + 'api/week';
export const commitUrl =  apiDomain + 'api/commit';
export const userCommitUrl =  apiDomain + 'api/user/commit';
export const userFavUrl =  apiDomain + 'api/user/fav';
export const userFanUrl =  apiDomain + 'api/user/fan';
export const FanUrl =  apiDomain + 'api/fan';
export const hasFanUrl =  apiDomain + 'api/hasfan';
export const hasFaVUrl =  apiDomain + 'api/hasfav';
export const FavUrl =  apiDomain + 'api/fav';
export const searchUrl =  apiDomain + 'api/search';


export const LoginUrl =  apiDomain + 'api/user/login';
export const UserInfoUrl =  apiDomain + 'api/user/me';
export const UserInfoEditUrl =  apiDomain + 'api/user/info/update';

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'));

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer  ' + tokenData.access_token
  };

  return headers
};