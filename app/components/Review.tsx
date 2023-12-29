// Review.tsx

import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho props
interface ReviewProps {
  onAddReview: (rating: number, comment: string) => void;
}

const Review: React.FC<ReviewProps> = ({ onAddReview }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleAddReview = () => {
    // Kiểm tra xem rating và comment có giá trị hợp lệ không trước khi thêm đánh giá
    if (rating > 0 && comment.trim() !== '') {
      onAddReview(rating, comment);
      // Đặt lại giá trị sau khi thêm đánh giá
      setRating(0);
      setComment('');
    }
  };

  return (
    <div>
      <h2>Đánh Giá</h2>
      <div>
        <p>Điểm đánh giá: {rating}</p>
        <select value={rating} onChange={(e) => handleRatingChange(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <p>Bình luận:</p>
        <textarea value={comment} onChange={handleCommentChange} rows={4} />
      </div>
      <button onClick={handleAddReview}>Thêm Đánh Giá</button>
    </div>
  );
};

export default Review;
