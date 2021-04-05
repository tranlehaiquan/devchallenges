import md5 from 'md5';

const getUserAvatar = (email: string) => `https://www.gravatar.com/avatar/${md5(email)}`;

export default getUserAvatar;
