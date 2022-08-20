import React from "react";
import { EarlyAccessTemplate } from '../../templates'

const EarlyAccess = () => {
  const props = {
    banner: {
      title: 'Get Started with Mind Yeti',
      subtitle: 'Introduce Mind Yeti to your kids and stat experiencing more calm in the classroom',
      cta: [
        {
          variant: 'blank',
          text: 'Get Started',
          handleClick: ()=> {
            alert('Get Started')
          }
        },
        {
          variant: 'blank',
          text: 'Deepen Practice',
          handleClick: ()=> {
            alert('Deepen Practice')
          }
        }
      ]
    },
    resourcesTeacher: {
      title: 'Resources for Teachers',
      subtitle: 'Welcome to Mind Yeti. Use the resources and the two introducctory Mind Yeti playlists to support a calm, connected and focused classroom environment.',
      cta: [
        {
          addorment: 'pdf',
          text: 'Get Started Guid for Educators',
          handleClick: () =>{}
        },
        {
          addorment: 'pdf',
          text: 'Mindfulness in the Classroom',
          handleClick: () =>{}
        },
        {
          addorment: 'pdf',
          text: 'Introduce Mind Yeti to Families',
          handleClick: () =>{}
        },
        {
          addorment: 'pdf',
          text: 'Introduce Mind Yeti to kids',
          handleClick: () =>{}
        }
      ]
    },
    playlist:{
      title: 'Get Started Playlist',
      subtitle: `It takes time to build a new habit. Play a new session each day. 
      When it is time to watch a video, read the video guide and play a session afterwards. 
      If you really like a session, you can always listen to it again!`,
      lessons: [
        {
          title: '1. Welcome to Mind Yeti',
          subtitle: 'Watch this brief video introduction to the world of Yeti. 1:40',
          icon: 'camara',
          hasVideo: true,
          cta: [
            {
              variant: 'default',
              text: 'Watch Video',
              handleClick: () => {}
            },
            {
              variant: 'blank',
              addorment: 'pdf',
              text: 'How to introduce Mind Yeti',
              handleClick: () => {}
            }
          ]
        },
        {
          title: '2. Slow Breathing Intro',
          subtitle: 'Slow breathing can calm your mind and body. 2:37',
          hasVideo: false,
          cta: [
            {
              variant: 'default',
              appareance: 'secondary',
              text: 'Play Session',
              handleClick: () => {}
            },
          ]
        },
        {
          title: '3. Welcome to Mind Yeti',
          subtitle: 'Watch this brief video introduction to the world of Yeti. 1:40',
          icon: 'camara',
          hasVideo: true,
          cta: [
            {
              variant: 'default',
              text: 'Watch Video',
              handleClick: () => {}
            },
            {
              variant: 'blank',
              addorment: 'pdf',
              text: 'How to introduce Mind Yeti',
              handleClick: () => {}
            }
          ]
        },
      ]
    },
    message: {
      title: `Nice work! You've established a foundational mindfulness practice.`,
      description: `Head on over to the Deepen Your Practice Playlist and continue nurturing your new mindfulness skills.`
    }
  }

  return <EarlyAccessTemplate {...props} />
}

export default EarlyAccess;
