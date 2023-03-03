//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='App'>
      <Menu />
      <MainWindow />
    </div>
  );
}

function Menu() {
  return (
    <div id='Menu'>
      <table>
        <th><a href='index.html'>首页</a></th>
        <th><a href='profession.html'>专业</a></th>
        <th><a href='lessons.html'>课程</a></th>
        <th><a href='srtp.html'>SRTP</a></th>
        <th><a href='other.html'>其他</a></th>
        <th><a href='submit.html'>投稿</a></th>
        <th><a href='about.html'>关于</a></th>
      </table>
    </div>
  )
}

function MainWindow() {
  return (
    <div id='mainWindow'>
      <div class='list'>
        <dl>
          <caption><b>最新更新</b></caption>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
        </dl>
      </div>
      <div class='list'>
        <dl>
          <caption><b>点赞最多</b></caption>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
          <dt class='Update'><a href='https://www.icourse163.org/course/ZJU-1206573810'>机器学习-浙江大学-胡浩基</a></dt>
        </dl>
      </div>
    </div>
  );
}

export default App;
