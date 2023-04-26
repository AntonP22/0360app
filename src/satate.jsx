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
  0:{name:"Кристина", lastName:"Иванова"},
  1:{name:"Ксения", lastName:"Чижикова"},
  2:{name:"Сергей", lastName:"Петров"},
  3:{name:"Диана", lastName:"Петрова"},
}


export function getUser() {
    return user;
}
export function getUsers(){
  return users;
}