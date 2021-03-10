import React, { Component } from 'react';

class SearchSort extends Component {
  render() {
    return(
      <div className = "row mt-20">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group search">
                <input name="keyword" type="text" placeholder="Nhập từ khóa ....."/>
                <button type="button" className="btn btn-primary">
                    <span><i className="fas fa-search"></i>   </span>
                    Tìm kiếm
              </button>
              </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Sắp xếp
                 <span>  <i className="far fa-caret-square-right"></i></span></button>
              <ul className="dropdown-menu">
                <li>sắp xếp từ A-Z</li>
                <li>sắp xếp từ z-A</li>
                <li className="divider"></li>
                <li>Trạng thái kích hoạt</li>
                <li>Trạng thái ẩn</li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
export default SearchSort;

