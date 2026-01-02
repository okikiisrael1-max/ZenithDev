import bgImage1 from './bgImage1.png'
import bgImage2 from './bgImage2.png'
import email_icon from './email_icon.svg'
import facebook_icon from './facebook_icon.svg'
import group_profile from './group_profile.png'
import hero_img from './hero_img.png'
import instagram_icon from './instagram_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import menu_icon from './menu_icon.svg'
import person_icon from './person_icon.svg'
import social_icon from './social_icon.svg'
import twitter_icon from './twitter_icon.svg'
import hero from './Hero.jpg'
import project_1 from './project_1.jpg'
import project_2 from './project_2.jpg'
import project_3 from './project_3.jpg'

export const assets = {
    bgImage1,
    bgImage2,
    facebook_icon,
    email_icon,
    group_profile,
    hero_img,
    instagram_icon,
    linkedin_icon,
    menu_icon,
    person_icon,
    social_icon,
    twitter_icon,
    hero,
    project_1,
    project_2,
    project_3,
}

export const projects = [
    {
        title : "Prescripto",
        desc : "Doctor Appointment Booking",
        image : project_1,
        skill : ['React', 'Tailwind', 'Framer'] , 
        URL: 'https://prescriptos-ten.vercel.app/'
    },
    {
        title : "Real Estate",
        desc : "House Booking",
        image : project_2,
        skill : ['React', 'Tailwind', 'CSS'] , 
        URL : 'https://real-estate-hazel-eight.vercel.app/'
    },
    {
        title : "Gym Booking & subscription",
        desc : "Book an appointment with a gym instructor",
        image : project_3,
        skill : ['React', 'Tailwind', 'Framer'] , 
        URL : 'https://gym-booking-ten.vercel.app/'
    }
]