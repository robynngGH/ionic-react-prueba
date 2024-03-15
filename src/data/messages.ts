export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
}

const messages: Message[] = [
  {
    fromName: 'Robyn Navarro',
    subject: 'Trip to Milwaukee (allí me voy :D)',
    date: '9:32 AM',
    id: 0
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 PM',
    id: 1
  },
  {
    fromName: 'Laura Espinoza',
    subject: 'Ionic-React App test',
    date: '4:55 AM',
    id: 2

  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3
  },
  {
    fromName: 'Mariano de la Osaa',
    subject: 'Otra prueba de cambio de asunto',
    date: 'Yesterday',
    id: 4
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
