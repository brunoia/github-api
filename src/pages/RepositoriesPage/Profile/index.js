import React from 'react';

import PropTypes from 'prop-types';

import {
  MdArrowBackIos,
  MdGroup,
  MdWork,
  MdLocationCity,
  MdLink,
} from 'react-icons/md';

import {
  Container,
  Header,
  Back,
  Avatar,
  Login,
  Name,
  Inner,
  Data,
} from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Back to="/">
        <MdArrowBackIos size={16} />
        Back
      </Back>
      <Avatar src={user.avatar_url} />
      <Name>{user.name}</Name>
      <Login>{user.login}</Login>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        {user.followers} &nbsp; <i>followers</i> &nbsp; &middot; &nbsp;{' '}
        {user.following} &nbsp;
        <i>following</i>
      </Data>
      {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
      )}
      {user.blog && (
        <Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`} target="__blank">
            {user.blog}
          </a>
        </Data>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
};

export default Profile;
