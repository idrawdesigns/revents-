import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}

class EventForm extends Component {
  state = {
    event: emptyEvent
  }

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  // static getDerivedStateFromProps(nextprops, prevstate) {
  //   console.log(prevstate)
  //   console.log('current', nextprops.selectedEvent)
  // }

  onFormSubmit = e => {
    e.preventDefault()
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event)
    } else {
      this.props.createEvent(this.state.event)
    }
  }

  onInputChange = e => {
    const newEvent = this.state.event
    newEvent[e.target.name] = e.target.value

    this.setState({
      event: newEvent
    })
  }
  render() {
    const { handleCancel } = this.props
    const { event } = this.state
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="Event Title"
              name="title"
              onChange={this.onInputChange}
              value={event.title}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              name="date"
              onChange={this.onInputChange}
              value={event.date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              name="city"
              onChange={this.onInputChange}
              value={event.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.title}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm
