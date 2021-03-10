import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/taskForm';
import SearchSort from './components/searchsort';
import ShowData from './components/showdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [], //id , name , status
      DisplayFrom : false,
      tasksEditing : null,
    }
  }
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var task = JSON.parse(localStorage.getItem('tasks'))
      this.setState ({
        tasks : task
      })
    }
  }
  random() {
    return Math.floor((1+Math.random())*0x1000000).toString(16).substring(1); //tostring(16) biểu diễn dưới dạng thập lục phân , subString loaij phần tử đầu còn lại lấy hết

  }
  generateID() {
    return this.random() + '-' + this.random() + '-' + this.random() + '-' + this.random()
  }
  showFrom = () => {
    this.setState ({
      DisplayFrom : true
    })
  } 
  CloseFrom = () => {
    this.setState ({
      DisplayFrom : false
    })
  }
  onSubmit = (data) => {
    var {tasks} = this.state;
    if(data.id !== ''){
      var index = this.fineIndex(data.id);
      tasks[index] = data;
    }else {
      data.id = this.generateID();
      tasks.push(data);
    }
    this.setState ({
      tasks : tasks,
      tasksEditing : null
    })
    localStorage.setItem('tasks' , JSON.stringify(tasks))
  }
  setStatus0 = (id) => {
    var {tasks} = this.state
    var index = this.fineIndex(id)
    if(index !== -1) {
      tasks[index].status =  !tasks[index].status
      this.setState ({
        tasks : tasks
      })
    }
    localStorage.setItem('tasks' , JSON.stringify(tasks))
  }
  fineIndex = (id) => {
    var {tasks} = this.state
    var a = -1
     tasks.forEach((value , index) => {
       if(value.id === id){
         a = index;
       }
    });
    return a ;
  }
  onDelete = (id) => {
    var {tasks} = this.state
    var index = this.fineIndex(id) 
    if(index !== -1){
      tasks.splice(index , 1) // index laf phan tu xoa  con 1 la so phan tu muon xoa sau index
      this.setState ({
        tasks : tasks
      })
    }
    localStorage.setItem('tasks' , JSON.stringify(tasks))
    this.CloseFrom()
  }
  onUpDate = (id) =>{
    var {tasks} = this.state
    let index = this.fineIndex(id)
    let tasksEditing = tasks[index]
    this.setState ({
      tasksEditing: tasksEditing
    })
    this.showFrom()
  }
  render() {
    var {tasks, DisplayFrom , tasksEditing} = this.state; // giống như  var tasks = this.state.task
    var addFrom = DisplayFrom ? <TaskForm 
                                  onSubmit = {this.onSubmit} 
                                  CloseFrom = {this.CloseFrom} 
                                  task = {tasksEditing}
                                /> : '' ;
    return(
      <div className = "container">
        <h1 className="center">Quản Lý Công Việc</h1>
        <hr/>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {addFrom}
          </div> 
          <div className={DisplayFrom ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick = {this.showFrom}
            >
               <span><i className="fas fa-plus-square"></i>      </span>
                      Thêm công việc
            </button>
             <SearchSort/>
             <ShowData  
                tasks = {tasks}
                setStatus1 = {this.setStatus0}
                onDelete = {this.onDelete}
                onUpDate = {this.onUpDate}
             />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
