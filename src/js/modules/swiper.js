import Swiper from "swiper";
import { Pagination } from 'swiper/modules';

export const swiper = new Swiper('.swiper', {
    modules: [Pagination],

    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        dynamicBullets: true,
    }
}) 