'use client';
import React, { useState } from 'react';

type LessonProps = {
  title: string,
  shortSummary?: string,
};

type LikeState = 'unset' | 'like' | 'dislike';

export function Lesson({ title, shortSummary }: LessonProps) {
  const [LikeState, setLikeState] = useState<LikeState>('unset');
  const setLike = () => {
    setLikeState('like');
  }

  return (
    <details>
      <summary>
        {title}
        <button type='button' onClick={setLike}>{LikeState === 'unset' ? 'like' : LikeState} </button>
      </summary>
      <p>{shortSummary}</p>
    </details>
  )
}
