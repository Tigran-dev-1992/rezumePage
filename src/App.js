import React from 'react'
import './App.css';
import img from './tik.png'

function App() {
  return (
    <div className="App">
      <img src={img} alt="" />
      <h3>Имя:</h3>Тигран Карапетян
      <h3>Дата рождения:</h3>1992.07.31
      <h3>E-mail:</h3>tikokarap@mail.ru
      <h3>Моб. тел:</h3>094743885
      <h3>Желаемая должность:</h3>React-Redux-Typscript-developer
      <h3>Образование:</h3>Ереванский Государственный Политехнический Университет(учился год потом пошел в армию).
      <h3>Знания языков:</h3>Английский: базовый уровень,русский :свободно,армянский: отлично.
      <h3>Сайты::</h3>
      <a href="https://todolisther.herokuapp.com/" target="_blank">https://todolisther.herokuapp.com/</a>
      <a href="https://tigran-dev-1992.github.io/project" target="_blank">https://tigran-dev-1992.github.io/project</a>
      <a href="https://myherokufork.herokuapp.com/" target="_blank">https://myherokufork.herokuapp.com/</a>
      <a href="https://tigran-dev-1992.github.io/csspage/" target="_blank">https://tigran-dev-1992.github.io/csspage/</a>
      <a href="https://gamecards1.herokuapp.com/" target="_blank">https://gamecards1.herokuapp.com/</a>
      <h3>Github Page :</h3> <a href="https://github.com/Tigran-dev-1992" target="_blank">https://github.com/Tigran-dev-1992</a>
    </div>
  );
}

export default App;
