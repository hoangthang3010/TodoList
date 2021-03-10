import React, { Component } from 'react';
import ItemData from './itemTable';

class ShowData extends Component {
  render() {
      var element = this.props.tasks.map((value , index) => {
          return <ItemData
                    key = {index}
                    Stt = {index}
                    Name ={value.name}
                    Status = {value.status}
                    id = {value.id}
                    setStatus2 = {this.props.setStatus1}
                    onDelete1 = {this.props.onDelete}
                    onUpDate1 = {this.props.onUpDate}
                />
      });
    return(
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-20">
          <table className="table table-hover">
              <thead>
                  <tr>
                      <th className="center">STT</th>
                      <th className="center">Tên</th>
                      <th className="center">Trạng Thái</th>
                      <th className="center">Hành Động</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td></td>
                      <td> 
                          <input type="text" name="filterName"/>
                      </td>
                      <td>
                          <select name="filterStatus" className="form-control" required="required">
                              <option value="all">Tât cả</option>
                              <option value="hidden">Ẩn</option>
                              <option value="on">Kích Hoạt</option>
                          </select>
                      </td>
                      <td></td>
                  </tr>
                  {element}
              </tbody>
          </table>
          
      </div>
    );
  }
}
export default ShowData;
