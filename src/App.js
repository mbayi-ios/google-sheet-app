
import { Component } from 'react';
import './App.css';
import { Button, Container, Form, Header } from 'semantic-ui-react';
import axios from 'axios';
import SheetData from './SheetData';

export default class App extends Component  {
    constructor (props) {
        super(props)

        this.state = {
          name: '',
          parent: '',
          phone: '',
          session: 'Wedneday',
          date: ''
        }
      }

   changeHangler = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }

   submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)

    axios.post('https://sheet.best/api/sheets/86247ce9-875e-4bd8-bab6-f53ff5ff4bbf', this.state)
    .then(response => {
      console.log(response)
    })

    this.setState  ({
      name: '',
      parent: '',
      phone: '',
      session: '',
      date: ''
    })

  }
 render() {
  const { name, parent, phone, session, date} = this.state; 

  return (
    <Container fluid className="container">
        <Header as='h2'>Karengata Children's Ministries</Header>
        <p>This is to invite all Children / Teens to take part in Wedneday Prayer Session and Sabbath Children's Sermons.</p>
       
        <Form className='form' onSubmit={this.submitHandler}>
            <Form.Field>
              <label >Name</label>
              <input placeholder='Your name' type='text' name= "name" value = {name} onChange= {this.changeHangler} required />
            </Form.Field>

            <Form.Field>
              <label >Parent's Name</label>
              <input placeholder='Parent name' type='text' name= "parent" value = {parent} onChange= {this.changeHangler} required />
            </Form.Field>

            <Form.Field>
              <label>Phone</label>
              <input placeholder='Enter your Phone' type='tel' name="phone" value = {phone} onChange={this.changeHangler} required />
            </Form.Field>
              <label>Pick a Session</label>
              <select name="session" value={session} onChange={this.changeHangler}>
                <option value="">Please choose a session</option>
                  <option value="wednesday">Wednesday Mid Week</option>
                  <option value="sabbath">Sabbath Children's Sermon</option>
              </select>
            <Form.Field>

            </Form.Field>

            <Form.Field>
              <label > Date</label>
              <input placeholder='Enter your salary' type='date'  min="2023-08-01" max="2023-12-30" name="date" value = {date} onChange={this.changeHangler} required />
            </Form.Field>


            <Button color='blue' type='submit'>Submit</Button>
        </Form>

        <SheetData />
    </Container>
  );
}
}
