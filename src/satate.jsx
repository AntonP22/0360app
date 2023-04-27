const user = {
  name: "Иван",
  lastName: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id provident neque praesentium rem consectetur vero amet optio, sint recusandae. Cum mollitia quod ut earum nobis eaque rem quaerat delectus!",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=200&q=80",
};

const users ={
  0:{name:"Кристина", lastName:"Иванова", id: 4, avatar : "https://picsum.photos/200"},
  1:{name:"Ксения", lastName:"Чижикова", id: 6, avatar : "https://picsum.photos/200"},
  2:{name:"Сергей", lastName:"Петров", id: 7, avatar : "https://picsum.photos/200"},
  3:{name:"Диана", lastName:"Петрова", id: 16, avatar : "https://picsum.photos/200"},
  4:{name:"Антон", lastName:"Петров", id: 3, avatar : "https://picsum.photos/200"},
  5:{name:"Александр", lastName:"Иванов", id: 33, avatar : "https://picsum.photos/200"},
  6:{name:"Светлана", lastName:"солнцева", id: 90, avatar : "https://picsum.photos/200"},
}


export function getUser(userId) {
  for(let i = 0; i < Object.keys(users).length; i++) {
  if (users[i].id == userId) return users[i];
  }
  return user;
}
export function getUsers(){
  return users;
}