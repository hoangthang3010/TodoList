import React, { Component } from 'react';


class taskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '' ,
      name : '' ,
      status : true
    }
  }

  componentWillMount() {
    if(this.props.task){
      this.setState ({
        id :this.props.task.id,
        name : this.props.task.name,
        status : this.props.task.status
      })
    }
  }
  componentWillReceiveProps(a) {
    if (a && a.task) {
      this.setState ({
        id :a.task.id,
        name : a.task.name,
        status : a.task.status
      })
    }
  }
  CloseFrom = () => {
    this.props.CloseFrom();
  }
  onChange = (event) => {
    var target = event.target ; 
    var name = target.name 
    var value = target.value 
    if(target.name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState ({
      [name] : value
    });
  }
  onSubmit = (event) => {
    var task = {
      id : this.state.id,
      name : this.state.name , 
      status : this.state.status 
    }
    this.props.onSubmit(task)
    event.preventDefault();
    this.onClear()
    this.CloseFrom()
  }
  onClear = () => {
    this.setState ({
      name : '' ,
      status : true
    })
  }
  render() {
    var {id} = this.state
    return(
          <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title"> {id !== ''? 'Cập nhật công việc' : 'thêm công việc' }
                  <span
                    onClick = {this.CloseFrom} 
                  ><i className="fas fa-window-close text-right"></i></span>
                </h3>
            </div>
            <div className="panel-body">
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label>Tên :</label>
                    <input 
                      type="text" 
                      className="form-control"  
                      placeholder="Tên công việc" 
                      name = "name"
                      value ={ this.state.name}
                      onChange = {this.onChange}

                    />
                    <label>Trạng Thái</label>
                    <select 
                      name="status" 
                      className="form-control" 
                      value ={ this.state.status}
                      onChange = {this.onChange}
                    >
                        <option value={true}>Kích hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                
                </div>
                <div className="center">
                    <button type="submit" className="btn btn-warning">
                      <span><i className="fas fa-plus-square"></i> </span>
                      Lưu Lại
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick = {this.onClear}>
                    <span><i className="fas fa-window-close "></i> </span>
                      Hủy Bỏ</button>
                </div>
            </form>
            </div>
          </div> 
    );
  }
}
export default taskForm;