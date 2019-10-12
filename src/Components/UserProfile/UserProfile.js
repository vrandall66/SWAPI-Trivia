import React from 'react';

const UserProfile = ({ userName, userFavQuote, userRanking, userFavCharacters }) => {
  return(
    <div>
      <h1>{userName}</h1>
      <h5>{userFavQuote}</h5>
      <h5>{userRanking}</h5>
      <h5>{userFavCharacters}</h5>
    </div>
  )
}

export default UserProfile;