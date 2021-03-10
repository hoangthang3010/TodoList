import React, { Component } from 'react';

class App extends Component {
  setStatus =()=> {
    this.props.setStatus2(this.props.id)
  }
  onDelete2 = () => {
    this.props.onDelete1(this.props.id)
  }
  onUpDate = () => {
    this.props.onUpDate1(this.props.id)
  }
  render() {
    return(
          <tr>
              <td className="center">{this.props.Stt + 1}</td>
              <td className="center">{this.props.Name}</td>
              <td className="center">
                  
                  <button type="button" className="btn btn-default"  onClick= {this.setStatus}>
                    <span 
                      className = {this.props.Status === true ? 'label label-danger' : 'label label-success'}
                    >
                      {this.props.Status === true ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                  </button>
                  
              </td>
              <td className="center">
                <button 
                  type="button" 
                  className="btn btn-warning"
                  onClick = {this.onUpDate}
                >
                  <span><i className="fas fa-pencil-alt"></i> Sửa</span>
                </button> 
                &nbsp;
                <button 
                  type="button" 
                  className="btn btn-danger"
                  onClick = {this.onDelete2} 
                >
                  <span><i className="fas fa-trash-alt"></i> xóa</span>
                </button> 
              </td>
          </tr>
    );
  }
}
export default App;
