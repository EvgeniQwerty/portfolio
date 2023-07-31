import ProdComp from '../images/production_company.jpg';
import StreamsGuesser from '../images/streams_guesser.jpg';
import ReduxCountries from '../images/redux_countries.jpg';
import ReduxJob from '../images/redux_job.jpg';
import ReactRecipe from '../images/react_recipe.jpg';
import ReactShop from '../images/react_shop.jpg';
import ReactMovies from '../images/react_movies.jpg';
import IPTracker from '../images/ip_tracker.jpg';
import TODOList from '../images/todo_list.jpg';
import GamerStation from '../images/gamer_station.jpg';
import BalloonTours from '../images/balloon_tours.jpg';
import GuitarTeacher from '../images/guitar_teacher.jpg';

export const projectsList = [
    {
        name: 'BAZA Видео/фото-продакшн',
        description: 'Сайт-портфолио для видео/фото-продашкна',
        image: ProdComp,
        link: 'https://evgeniqwerty.github.io/production-company',
        code: 'https://github.com/evgeniqwerty/production-company',
        tools: ['Vanilla JS', 'SASS'],
    },
    {
        name: 'Streams Guesser',
        description:
            'SPA приложение-игра, простроенная на базе Youtube API, цель которой - правильно выбрать клип с большим количеством просмотров',
        image: StreamsGuesser,
        link: 'https://evgeniqwerty.github.io/streams-guesser',
        code: 'https://github.com/evgeniqwerty/streams-guesser',
        tools: ['React', 'Chakra UI', 'API'],
    },
    {
        name: 'Redux Countries',
        description:
            'SPA приложение про флаги и страны. Имеются встроенные фильтры по континенту и стране',
        image: ReduxCountries,
        link: 'https://evgeniqwerty.github.io/redux-countries',
        code: 'https://github.com/evgeniqwerty/redux-countries',
        tools: ['React', 'Redux', 'Styled Components', 'API'],
    },
    {
        name: 'Redux Job',
        description:
            'Небольшое приложение, показывающее работу фильтров при работе с Redux',
        image: ReduxJob,
        link: 'https://evgeniqwerty.github.io/redux-job',
        code: 'https://github.com/evgeniqwerty/redux-job',
        tools: ['React', 'Redux'],
    },
    {
        name: 'React Recipe',
        description:
            'SPA приложение с рецептами еды. Использовано TheMealDB API для получения рецептов',
        image: ReactRecipe,
        link: 'https://evgeniqwerty.github.io/react-recipe',
        code: 'https://github.com/evgeniqwerty/react-recipe',
        tools: ['React', 'Materialize CSS', 'API'],
    },
    {
        name: 'React Shop',
        description: 'Приложение-магазин с функционирующей корзиной',
        image: ReactShop,
        link: 'https://evgeniqwerty.github.io/react-shop',
        code: 'https://github.com/evgeniqwerty/react-shop',
        tools: ['React', 'Materialize CSS', 'API'],
    },
    {
        name: 'React Movies',
        description:
            'Приложение, в котором можно найти фильмы через поиск и почитать про них информацию. Использовано OMDB API для получения данных о фильмах',
        image: ReactMovies,
        link: 'https://evgeniqwerty.github.io/react-movies',
        code: 'https://github.com/evgeniqwerty/react-movies',
        tools: ['React', 'Materialize CSS', 'API'],
    },
    {
        name: 'IP Tracker',
        description:
            'Приложение показывает местонахождение пользователя по IP адресу. Использовано Ipify API для получения данных об IP',
        image: IPTracker,
        link: 'https://evgeniqwerty.github.io/ip-tracker',
        code: 'https://github.com/evgeniqwerty/ip-tracker',
        tools: ['Vanilla JS', 'SASS', 'API'],
    },
    {
        name: 'TODO List',
        description:
            'TODO приложение с post/get/delete/put реквестами. Использовано JSONplaceholder API для работы c БД',
        image: TODOList,
        link: 'https://evgeniqwerty.github.io/todo-list',
        code: 'https://github.com/evgeniqwerty/todo-list',
        tools: ['Vanilla JS', 'API'],
    },
    {
        name: 'Gamer station',
        description: 'Лендинг для компьютерного клуба. Сделано с помощью Grid',
        image: GamerStation,
        link: 'https://evgeniqwerty.github.io/gamer-station',
        code: 'https://github.com/evgeniqwerty/gamer-station',
        tools: ['HTML', 'SASS'],
    },
    {
        name: 'Balloon tours',
        description:
            'Лендинг для компании по организации полётов на шарах. Сделано с помощью Flex',
        image: BalloonTours,
        link: 'https://evgeniqwerty.github.io/balloon-tours',
        code: 'https://github.com/evgeniqwerty/balloon-tours',
        tools: ['HTML', 'SASS'],
    },
    {
        name: 'Guitar Teacher',
        description: 'Лендинг для учителя по гитаре. Сделано с помощью Flex',
        image: GuitarTeacher,
        link: 'https://evgeniqwerty.github.io/guitar-teacher',
        code: 'https://github.com/evgeniqwerty/guitar-teacher',
        tools: ['HTML', 'SASS'],
    },
];
