import React from 'react';
import Lesson from './Lesson';
import TodoList from './TodoList';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: <h1>Update</h1>,
        introduction: "Tombol ini digunakan untuk mengubah sebuah kegiatan di aktifitas yang kamu mau",
      },
      {
        name: <h1>Delete</h1>,
        introduction: 'Tombol ini digunakan untuk menghapus salah satu aktifitas kamu.',
      },
      {
        name: <h1>Add Todo</h1>,
        introduction: 'Tombol ini menambahkan aktifitas kamu',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>IF Activity.</h1>
            <h2>buat daftar kegiatan harian mu disini!!!</h2>
          </div>
          <div className='lesson-container'>
            <h3 id='how_to'>Cara Penggunaan (penjelasan button)</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson 
                  name={lessonItem.name}
                  introduction={lessonItem.introduction}
                />
              );
            }) }
          </div>
          <div className='contact-container'>
            <h3 id='to_do'>To Do List</h3>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>