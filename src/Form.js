import React from 'react';
import './css/form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      experience: '',
      salary: '',
      domines: '',
      gender: '',
      location:'',
      photo:'',
      employeeDetails: [
        {
          name: 'ElonMusk',
          age: 51,
          gender: 'Male',
          experience: 25,
          salary: '$2400M+',
          domines: 'Software Engineer',
          location: 'America',
          photo:''
        },
      ],
    };
  }
  empData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name); 
  };


  getData = () => {
    this.setState({
      employeeDetails: [
        ...this.state.employeeDetails,
        {
          name: this.state.name,
          age: this.state.age,
          gender:this.state.gender,
          experience: this.state.experience,
          salary: this.state.salary,
          domines:this.state.domines,
          location: this.state.location,
          photo:this.state.photo
        },
      ],
    });
  };
  render() {
    return (
      <div className="container">
        <form action="">
          <label>Name:</label>
          <input type="text" name="name" onChange={this.empData} />
          <br />

          <label>Age:</label>
          <input type="number" name="age" onChange={this.empData} />
          <br />

          <label>Experience:</label>
          <input type="number" name="experience" onChange={this.empData} />
          <br />

          <label>Salary:</label>
          <input type="text" name="salary" placeholder="LPA" onChange={this.empData}/>
          <br />
          <label>Gender:</label>
          <input type="radio" class="radio" name="gender" value="Male" onClick={this.empData}/>
          <span>Male</span>

          <input type="radio" class="radio" name="gender" value="Female" onClick={this.empData}/>
          <span>Female</span>
          <br />
          <label>Expert as:</label>
          <ul>
            <li><input type="checkbox" name="domines"  value="FrontEnd Developer" onChange={this.empData}/> FrontEnd Developer</li>
            <li><input type="checkbox" name="domines" value="BackEnd Developer" onChange={this.empData}/> BckEnd Developer</li>
            <li><input type="checkbox" name="domines" value="FullStack Developer" onChange={this.empData}/> FullStack Developer</li>
            <li><input type="checkbox" name="domines" value="Python Developer" onChange={this.empData}/> Python Developer</li>
            <li><input type="checkbox" name="domines" value="Java Developer" onChange={this.empData}/> Java Developer</li>
            <li><input type="checkbox" name="domines" value="ReactJs Developer" onChange={this.empData}/> ReactJs Developer</li>
          </ul>
          <br />
          <label>Location:</label>
          <select name="location" id="options" onChange={this.empData}>
            <option value="Other">Other</option>
            <option value="Hyderabad">Hyderabad </option>
            <option value="Bangalore">Bangalore </option>
            <option value="Chennai">Chennai </option>
            <option value="Pune">Pune</option>
            <option value="New Delhi">New Delhi</option>
          </select>
        </form>
        <label>Photo:</label>
          <input type="file" accept="image/*" name="photo" onChange={this.empData}/>
          <br/>
        <button className="btn btn-primary mt-4" onClick={this.getData}>
          Submit
        </button>
        <hr /> 
        <table className="text-center mb-3">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Domines</th>
            <th>Location</th>
            <th>Photo</th>
          </tr>
          {this.state.employeeDetails.map(function (data, i) {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.experience}</td>
                <td>{data.salary}</td>
                <td>{data.domines}</td>
                <td>{data.location}</td>
                <td>{data.photo}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Form;
