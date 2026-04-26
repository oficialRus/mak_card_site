import { DECK_RASSVET_TECHNIQUES } from './deckRassvetTechniques';
import { DECK_YAVYBIRAJU_TECHNIQUES, type DeckTechnique } from './deckYaVybirajuTechniques';

export type DeckAboutSectionKey = 'default' | 'garmonia-dnya';

export interface DeckMakDetailConfig {
  title: string;
  kicker: string;
  heroLeads: readonly [string, string];
  nameplateLine2: string;
  imageSrc: string;
  imageAlt: string;
  elicartBuyUrl: string;
  techniques: DeckTechnique[];
  /** Текст в карточке после инструкции ОЖИВИ: «default» — общий, «garmonia-dnya» — под колоду «ГАРМОНИЯ ДНЯ». */
  aboutSectionKey?: DeckAboutSectionKey;
}

export const DECK_DETAIL_YA_VYBIRAJU: DeckMakDetailConfig = {
  kicker: 'Метафорические ассоциативные карты',
  title: 'Я выбираю быть...',
  heroLeads: [
    'Эти карты помогают преодолевать внутренние барьеры, принимать себя и освобождаться от негативных установок. Подходят для работы с психологами, коучами, а также для самостоятельной работы и самотерапии.',
    'Карты с AR-визуализацией оживают, создавая мощный визуальный опыт, сопровождающийся минутным роликом с мотивационной озвучкой и вопросом в конце, который нужно обдумать.',
  ],
  nameplateLine2: '«Я выбираю быть...»',
  imageSrc: '/pod_pablik/ya-vybirayu-byt-cover.png',
  imageAlt: 'Колода «Я выбираю быть...»',
  elicartBuyUrl: '/buy',
  techniques: DECK_YAVYBIRAJU_TECHNIQUES,
};

export const DECK_DETAIL_RASSVET: DeckMakDetailConfig = {
  kicker: 'Метафорические ассоциативные карты',
  title: 'ГАРМОНИЯ ДНЯ',
  heroLeads: [
    'Колода «ГАРМОНИЯ ДНЯ» — это инструмент для глубокого самопознания и работы с внутренними вопросами. Каждая карта включает в себя образ и текст, которые помогут вам понять свои эмоции и чувства в текущий момент, сфокусироваться на том, что важно для вас сегодня, принять решение или найти ответ на важный вопрос, настраиваясь на гармоничный день.',
    'Каждая карта обладает возможностью активации через приложение. Вы можете навести камеру на карту и увидеть видео-послание на день. Это поможет вам лучше понять послание карты и углубить работу с образами. Карты идеально подходят для личной работы, а также для использования на коуч- и терапевтических сессиях. Они подходят как для женщин, так и для мужчин. Для первого знакомства с колодой оживите лицевую сторону коробки, чтобы погрузиться в мир ассоциаций и метафор.',
  ],
  nameplateLine2: '«ГАРМОНИЯ ДНЯ»',
  imageSrc: '/pod_pablik/garmonia-dnya-cover.png',
  imageAlt: 'Колода «ГАРМОНИЯ ДНЯ»',
  elicartBuyUrl: '/buy',
  techniques: DECK_RASSVET_TECHNIQUES,
  aboutSectionKey: 'garmonia-dnya',
};
