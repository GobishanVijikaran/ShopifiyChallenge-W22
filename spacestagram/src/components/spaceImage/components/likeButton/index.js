import React, { useState } from 'react'
import emptyLikeIcon from '../../../../assets/favourite-empty.png';
import filledLikeIcon from '../../../../assets/favourite-filled.png';

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false)
  // const isFavorite = useSelector((state) => getFavoriteButtonState(state));
  
  const onToggleFavorite = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <div>
      <button>
        <img src={isLiked ? filledLikeIcon : emptyLikeIcon} onClick={onToggleFavorite}/>
      </button>
    </div>
  )
}

export default LikeButton
