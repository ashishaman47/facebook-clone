import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      {/* Story */}
      <Story
        image='https://img.mensxp.com/media/content/2018/Jan/bang-bang-1515572698-1515572721_1400x653.jpg'
        profileSrc='https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/05/pjimage-5-1589546097.jpg'
        title='Hritik Roshan'
      />
      <Story
        image='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201906/yuvrajsingh.jpeg?2JC1n3ZAC_bbwp5YVVEKrjjURjphi2Nm'
        profileSrc='https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/6/10/f98a7c0423c94666abb4578197c885ae_18.jpg'
        title='Yuvraj Singh'
      />
      <Story
        image='https://pbs.twimg.com/media/DurvVyFVYAAtf-0.jpg'
        profileSrc='https://www.bitoffun.in/wp-content/uploads/MS-dhoni-networth-2019.jpg'
        title='MS Dhoni'
      />
      <Story
        image='https://en.as.com/en/imagenes/2020/02/22/football/1582395239_494359_noticia_normal.jpg'
        profileSrc='https://www.iwmbuzz.com/wp-content/uploads/2020/03/cristiano-ronaldo-the-sportsperson-crush-across-the-globe.jpg'
        title='Cristiano Ronaldo'
      />
      <Story
        image='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fnatalierobehmed%2Ffiles%2F2017%2F08%2FEmma-Watson-1200x818.jpg'
        profileSrc='https://images.edexlive.com/uploads/user/imagelibrary/2020/6/11/original/gettyimages-485360238.jpg'
        title='Emma Watson'
      />
    </div>
  );
}

export default StoryReel;
