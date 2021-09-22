import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import emptyLikeIcon from '../../../../assets/favourite-empty.png';
import filledLikeIcon from '../../../../assets/favourite-filled.png';
import { likeImage } from '../../../../redux/actions';

export const LikeButton = () => {
  const isFavorite = useSelector((state) => state.images.liked);
  const [isLiked, setIsLiked] = useState(isFavorite)
  const dispatch = useDispatch();

  const onToggleFavorite = () => {
    setIsLiked(!isLiked);
    dispatch(likeImage())
  };
  
  return (
    <div>
      <button style={{ padding: 0, border: 'none', background: 'none' }}>
        <img src={isLiked ? filledLikeIcon : emptyLikeIcon} onClick={onToggleFavorite}/>
      </button>
    </div>
  )
}

export default LikeButton
