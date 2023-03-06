import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import TMDB from '../../assets/photo.svg'
export const headerLeft = [
     {
          name:'logo',
          type: 'logo',
          src: TMDB
     },
     {
          name:'Movies',
          type: 'text'
     },
     {
          name:'TV Shows',
          type: 'text'
     },
     {
          name:'Movies',
          type: 'text'
     },
     {
          name:'More',
          type: 'text'
     },
]
export const headerRight = [
     {
          name:'plus',
          type: 'icon'
     },
     {
          name:'EN',
          type: 'language'
     },
     {
          name:'Login',
          type: 'pass',
          number: '1',
     },
     {
          name:'Join TMDB',
          type: 'pass',
          number: '2',
     },
     {
          name:'search',
          type: 'icon'
     },
]